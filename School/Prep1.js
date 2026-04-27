// ═══════════════════════════════════════════════════════════════════
//  Prep1.js  —  Student Auth + Score Manager
//  • One-time code per session (teacher writes codes in Sheet)
//  • Score saved at end of each quiz (not real-time)
//  • No session timer — student works at own pace
//  • GET-only API calls → no CORS preflight issues
//
//  SETUP:
//  1. Deploy Code.gs as Web App (Anyone, no auth required)
//  2. Paste the URL into GAS_URL below
//  3. Add <script src="Prep1.js"></script> before </body> in HTML
// ═══════════════════════════════════════════════════════════════════

const GAS_URL = "https://script.google.com/macros/s/AKfycbwSA3bQT-doVWiKKGh0HYyCsYa4IoVcFu5-RzzU1dWh3DWybbN5Vw02GoxmqOjHhcs/exec";
//  ☝️  Your Apps Script Web App URL (already set)

// ────────────────────────────────────────────────────────────────────
// STATE
// ────────────────────────────────────────────────────────────────────
const P1 = {
  student:       null,   // { name, code, totalScore }
  pendingAction: null    // fn to call after successful login
};

// LocalStorage — remember student for this browser tab
const LS_KEY = "prep1_auth_v3";
const ls = {
  save  : d  => { try { localStorage.setItem(LS_KEY, JSON.stringify(d)); } catch {} },
  load  : () => { try { return JSON.parse(localStorage.getItem(LS_KEY)); } catch { return null; } },
  clear : () => { try { localStorage.removeItem(LS_KEY); } catch {} }
};

// ────────────────────────────────────────────────────────────────────
// INIT
// ────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  buildCSS();
  buildHTML();
  attachEvents();
  restoreSession();
  hookQuizFunctions();
});

// ────────────────────────────────────────────────────────────────────
// CSS
// ────────────────────────────────────────────────────────────────────
function buildCSS() {
  const el = document.createElement("style");
  el.textContent = `
/* ── FABs (login buttons — left & right corners) ── */
.p1-fab {
  position: fixed; top: 12px; z-index: 1001;
  padding: 7px 16px; border-radius: 22px;
  background: linear-gradient(135deg,#3fb950,#26a641);
  color: #fff; font-family: 'Outfit',sans-serif;
  font-size: 13px; font-weight: 700; border: none; cursor: pointer;
  box-shadow: 0 3px 14px rgba(46,160,67,.45);
  transition: transform .2s, box-shadow .2s;
  display: flex; align-items: center; gap: 6px;
  white-space: nowrap; letter-spacing: .3px;
}
.p1-fab:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(46,160,67,.6); }
.p1-fab.left  { left:  12px; }
.p1-fab.right { right: 12px; }
.p1-fab.logged { background: linear-gradient(135deg,#58a6ff,#bc8cff); }

/* ── Top bar (shown when logged in) ── */
#p1-bar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 999;
  background: #0d1117; border-bottom: 1px solid #21262d;
  padding: 5px 14px; display: none;
  align-items: center; gap: 10px;
  font-family: 'Outfit',sans-serif;
}
#p1-bar.show { display: flex; }
body.p1-on  { padding-top: 34px; }
#p1-bname   { font-size: 13px; font-weight: 700; color: #e6edf3; flex: 1; }
#p1-bscore  { font-size: 15px; font-weight: 900; color: #3fb950;
               font-family: 'Rajdhani',sans-serif; }
#p1-blogout {
  padding: 3px 10px; border-radius: 8px; background: transparent;
  border: 1px solid #30363d; color: #7d8590;
  font-size: 11px; cursor: pointer; font-family: 'Outfit',sans-serif;
  transition: all .2s;
}
#p1-blogout:hover { border-color: #f85149; color: #f85149; }

/* ── Modal backdrop ── */
#p1-ov {
  position: fixed; inset: 0; z-index: 1100;
  background: rgba(0,0,0,.8); display: none;
  align-items: center; justify-content: center;
  padding: 20px; backdrop-filter: blur(6px);
}
#p1-ov.show { display: flex; }

/* ── Modal card ── */
#p1-card {
  background: #1c2333; border: 1px solid #21262d;
  border-radius: 20px; padding: 30px 26px;
  width: 100%; max-width: 390px;
  box-shadow: 0 24px 60px rgba(0,0,0,.75);
  position: relative; animation: p1up .28s ease;
}
@keyframes p1up {
  from { opacity:0; transform:translateY(26px) scale(.97); }
  to   { opacity:1; transform:translateY(0)    scale(1);   }
}
.p1-x {
  position: absolute; top: 12px; right: 14px;
  background: none; border: none; color: #484f58;
  font-size: 19px; cursor: pointer; line-height: 1;
  transition: color .2s;
}
.p1-x:hover { color: #f85149; }

/* Login panel */
#p1-login-panel { display: block; }
.p1-pill {
  display: inline-block;
  background: linear-gradient(135deg,#3fb950,#26a641);
  color: #fff; font-size: 10px; font-weight: 900;
  padding: 3px 12px; border-radius: 20px;
  letter-spacing: 2px; font-family: 'Rajdhani',sans-serif;
  margin-bottom: 14px;
}
#p1-card h2   { font-size: 21px; font-weight: 900; color: #e6edf3; margin-bottom: 5px; }
.p1-sub       { font-size: 13px; color: #7d8590; margin-bottom: 20px; line-height: 1.5; }
.p1-lbl       { font-size: 11px; font-weight: 700; color: #7d8590;
                 letter-spacing: 1.5px; text-transform: uppercase;
                 font-family: 'Rajdhani',sans-serif; margin-bottom: 8px; }
#p1-inp {
  width: 100%; padding: 13px 16px;
  background: #161b22; border: 1.5px solid #21262d;
  border-radius: 10px; color: #e6edf3;
  font-family: 'Outfit',sans-serif; font-size: 20px;
  font-weight: 700; letter-spacing: 4px;
  text-align: center; outline: none;
  transition: border-color .2s; margin-bottom: 7px;
}
#p1-inp:focus        { border-color: #3fb950; }
#p1-inp.p1-shake     { border-color: #f85149; animation: p1shk .32s; }
@keyframes p1shk { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-7px)} 75%{transform:translateX(7px)} }
#p1-err {
  font-size: 13px; color: #f85149; font-weight: 600;
  min-height: 20px; text-align: center; margin-bottom: 13px;
  line-height: 1.4;
}
#p1-go {
  width: 100%; padding: 13px;
  background: linear-gradient(135deg,#3fb950,#26a641);
  border: none; border-radius: 10px; color: #fff;
  font-family: 'Rajdhani',sans-serif; font-size: 17px;
  font-weight: 700; letter-spacing: 1px; cursor: pointer;
  box-shadow: 0 5px 16px rgba(46,160,67,.4);
  transition: all .2s;
  display: flex; align-items: center; justify-content: center; gap: 7px;
}
#p1-go:hover:not(:disabled) { transform: translateY(-2px); }
#p1-go:disabled { opacity: .55; cursor: not-allowed; transform: none; }

/* Welcome panel (after login) */
#p1-ok-panel {
  display: none; text-align: center;
}
.p1-ok-icon  { font-size: 50px; margin-bottom: 10px; }
.p1-ok-name  { font-size: 22px; font-weight: 900; color: #3fb950; margin-bottom: 4px; }
.p1-ok-info  { font-size: 13px; color: #7d8590; margin-bottom: 20px; }
.p1-ok-btn {
  padding: 11px 26px;
  background: linear-gradient(135deg,#58a6ff,#bc8cff);
  border: none; border-radius: 10px; color: #fff;
  font-family: 'Rajdhani',sans-serif; font-size: 16px;
  font-weight: 700; cursor: pointer; letter-spacing: 1px;
  transition: transform .2s;
}
.p1-ok-btn:hover { transform: translateY(-2px); }

/* ── Score toast ── */
#p1-toast {
  position: fixed; bottom: 22px; left: 50%;
  transform: translateX(-50%) translateY(70px);
  background: #1c2333; border: 1px solid #3fb950;
  border-radius: 12px; padding: 11px 22px;
  font-family: 'Outfit',sans-serif; font-size: 14px;
  font-weight: 700; color: #3fb950; z-index: 1200;
  box-shadow: 0 8px 24px rgba(0,0,0,.5);
  transition: transform .35s cubic-bezier(.34,1.56,.64,1);
  white-space: nowrap; pointer-events: none;
}
#p1-toast.show { transform: translateX(-50%) translateY(0); }
  `;
  document.head.appendChild(el);
}

// ────────────────────────────────────────────────────────────────────
// HTML
// ────────────────────────────────────────────────────────────────────
function buildHTML() {
  // Top bar
  document.body.insertAdjacentHTML("afterbegin", `
    <div id="p1-bar">
      <span id="p1-bname">👤 —</span>
      <span id="p1-bscore">0 pts</span>
      <button id="p1-blogout" onclick="P1_logout()">Sign out</button>
    </div>
  `);

  // Modal
  document.body.insertAdjacentHTML("beforeend", `
    <div id="p1-ov">
      <div id="p1-card">
        <button class="p1-x" onclick="P1_closeModal()" title="Close">✕</button>

        <!-- ── Login form ── -->
        <div id="p1-login-panel">
          <div class="p1-pill">NEW VISION SCHOOL</div>
          <h2>Student Login</h2>
          <p class="p1-sub">
            Enter the code your teacher gave you.<br>
            Each code can only be used <strong>once</strong>.
          </p>
          <div class="p1-lbl">Your Code</div>
          <input id="p1-inp" type="text" placeholder="e.g. NV-01"
            maxlength="20" autocomplete="off" spellcheck="false"
            onkeydown="if(event.key==='Enter') P1_login()">
          <div id="p1-err"></div>
          <button id="p1-go" onclick="P1_login()">
            <span id="p1-go-lbl">🚀 Enter</span>
          </button>
        </div>

        <!-- ── Welcome (after login) ── -->
        <div id="p1-ok-panel">
          <div class="p1-ok-icon">🎉</div>
          <div class="p1-ok-name"  id="p1-ok-name">Welcome!</div>
          <div class="p1-ok-info"  id="p1-ok-info">Total score: 0 pts</div>
          <button class="p1-ok-btn" onclick="P1._startPending()">
            Start Learning →
          </button>
        </div>
      </div>
    </div>

    <!-- Toast notification -->
    <div id="p1-toast"></div>
  `);

  // FABs (left and right)
  ["left","right"].forEach(side => {
    const b = document.createElement("button");
    b.className = `p1-fab ${side}`;
    b.id = `p1-fab-${side}`;
    b.innerHTML = "🔐 Student Login";
    b.onclick = () => P1_openModal();
    document.body.appendChild(b);
  });
}

// ────────────────────────────────────────────────────────────────────
// EVENTS
// ────────────────────────────────────────────────────────────────────
function attachEvents() {
  document.getElementById("p1-ov").addEventListener("click", e => {
    if (e.target.id === "p1-ov") P1_closeModal();
  });
}

// ────────────────────────────────────────────────────────────────────
// RESTORE SESSION (same browser tab)
// ────────────────────────────────────────────────────────────────────
function restoreSession() {
  const saved = ls.load();
  if (saved?.name && saved?.code) {
    P1.student = saved;
    refreshBar();
    refreshFABs();
  }
}

// ────────────────────────────────────────────────────────────────────
// MODAL OPEN / CLOSE
// ────────────────────────────────────────────────────────────────────
function P1_openModal(pendingFn) {
  if (pendingFn) P1.pendingAction = pendingFn;

  if (P1.student) {
    // Already logged in → show welcome
    showOKPanel();
  } else {
    showLoginPanel();
    setTimeout(() => document.getElementById("p1-inp").focus(), 80);
  }
  document.getElementById("p1-ov").classList.add("show");
}

function P1_closeModal() {
  document.getElementById("p1-ov").classList.remove("show");
}

function showLoginPanel() {
  document.getElementById("p1-login-panel").style.display = "block";
  document.getElementById("p1-ok-panel").style.display    = "none";
  setErr("");
}

function showOKPanel() {
  document.getElementById("p1-login-panel").style.display = "none";
  document.getElementById("p1-ok-panel").style.display    = "block";
  document.getElementById("p1-ok-name").textContent  = `Welcome, ${P1.student.name}! 👋`;
  document.getElementById("p1-ok-info").textContent  = `Total score: ${P1.student.totalScore} pts`;
}

// ────────────────────────────────────────────────────────────────────
// LOGIN
// ────────────────────────────────────────────────────────────────────
async function P1_login() {
  const code = document.getElementById("p1-inp").value.trim();
  if (!code) { setErr("Please enter your code."); return; }

  setBusy(true);

  try {
    const res = await gasGet({ action: "login", code });

    if (!res.ok) {
      switch (res.msg) {
        case "CHECK_TEACHER":
          setErr("❌ Code not found. Please check with your teacher.");
          break;
        case "CODE_USED":
          setErr("⚠️ This code has already been used.\nAsk your teacher for a new code.");
          break;
        default:
          setErr(res.msg || "Login failed. Please try again.");
      }
      shake();
      setBusy(false);
      return;
    }

    // ── Success ──
    P1.student = { code, name: res.name, totalScore: res.totalScore };
    ls.save(P1.student);
    refreshBar();
    refreshFABs();
    showOKPanel();

  } catch {
    setErr("⚠️ Connection error. Check your internet and try again.");
  }

  setBusy(false);
}

// ────────────────────────────────────────────────────────────────────
// LOGOUT
// ────────────────────────────────────────────────────────────────────
function P1_logout() {
  if (!confirm("Sign out?")) return;
  P1.student = null;
  ls.clear();
  refreshBar();
  refreshFABs();
  // Back to welcome screen
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const ws = document.getElementById("welcomeScreen");
  if (ws) ws.classList.add("active");
}

// ────────────────────────────────────────────────────────────────────
// SAVE SCORE  (called at end of quiz)
// ────────────────────────────────────────────────────────────────────
async function P1_saveScore(score, qtype) {
  if (!P1.student || score <= 0) return;

  try {
    const res = await gasGet({
      action: "saveScore",
      code:   P1.student.code,
      score,
      qtype,
      ts: new Date().toISOString()
    });

    if (res.ok) {
      P1.student.totalScore = res.newTotal;
      ls.save(P1.student);
      refreshBar();
      toast(`✅ +${score} pts saved!  Total: ${res.newTotal} pts`);
    }
  } catch {
    // silent — score is in Sheet even if response fails
  }
}

// ────────────────────────────────────────────────────────────────────
// HOOK QUIZ FUNCTIONS  (runs after inline <script> is parsed)
// ────────────────────────────────────────────────────────────────────
function hookQuizFunctions() {
  setTimeout(() => {

    // ── Guard startGame ──
    if (typeof window.startGame === "function") {
      const _orig = window.startGame;
      window.startGame = function () {
        if (!P1.student) {
          P1_openModal(() => _orig.apply(window, arguments));
          return;
        }
        _orig.apply(window, arguments);
      };
    }

    // ── Guard startPoetry ──
    if (typeof window.startPoetry === "function") {
      const _orig = window.startPoetry;
      window.startPoetry = function () {
        if (!P1.student) {
          P1_openModal(() => _orig.apply(window, arguments));
          return;
        }
        _orig.apply(window, arguments);
      };
    }

    // ── Hook showResults → save quiz score ──
    if (typeof window.showResults === "function") {
      const _orig = window.showResults;
      window.showResults = function () {
        _orig.apply(window, arguments);
        try {
          // `players` and `qt` are globals from prep1_quiz.html
          if (Array.isArray(players) && players.length > 0) {
            // In single-player mode save that player's score.
            // In multi-player mode save the top scorer (or all — your choice).
            // Here we save ALL players who scored > 0.
            players.forEach(p => {
              if (p.score > 0) {
                P1_saveScore(p.score, typeof qt !== "undefined" ? qt : "quiz");
              }
            });
          }
        } catch {}
      };
    }

    // ── Hook poetry quiz completion → save score ──
    if (typeof window.renderPQ === "function") {
      const _orig = window.renderPQ;
      window.renderPQ = function () {
        // Check BEFORE calling original (pqDone might be set)
        const wasDone = (typeof pqDone !== "undefined") && pqDone;
        _orig.apply(window, arguments);
        // Now check if it JUST became done
        try {
          if (!wasDone &&
              typeof pqDone !== "undefined" && pqDone &&
              typeof pqScore !== "undefined" && pqScore > 0) {
            P1_saveScore(pqScore, "poetry");
          }
        } catch {}
      };
    }

  }, 400);
}

// Expose for inline onclick in welcome panel button
P1._startPending = function () {
  P1_closeModal();
  if (P1.pendingAction) {
    const fn = P1.pendingAction;
    P1.pendingAction = null;
    setTimeout(fn, 80);
  }
};

// ────────────────────────────────────────────────────────────────────
// UI HELPERS
// ────────────────────────────────────────────────────────────────────
function refreshBar() {
  const bar = document.getElementById("p1-bar");
  if (!P1.student) {
    bar.classList.remove("show");
    document.body.classList.remove("p1-on");
    return;
  }
  bar.classList.add("show");
  document.body.classList.add("p1-on");
  document.getElementById("p1-bname").textContent  = `👤 ${P1.student.name}`;
  document.getElementById("p1-bscore").textContent = `${P1.student.totalScore} pts`;
}

function refreshFABs() {
  const on = !!P1.student;
  document.querySelectorAll(".p1-fab").forEach(b => {
    b.classList.toggle("logged", on);
    b.innerHTML = on ? `✅ ${P1.student.name}` : "🔐 Student Login";
  });
}

function setErr(msg)    { document.getElementById("p1-err").textContent = msg; }
function shake()        {
  const el = document.getElementById("p1-inp");
  el.classList.add("p1-shake");
  setTimeout(() => el.classList.remove("p1-shake"), 400);
}
function setBusy(on) {
  document.getElementById("p1-go").disabled        = on;
  document.getElementById("p1-go-lbl").textContent = on ? "⏳ Checking…" : "🚀 Enter";
}

let _tt;
function toast(msg) {
  const el = document.getElementById("p1-toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(_tt);
  _tt = setTimeout(() => el.classList.remove("show"), 3800);
}

// ────────────────────────────────────────────────────────────────────
// API  — GET only, follows redirects, works with GitHub Pages
// ────────────────────────────────────────────────────────────────────
async function gasGet(params) {
  const url = new URL(GAS_URL);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, String(v)));
  const res = await fetch(url.toString(), { method: "GET", redirect: "follow" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
