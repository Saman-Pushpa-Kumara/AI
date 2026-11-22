const crypto = require('crypto');

function b64url(input) {
  return Buffer.from(input).toString('base64url');
}

async function getAccessToken(clientEmail, privateKey) {
  const key = privateKey.replace(/^"|"$/g, '').replace(/\\n/g, '\n');
  const now = Math.floor(Date.now() / 1000);

  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const payload = b64url(JSON.stringify({
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/firebase.messaging',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  }));

  const unsigned = `${header}.${payload}`;
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(unsigned);
  sign.end();
  const signature = sign.sign(key, 'base64url');

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${unsigned}.${signature}`
  });

  const data = await res.json();
  if (!data.access_token) throw new Error(JSON.stringify(data));
  return data.access_token;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const bodyData = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { tokens, title, body } = bodyData;

    if (!tokens || !Array.isArray(tokens) || tokens.length === 0) {
      return res.status(200).json({ ok: true, sent: 0 });
    }

    const accessToken = await getAccessToken(process.env.CLIENT_EMAIL, process.env.PRIVATE_KEY);
    const url = `https://fcm.googleapis.com/v1/projects/${process.env.PROJECT_ID}/messages:send`;

    await Promise.allSettled(
      tokens.map(token =>
        fetch(url, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: {
              token: token,
              notification: {
                title: title || 'Google Meet',
                body: body || 'New message'
              },
              android: { priority: 'high' },
              webpush: { headers: { Urgency: 'high' } }
            }
          })
        })
      )
    );

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
