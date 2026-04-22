document.addEventListener("DOMContentLoaded", () => {
    
    const authRoot = document.getElementById('auth-root');
    if (!authRoot) return;

    // Auth UI එක HTML එකට ඇතුලත් කිරීම
    authRoot.innerHTML = `
        <div id="authOverlay" class="auth-overlay">
            <div id="authBox" class="auth-box">
                <i class="fas fa-shield-alt auth-icon"></i>
                <div class="auth-title">SYSTEM LOCKED</div>
                <div class="auth-subtitle">SECURITY CLEARANCE REQUIRED</div>
                <div class="auth-input-group">
                    <input type="password" id="authInput" class="auth-input" placeholder="ENTER PIN" autocomplete="off" tabindex="0">
                </div>
                <button id="authSubmitBtn" class="auth-btn" tabindex="0">AUTHENTICATE</button>
                <div id="authErrorMsg" class="auth-error"></div>
                <div class="auth-get-pass">
                    <div class="pass-text">DON'T HAVE THE SECURITY PIN?</div>
                    <a href="https://chat.whatsapp.com/KpArraGRfO4Ily0euEsLHA?mode=gi_t" target="_blank" tabindex="0">
                        <i class="fab fa-brands fa-whatsapp"></i> REQUEST ACCESS KEY
                    </a>
                </div>
            </div>
        </div>
    `;

    // නව URL එක
    const GITHUB_AUTH_URL = "https://raw.githubusercontent.com/Saman-Pushpa-Kumara/AI/refs/heads/main/B-2/spirit/password.js";

    const authOverlay = document.getElementById('authOverlay');
    const authBox = document.getElementById('authBox');
    const authInput = document.getElementById('authInput');
    const authSubmitBtn = document.getElementById('authSubmitBtn');
    const authErrorMsg = document.getElementById('authErrorMsg');

    let isAppLocked = true; 
    let currentLivePassword = ""; 

    async function checkAuthentication() {
        const savedPin = localStorage.getItem('b2_stealth_auth_pin');

        try {
            // Browser Cache එක සම්පූර්ණයෙන්ම නැවැත්වීම
            const fetchUrl = GITHUB_AUTH_URL + '?nocache=' + Math.random();
            const response = await fetch(fetchUrl, {
                cache: 'no-store',
                headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' }
            });
            
            const textData = await response.text(); 
            let data = { status: "enabled", password: "" };

            try {
                const parsed = JSON.parse(textData);
                data.password = parsed.password || textData;
                if(parsed.status) data.status = parsed.status;
            } catch (e) {
                const match = textData.match(/['"]([^'"]+)['"]/);
                if (match && match[1]) {
                    data.password = match[1];
                } else {
                    data.password = textData;
                }
            }

            // සැඟවුණු හිස්තැන් (Spaces/Enters) සම්පූර්ණයෙන්ම මකා දැමීම 
            data.password = String(data.password).replace(/\s+/g, '').trim();
            const cleanSavedPin = savedPin ? String(savedPin).replace(/\s+/g, '').trim() : null;

            // Password එක හිස්ව (Empty) පැමිණියහොත් Unlock වීම වැලැක්වීම
            if (data.password === "") {
                showAuthUI();
                showAuthError("SYSTEM ERROR: KEY NOT FOUND.");
                return;
            }

            // Status එක disabled නම් කෙලින්ම ඇතුලට යැවීම
            if (data.status === "disabled") {
                currentLivePassword = data.password;
                unlockApp();
                return;
            }

            // අලුත් Password එක සහ පරණ Password එක සමානදැයි බැලීම
            if (data.password === cleanSavedPin) {
                currentLivePassword = data.password;
                unlockApp(); // සමාන නම් UI එක නොපෙන්වා ඇතුලට යවයි
            } else {
                currentLivePassword = data.password;
                showAuthUI(); // අසමාන නම් (වෙනස් කර ඇත්නම්) UI එක පෙන්වයි
                if(cleanSavedPin) showAuthError("SECURITY KEY UPDATED. RE-ENTER PIN.");
            }
            
        } catch (error) {
            console.error("Authentication check failed:", error);
            showAuthUI();
            showAuthError("CONNECTION ERROR. SYSTEM LOCKED.");
        }
    }

    function showAuthUI() {
        authOverlay.style.display = 'flex'; 
        authBox.classList.add('show');
        authInput.focus();
        const vid = document.querySelector('video'); 
        if (vid) vid.muted = true;
    }

    function unlockApp() {
        isAppLocked = false;
        authOverlay.style.display = 'none'; 
        setTimeout(() => document.querySelector('.channel-card')?.focus(), 600);
        const vid = document.querySelector('video');
        if (vid) vid.muted = false;
    }

    function verifyPin() {
        const enteredPin = authInput.value.replace(/\s+/g, '').trim();
        if (enteredPin === currentLivePassword) {
            localStorage.setItem('b2_stealth_auth_pin', enteredPin);
            authErrorMsg.innerText = "ACCESS GRANTED.";
            authErrorMsg.style.color = "#00ff00"; 
            setTimeout(() => unlockApp(), 500);
        } else {
            showAuthError("ACCESS DENIED. INVALID PIN.");
            authInput.value = "";
        }
    }

    function showAuthError(msg) {
        authErrorMsg.innerText = msg;
        authErrorMsg.style.color = "red"; 
        authBox.classList.remove('shake-anim');
        void authBox.offsetWidth; 
        authBox.classList.add('shake-anim');
    }

    authSubmitBtn.addEventListener('click', verifyPin);

    authInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            verifyPin();
        }
    });

    checkAuthentication();
});
