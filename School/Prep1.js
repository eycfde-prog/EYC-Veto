// ═══════════════════════════════════════════════════════════════════
//  Prep1.js  —  Auth / Session / Score Manager (Razor Integrated)
// ═══════════════════════════════════════════════════════════════════

const GAS_URL = "https://script.google.com/macros/s/AKfycbyh8FSP06-D1v5OOf2lOuysow3Qcih7UMbkgk0wrSn35m1Oio7ju-sWa9pMVA92_LlF/exec";

const P1 = {
  student:      null,
  sessionTimer:  null,
  scoreQueue:    0,
  syncTimer:     null,
  modalOpen:     false
};

const LS = {
  KEY: "prep1_student",
  save(data)   { localStorage.setItem(this.KEY, JSON.stringify(data)); },
  load()       { try { return JSON.parse(localStorage.getItem(this.KEY)); } catch { return null; } },
  clear()      { localStorage.removeItem(this.KEY); }
};

// ── BOOTSTRAP & GUARD ──
const blockStyle = document.createElement("style");
blockStyle.textContent = `
  body.not-logged #welcomeScreen, 
  body.not-logged #gameScreen, 
  body.not-logged #poetryScreen { 
    display: none !important; 
  }
  body.not-logged {
    background: #0d1117;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
document.head.appendChild(blockStyle);

// ── تعديل الـ Bootstrap لضمان عدم ظهور رسائل قديمة ──
document.addEventListener("DOMContentLoaded", () => {
  injectAuthUI();
  
  const savedSession = LS.load();
  const now = Date.now();

  // إذا كانت الجلسة منتهية أو غير موجودة، امسح كل شيء وافرض تسجيل الدخول
  if (!savedSession || now >= savedSession.sessionExpiry) {
    LS.clear();
    P1.student = null;
    document.body.classList.add("not-logged");
    // نضمن أن واجهة "انتهى الوقت" مخفية تماماً الآن
    document.getElementById("p1-expired-overlay").classList.remove("show");
    openLoginModal();
    
    // منع الإغلاق
    document.getElementById("p1-modal-overlay").onclick = null;
    const closeBtn = document.querySelector(".p1-m-close");
    if(closeBtn) closeBtn.style.display = "none";
  } else {
    // الجلسة لا تزال صالحة
    tryRestoreSession();
  }
});

// ── INJECT AUTH UI ──
function injectAuthUI() {
  const style = document.createElement("style");
  style.textContent = `
    .p1-login-fab {
      position: fixed; top: 14px; z-index: 1000;
      padding: 8px 18px; border-radius: 20px;
      background: linear-gradient(135deg,#3fb950,#26a641);
      color: #fff; font-family: 'Outfit', sans-serif;
      font-size: 13px; font-weight: 700;
      border: none; cursor: pointer;
      box-shadow: 0 4px 14px rgba(46,160,67,.45);
      transition: transform .2s, box-shadow .2s;
      display: flex; align-items: center; gap: 6px;
    }
    .p1-login-fab:hover { transform: translateY(-2px); box-shadow: 0 7px 20px rgba(46,160,67,.6); }
    .p1-login-fab.left  { left:  14px; }
    .p1-login-fab.right { right: 14px; }
    .p1-login-fab.logged { background: linear-gradient(135deg,#58a6ff,#bc8cff); }

    #p1-session-bar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 999;
      background: #161b22; border-bottom: 1px solid #21262d;
      padding: 6px 16px;
      display: none; align-items: center; gap: 10px;
      font-family: 'Outfit', sans-serif;
    }
    #p1-session-bar.show { display: flex; }
    #p1-sb-name  { font-size: 13px; font-weight: 700; color: #e6edf3; flex: 1; }
    #p1-sb-score { font-size: 15px; font-weight: 900; color: #3fb950; font-family: 'Rajdhani', sans-serif; }
    #p1-sb-timer {
      font-size: 13px; font-weight: 700; color: #e3b341;
      font-family: 'Rajdhani', sans-serif;
      min-width: 55px; text-align: right;
    }
    #p1-sb-timer.warning { color: #f85149; animation: p1blink .8s infinite; }
    @keyframes p1blink { 50% { opacity: .4; } }
    #p1-sb-logout {
      padding: 4px 10px; border-radius: 8px;
      background: transparent; border: 1px solid #484f58;
      color: #7d8590; font-size: 11px; cursor: pointer;
      transition: all .2s;
    }
    #p1-sb-logout:hover { border-color: #f85149; color: #f85149; }

    #p1-modal-overlay {
      position: fixed; inset: 0; z-index: 1100;
      background: rgba(0,0,0,.75);
      display: none; align-items: center; justify-content: center;
      padding: 20px;
      backdrop-filter: blur(6px);
    }
    #p1-modal-overlay.show { display: flex; }

    #p1-modal {
      background: #1c2333; border: 1px solid #21262d;
      border-radius: 20px; padding: 32px 28px;
      width: 100%; max-width: 400px;
      box-shadow: 0 24px 60px rgba(0,0,0,.7);
      position: relative; animation: p1slideUp .3s ease;
    }
    @keyframes p1slideUp {
      from { opacity: 0; transform: translateY(30px) scale(.97); }
      to   { opacity: 1; transform: translateY(0)    scale(1);   }
    }
    #p1-modal .p1-m-badge {
      display: inline-block; background: linear-gradient(135deg,#3fb950,#26a641);
      color: #fff; font-size: 10px; font-weight: 900;
      padding: 3px 12px; border-radius: 20px; letter-spacing: 2px;
      font-family: 'Rajdhani', sans-serif; margin-bottom: 14px;
    }
    #p1-modal h2 { font-size: 22px; font-weight: 900; color: #e6edf3; margin-bottom: 6px; }
    #p1-modal .p1-m-sub { font-size: 13px; color: #7d8590; margin-bottom: 22px; line-height: 1.5; }
    #p1-modal .p1-m-label {
      font-size: 11px; font-weight: 700; color: #7d8590;
      letter-spacing: 1.5px; text-transform: uppercase;
      font-family: 'Rajdhani', sans-serif; margin-bottom: 8px;
    }
    #p1-code-input {
      width: 100%; padding: 13px 16px;
      background: #161b22; border: 1.5px solid #21262d;
      border-radius: 10px; color: #e6edf3;
      font-family: 'Outfit', sans-serif; font-size: 18px;
      font-weight: 700; letter-spacing: 3px;
      text-align: center; outline: none;
      transition: border-color .2s;
      margin-bottom: 8px;
    }
    #p1-code-input:focus { border-color: #3fb950; }
    #p1-code-input.error { border-color: #f85149; animation: p1shake .3s; }
    @keyframes p1shake {
      0%,100% { transform: translateX(0); }
      25%      { transform: translateX(-8px); }
      75%      { transform: translateX(8px); }
    }
    #p1-error-msg {
      font-size: 13px; color: #f85149; font-weight: 600;
      min-height: 20px; text-align: center; margin-bottom: 14px;
      transition: opacity .2s;
    }
    #p1-login-btn {
      width: 100%; padding: 13px;
      background: linear-gradient(135deg,#3fb950,#26a641);
      border: none; border-radius: 10px; color: #fff;
      font-family: 'Rajdhani', sans-serif; font-size: 17px;
      font-weight: 700; letter-spacing: 1px;
      cursor: pointer; transition: all .2s;
      box-shadow: 0 5px 16px rgba(46,160,67,.4);
      display: flex; align-items: center; justify-content: center; gap: 8px;
    }
    #p1-login-btn:hover { transform: translateY(-2px); }
    #p1-login-btn:disabled { opacity: .6; cursor: not-allowed; transform: none; }
    #p1-modal .p1-m-close {
      position: absolute; top: 14px; right: 16px;
      background: transparent; border: none;
      color: #484f58; font-size: 20px; cursor: pointer;
      line-height: 1; transition: color .2s;
    }
    #p1-modal .p1-m-close:hover { color: #f85149; }

    #p1-wait-panel { display: none; text-align: center; }
    #p1-wait-panel .p1-w-icon  { font-size: 48px; margin-bottom: 12px; }
    #p1-wait-panel .p1-w-title { font-size: 18px; font-weight: 900; color: #e6edf3; margin-bottom: 8px; }
    #p1-wait-panel .p1-w-msg   { font-size: 13px; color: #7d8590; line-height: 1.6; margin-bottom: 16px; }
    #p1-wait-panel .p1-w-time  { font-family: 'Rajdhani',sans-serif; font-size: 28px; font-weight: 900; color: #e3b341; }

    #p1-success-panel { display: none; text-align: center; }
    #p1-success-panel .p1-s-icon  { font-size: 52px; margin-bottom: 10px; }
    #p1-success-panel .p1-s-name  { font-size: 22px; font-weight: 900; color: #3fb950; margin-bottom: 4px; }
    #p1-success-panel .p1-s-score { font-size: 14px; color: #7d8590; margin-bottom: 18px; }
    #p1-success-panel .p1-s-btn   {
      padding: 11px 28px; background: linear-gradient(135deg,#58a6ff,#bc8cff);
      border: none; border-radius: 10px; color: #fff;
      font-family: 'Rajdhani',sans-serif; font-size: 16px; font-weight: 700;
      cursor: pointer; letter-spacing: 1px;
    }

    #p1-expired-overlay {
      position: fixed; inset: 0; z-index: 1200;
      background: rgba(0,0,0,.9);
      display: none; align-items: center; justify-content: center;
      flex-direction: column; text-align: center; padding: 30px;
      backdrop-filter: blur(8px);
    }
    #p1-expired-overlay.show { display: flex; }
    #p1-expired-overlay .p1-exp-icon  { font-size: 56px; margin-bottom: 16px; }
    #p1-expired-overlay .p1-exp-title { font-size: 24px; font-weight: 900; color: #e6edf3; margin-bottom: 8px; }
    #p1-expired-overlay .p1-exp-sub   { font-size: 14px; color: #7d8590; line-height: 1.6; max-width: 380px; margin-bottom: 20px; }
    #p1-expired-overlay .p1-exp-time  { font-family: 'Rajdhani',sans-serif; font-size: 32px; font-weight: 900; color: #e3b341; margin-bottom: 20px; }
    #p1-exp-ok-btn {
      padding: 11px 28px; background: var(--surface,#161b22);
      border: 1px solid #484f58; border-radius: 10px; color: #7d8590;
      font-family: 'Rajdhani',sans-serif; font-size: 15px; cursor: pointer;
    }
    body.p1-session-active { padding-top: 38px !important; }
  `;
  document.head.appendChild(style);

  ["left","right"].forEach(side => {
    const btn = document.createElement("button");
    btn.className = `p1-login-fab ${side}`;
    btn.id = `p1-fab-${side}`;
    btn.innerHTML = `🔐 Student Login`;
    btn.onclick = () => openLoginModal();
    document.body.appendChild(btn);
  });

  document.body.insertAdjacentHTML("afterbegin", `
    <div id="p1-session-bar">
      <span id="p1-sb-name">👤 —</span>
      <span id="p1-sb-score">0 pts</span>
      <span id="p1-sb-timer">30:00</span>
      <button id="p1-sb-logout" onclick="P1_logout()">Sign out</button>
    </div>
  `);

  document.body.insertAdjacentHTML("beforeend", `
    <div id="p1-modal-overlay">
      <div id="p1-modal">
        <button class="p1-m-close" onclick="closeLoginModal()" title="Close">✕</button>
        <div id="p1-login-panel">
          <div class="p1-m-badge">NEW VISION SCHOOL</div>
          <h2>Student Login</h2>
          <p class="p1-m-sub">Enter your student code to start your 30-minute session.</p>
          <div class="p1-m-label">Your Student Code</div>
          <input type="text" id="p1-code-input" placeholder="e.g. NV2024-01"
            maxlength="20" autocomplete="off" spellcheck="false"
            onkeydown="if(event.key==='Enter')P1_login()">
          <div id="p1-error-msg"></div>
          <button id="p1-login-btn" onclick="P1_login()">
            <span id="p1-btn-text">🚀 Enter</span>
          </button>
        </div>
        <div id="p1-wait-panel">
          <div class="p1-w-icon">⏳</div>
          <div class="p1-w-title">Come back tomorrow!</div>
          <div class="p1-w-msg">You've used your 30-minute session for today.<br>Your next session will be available in:</div>
          <div class="p1-w-time" id="p1-wait-countdown">—</div>
        </div>
        <div id="p1-success-panel">
          <div class="p1-s-icon">🎉</div>
          <div class="p1-s-name" id="p1-s-name-text">Welcome!</div>
          <div class="p1-s-score" id="p1-s-score-text">Total score: 0 pts</div>
          <button class="p1-s-btn" onclick="closeLoginModal()">Start Learning →</button>
        </div>
      </div>
    </div>
  `);

  document.body.insertAdjacentHTML("beforeend", `
    <div id="p1-expired-overlay">
      <div class="p1-exp-icon">⌛</div>
      <div class="p1-exp-title">Session Ended</div>
      <div class="p1-exp-sub">Your 30-minute study session is over for today. Come back in 24 hours for your next session!</div>
      <div class="p1-exp-time" id="p1-exp-countdown">—</div>
      <button id="p1-exp-ok-btn" onclick="document.getElementById('p1-expired-overlay').classList.remove('show')">OK</button>
    </div>
  `);

  interceptActivityButtons();
}

function interceptActivityButtons() {
  document.addEventListener("DOMContentLoaded", () => {
    if (typeof window.startGame === "function") {
      const _orig = window.startGame.bind(window);
      window.startGame = function () {
        if (!P1.student) { openLoginModal(); return; }
        if (isSessionExpired()) { showExpiredOverlay(); return; }
        _orig();
      };
    }
    if (typeof window.startPoetry === "function") {
      const _orig = window.startPoetry.bind(window);
      window.startPoetry = function () {
        if (!P1.student) { openLoginModal(); return; }
        if (isSessionExpired()) { showExpiredOverlay(); return; }
        _orig();
      };
    }
    if (typeof window.show === "function") {
      const _orig = window.show.bind(window);
      window.show = function (id) {
        if ((id === "gameScreen" || id === "poetryScreen") && !P1.student) {
          openLoginModal(); return;
        }
        _orig(id);
      };
    }
  });
}

// ── تعديل دالة الدخول لضمان تنظيف الواجهة ──
// ── تعديل الـ Bootstrap لضمان عدم ظهور رسائل قديمة ──
document.addEventListener("DOMContentLoaded", () => {
  injectAuthUI();
  
  const savedSession = LS.load();
  const now = Date.now();

  // إذا كانت الجلسة منتهية أو غير موجودة، امسح كل شيء وافرض تسجيل الدخول
  if (!savedSession || now >= savedSession.sessionExpiry) {
    LS.clear();
    P1.student = null;
    document.body.classList.add("not-logged");
    // نضمن أن واجهة "انتهى الوقت" مخفية تماماً الآن
    document.getElementById("p1-expired-overlay").classList.remove("show");
    openLoginModal();
    
    // منع الإغلاق
    document.getElementById("p1-modal-overlay").onclick = null;
    const closeBtn = document.querySelector(".p1-m-close");
    if(closeBtn) closeBtn.style.display = "none";
  } else {
    // الجلسة لا تزال صالحة
    tryRestoreSession();
  }
});

// ── تعديل دالة الدخول لضمان تنظيف الواجهة ──
async function P1_login() {
  const code = document.getElementById("p1-code-input").value.trim();
  if (!code) { showError("Please enter your student code."); return; }
  setLoginLoading(true);
  clearError();

  try {
    const res = await gasPost({ action: "login", code });
    
    if (!res.ok) {
      if (res.msg === "WAIT_24H") {
        showWaitPanel(res.waitHrs, res.waitMins);
      } else {
        showError(res.msg);
      }
    } else {
      // ✅ نجاح الدخول: نظف أي رسائل قديمة فوراً
      document.getElementById("p1-expired-overlay").classList.remove("show");
      
      P1.student = {
        code: code,
        name: res.name,
        score: res.score,
        sessionExpiry: res.sessionExpiry
      };
      
      LS.save(P1.student);
      document.body.classList.remove("not-logged");
      updateSessionBar();
      startSessionCountdown();
      updateFABs();
      showSuccessPanel(res.name, res.score);
    }
  } catch (err) {
    showError("Connection error. Please try again.");
  }
  setLoginLoading(false);
}
function tryRestoreSession() {
  const saved = LS.load();
  if (!saved) return;
  const now = Date.now();
  if (saved.sessionExpiry && now < saved.sessionExpiry) {
    P1.student = saved;
    updateSessionBar();
    startSessionCountdown();
    updateFABs();
  } else {
    LS.clear();
  }
}

function openLoginModal() {
  if (P1.student && !isSessionExpired()) {
    showSuccessPanel(P1.student.name, P1.student.score);
    document.getElementById("p1-modal-overlay").classList.add("show");
    P1.modalOpen = true;
    return;
  }
  showLoginPanel();
  document.getElementById("p1-modal-overlay").classList.add("show");
  document.getElementById("p1-code-input").focus();
  P1.modalOpen = true;
}

function closeLoginModal() {
  document.getElementById("p1-modal-overlay").classList.remove("show");
  P1.modalOpen = false;
  clearError();
}

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("p1-modal-overlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target.id === "p1-modal-overlay") {
        if(!document.body.classList.contains("not-logged")) closeLoginModal();
      }
    });
  }
});

function showLoginPanel() {
  document.getElementById("p1-login-panel").style.display  = "block";
  document.getElementById("p1-wait-panel").style.display   = "none";
  document.getElementById("p1-success-panel").style.display = "none";
}

function showWaitPanel(hrs, mins) {
  document.getElementById("p1-login-panel").style.display   = "none";
  document.getElementById("p1-wait-panel").style.display    = "block";
  document.getElementById("p1-success-panel").style.display = "none";
  document.getElementById("p1-wait-countdown").textContent  =
    `${String(hrs).padStart(2,"0")}h ${String(mins).padStart(2,"0")}m`;
}

function showSuccessPanel(name, score) {
  document.getElementById("p1-login-panel").style.display   = "none";
  document.getElementById("p1-wait-panel").style.display    = "none";
  document.getElementById("p1-success-panel").style.display = "block";
  document.getElementById("p1-s-name-text").textContent     = `Welcome back, ${name}! 👋`;
  document.getElementById("p1-s-score-text").textContent    = `Total score: ${score} pts`;
}

function P1_logout() {
  if (!confirm("Sign out? Your progress is saved.")) return;
  if (P1.scoreQueue > 0) syncScore(true);
  clearInterval(P1.sessionTimer);
  P1.student = null;
  P1.scoreQueue = 0;
  LS.clear();
  updateSessionBar();
  updateFABs();
  document.body.classList.remove("p1-session-active");
  if (typeof window.show === "function") {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById("welcomeScreen").classList.add("active");
  }
}

window.P1_addScore = function(points = 1) {
  if (!P1.student) return;
  if (isSessionExpired()) { showExpiredOverlay(); return; }
  P1.student.score  += points;
  P1.scoreQueue      += points;
  LS.save(P1.student);
  document.getElementById("p1-sb-score").textContent = `${P1.student.score} pts`;
  clearTimeout(P1.syncTimer);
  P1.syncTimer = setTimeout(() => syncScore(false), 3000);
};

async function syncScore(immediate = false) {
  if (!P1.student || P1.scoreQueue === 0) return;
  const pts  = P1.scoreQueue;
  P1.scoreQueue = 0;
  try {
    await gasPost({ action: "addScore", code: P1.student.code, points: pts });
  } catch {
    P1.scoreQueue += pts;
  }
}

// أضف هذا التعديل داخل دالة startSessionCountdown في ملف Prep1.js
function startSessionCountdown() {
  clearInterval(P1.sessionTimer);
  document.getElementById("p1-session-bar").classList.add("show");
  document.body.classList.add("p1-session-active");

  P1.sessionTimer = setInterval(() => {
    const now = Date.now();
    const remaining = Math.max(0, P1.student.sessionExpiry - now);
    
    // ... (كود عرض التايمر) ...

    if (remaining <= 0) {
      clearInterval(P1.sessionTimer);
      
      // تنفيذ المزامنة الأخيرة للدرجات
      if (P1.scoreQueue > 0) syncScore(true);
      
      // قفل فوري
      LS.clear(); // مسح البيانات من جهاز الطالب لمنع الدخول بالـ Refresh
      showExpiredOverlay();
      
      // إخفاء أي شاشات تدريب مفتوحة حالياً
      if (typeof window.show === "function") {
          document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
          document.getElementById("welcomeScreen").classList.add("active");
      }
      
      P1.student = null;
      updateFABs();
      updateSessionBar();
      document.body.classList.add("not-logged"); // تفعيل القفل البصري
    }
  }, 1000);
}

function showExpiredOverlay() {
  const overlay = document.getElementById("p1-expired-overlay");
  if (overlay) {
    overlay.classList.add("show");
    startExpiredCountdown();
  }
}

function startExpiredCountdown() {
  const nextTime = Date.now() + (24 * 60 * 60 * 1000);
  const interval = setInterval(() => {
    const diff  = Math.max(0, nextTime - Date.now());
    const hrs   = Math.floor(diff / 3600000);
    const mins  = Math.floor((diff % 3600000) / 60000);
    const secs  = Math.floor((diff % 60000) / 1000);
    const el = document.getElementById("p1-exp-countdown");
    if(el) el.textContent = `${String(hrs).padStart(2,"0")}:${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;
    if (diff === 0) clearInterval(interval);
  }, 1000);
}

function updateSessionBar() {
  const bar = document.getElementById("p1-session-bar");
  if (!P1.student) {
    bar.classList.remove("show");
    document.body.classList.remove("p1-session-active");
    return;
  }
  document.getElementById("p1-sb-name").textContent  = `👤 ${P1.student.name}`;
  document.getElementById("p1-sb-score").textContent = `${P1.student.score} pts`;
}

function updateFABs() {
  const loggedIn = !!P1.student;
  document.querySelectorAll(".p1-login-fab").forEach(btn => {
    btn.className = `p1-login-fab ${btn.classList.contains("left") ? "left" : "right"}${loggedIn ? " logged" : ""}`;
    btn.innerHTML = loggedIn ? `✅ ${P1.student.name}` : `🔐 Student Login`;
  });
}

function showError(msg) {
  const el = document.getElementById("p1-error-msg");
  if(el) el.textContent = msg;
  const inp = document.getElementById("p1-code-input");
  if(inp) {
    inp.classList.add("error");
    setTimeout(() => inp.classList.remove("error"), 600);
  }
}

function clearError() {
  const el = document.getElementById("p1-error-msg");
  if(el) el.textContent = "";
}

function setLoginLoading(loading) {
  const btn  = document.getElementById("p1-login-btn");
  const text = document.getElementById("p1-btn-text");
  if(btn) btn.disabled  = loading;
  if(text) text.textContent = loading ? "⏳ Checking…" : "🚀 Enter";
}

function isSessionExpired() {
  if (!P1.student) return true;
  return Date.now() > P1.student.sessionExpiry;
}

async function gasPost(payload) {
  const res = await fetch(GAS_URL, {
    method: "POST",
    mode: "cors", 
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.json();
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    if (typeof window.pick === "function") {
      const _origPick = window.pick.bind(window);
      window.pick = function(i) {
        _origPick(i);
        const q = typeof curQs !== "undefined" && curQs[typeof qIdx !== "undefined" ? qIdx : 0];
        if (q && i === q.a) P1_addScore(1);
      };
    }
    if (typeof window.pickPQ === "function") {
      const _origPickPQ = window.pickPQ.bind(window);
      window.pickPQ = function(i) {
        _origPickPQ(i);
        const q = typeof poems !== "undefined" && poems[currentPoem] && poems[currentPoem].quizQuestions[pqIndex];
        if (q && i === q.a) P1_addScore(1);
      };
    }
  }, 500);
});
