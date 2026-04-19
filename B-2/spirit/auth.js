document.getElementById('auth-root').innerHTML = `
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
                <a href="https://www.fb.com/saman2200" target="_blank" tabindex="0">
                    <i class="fab fa-facebook-messenger"></i> REQUEST ACCESS KEY
                </a>
            </div>
        </div>
    </div>
`;

// Security Logic
const GITHUB_AUTH_URL = "https://raw.githubusercontent.com/Saman-Pushpa-Kumara/AI/refs/heads/main/B-2/password.txt";

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
        const response = await fetch(GITHUB_AUTH_URL + '?t=' + new Date().getTime());
        const data = await response.json();

        if (data.status === "disabled" || data.password === savedPin) {
            currentLivePassword = data.password;
            unlockApp();
        } else {
            currentLivePassword = data.password;
            showAuthUI();
            if(savedPin) showAuthError("SECURITY KEY UPDATED. RE-ENTER PIN.");
        }
    } catch (error) {
        console.error("Authentication check failed:", error);
        showAuthUI();
        showAuthError("CONNECTION ERROR. SYSTEM LOCKED.");
    }
}

function showAuthUI() {
    authBox.classList.add('show');
    authInput.focus();
    const vid = document.getElementById('video');
    if (vid) vid.muted = true;
}

function unlockApp() {
    isAppLocked = false;
    authOverlay.classList.add('hidden');
    setTimeout(() => document.querySelector('.channel-card')?.focus(), 600);
    const vid = document.getElementById('video');
    if (vid) vid.muted = false;
}

function verifyPin() {
    const enteredPin = authInput.value.trim();
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
    authErrorMsg.style.color = "var(--b2-red)";
    authBox.classList.remove('shake-anim');
    void authBox.offsetWidth; 
    authBox.classList.add('shake-anim');
}

authSubmitBtn.addEventListener('click', verifyPin);
window.addEventListener('load', checkAuthentication);