/**
 * VETO ONLINE — Student Portal JavaScript
 * EYC Academy | Mr. Ezz
 */

// ─── CONFIG ─────────────────────────────────────────────────
const CONFIG = {
  GAS_URL: "https://script.google.com/macros/s/AKfycbzRj1XtnuXrrDR79M3H5J9AYs4sdBWSBhAa3jSC9XwcNxB-pumSw0pxv8jvbybyZrpGGw/exec",
  DATA_PATH: "data/VetoOnline/",
  ACTIROBO_PATH: "data/Actirobo/",
  LOGO: "logo.png",
  ACADEMY: "EYC Academy",
  PROGRAM: "Veto Online",
  TEACHER: "Mr. Ezz",
  STORAGE_KEY: "vetoOnlineUser"
};

// ─── قيم TK الثابتة لكل نشاط ─────────────────────────────
const ACTIVITY_TK = {
  "listening":         100,
  "grammar":           100,
  "vocab":             1000,
  "vocabulary":        1000,
  "one shot":          100,
  "reading":           2000,
  "tongue twister":    1000,
  "t.t":               1000,
  "squeezer":          3000,
  "dmt":               4000,
  "wish":              2000,
  "project":           3000,
  "graduation project":10000,
  "graduation":        10000,
  "ica":               500,
  "attendence":        200,
  "games":             500,
  "bonus":             1000,
};

function getActivityTK(name) {
  const n = name.toLowerCase();
  for (const [key, val] of Object.entries(ACTIVITY_TK)) {
    if (n.includes(key)) return val;
  }
  return null;
}

// ─── PORTAL DATA ────────────────────────────────────────────
const PORTAL_DATA = {
  games: {
    title: "GAMES PORTAL",
    sub: "PLAY & EARN TOKENS",
    color: "rgba(124,58,237,0.9)",
    items: [
      { icon: "🎯", label: "Vocab Memo",  sub: "Memory challenge",  url: "gamep.html", cls: "games-ico" },
      { icon: "🔤", label: "Gram Rear",   sub: "Grammar racing",    url: "gamep.html", cls: "games-ico" },
      { icon: "💻", label: "Spellcode",   sub: "Spelling battle",   url: "gamep.html", cls: "games-ico" },
      { icon: "⌨️", label: "Typerace",    sub: "Speed typing",      url: "gamep.html", cls: "games-ico" },
    ]
  },
  study: {
    title: "STUDY PORTAL",
    sub: "LEARN & GROW",
    color: "rgba(0,212,255,0.9)",
    items: [
      { icon: "🤖", label: "Create your English Friend", sub: "AI conversation partner", url: "studyp.html", cls: "study-ico" },
      { icon: "📝", label: "Summarize your lesson",          sub: "AI-powered summary",    url: "studyp.html", cls: "study-ico" },
    ]
  },
  business: {
    title: "BUSINESS PORTAL",
    sub: "BUILD YOUR FUTURE",
    color: "rgba(245,200,66,0.9)",
    items: [
      { icon: "📄", label: "Make your HTML CV",    sub: "Build your resume",    url: "business.html", cls: "business-ico" },
      { icon: "🪪", label: "Create your digital ID", sub: "Your digital identity", url: "business.html", cls: "business-ico" },
    ]
  }
};

// ─── STATE ──────────────────────────────────────────────────
let currentUser   = null;
let pendingAction = null;

const PG = { charts: [], currentIndex: 0, activities: [], isLoaded: false };

const SCARDLINE_ACTIVITIES = [
  "Attendence","ICA","Listening","Grammar","Reading",
  "Tongue Twister","One Shot","Games","Squeezer",
  "DMT","Wish","Project","Graduation Project","Bonus"
];

const ACT_ARABIC = {
  "Attendence":"Attendance","ICA":"ICA","Listening":"Listening",
  "Grammar":"Grammar","Reading":"Reading","Tongue Twister":"Tongue Twister",
  "One Shot":"One Shot","Games":"Games","Squeezer":"Squeezer",
  "DMT":"DMT","Wish":"Wish","Project":"Project",
  "Graduation Project":"Graduation Project","Bonus":"Bonus"
};

// ─── DOM REFS ────────────────────────────────────────────────
const loginOverlay = document.getElementById("loginOverlay");
const loginMsg     = document.getElementById("loginMsg");
const toast        = document.getElementById("toast");

// ─── INIT ────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  loadLogo();
  tryAutoLogin();
  buildLevels();
  bindNav();
});

function loadLogo() {
  document.querySelectorAll(".logo-img").forEach(img => {
    img.src = CONFIG.LOGO;
    img.onerror = () => { img.style.display = "none"; };
  });
}

// ─── AUTO-LOGIN ───────────────────────────────────────────────
function tryAutoLogin() {
  const stored = localStorage.getItem(CONFIG.STORAGE_KEY);
  if (stored) {
    try {
      currentUser = JSON.parse(stored);
      renderProfile(currentUser);
      hideLogin();
      initProgressGallery();
    } catch(e) { localStorage.removeItem(CONFIG.STORAGE_KEY); }
  } else {
    renderProgressLocked();
  }
}

// ─── LOGIN ────────────────────────────────────────────────────
function showLogin(reason) { pendingAction = reason || null; loginOverlay.classList.remove("hidden"); }
function hideLogin()       { loginOverlay.classList.add("hidden"); }

document.getElementById("btnLogin").addEventListener("click", async () => {
  const email    = document.getElementById("loginEmail").value.trim().toLowerCase();
  const passcode = document.getElementById("loginCode").value.trim();
  if (!email || !passcode) return showMsg("Please fill in all fields.", "error");
  showMsg("Authenticating...", "");
  try {
    const res  = await fetch(`${CONFIG.GAS_URL}?action=login&email=${encodeURIComponent(email)}&code=${encodeURIComponent(passcode)}`);
    const data = await res.json();
    if (data.status === "success") {
      currentUser = data.profile;
      localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(currentUser));
      renderProfile(currentUser);
      hideLogin();
      showToast("Welcome back, " + currentUser.name + "! 🎯");
      initProgressGallery();
      if (pendingAction) executePendingAction();
    } else {
      showMsg(data.message || "Authentication failed.", "error");
    }
  } catch(e) { showMsg("Connection error. Check network.", "error"); }
});

document.getElementById("forgotLink").addEventListener("click", () => {
  showMsg("Contact Mr. Ezz or your academy admin to reset your passcode.", "success");
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  currentUser = null;
  localStorage.removeItem(CONFIG.STORAGE_KEY);
  clearProfile();
  showView("levels");
  showToast("Logged out successfully.");
  PG.isLoaded = false;
  renderProgressLocked();
});

loginOverlay.addEventListener("click", (e) => { if (e.target === loginOverlay) hideLogin(); });

function showMsg(msg, type) {
  loginMsg.textContent = msg;
  loginMsg.className   = "login-msg " + (type === "error" ? "error" : type === "success" ? "success" : "");
  loginMsg.style.display = msg ? "block" : "none";
}

// ─── PROFILE ─────────────────────────────────────────────────
function renderProfile(user) {
  if (!user) return;
  setEl("profileName",        user.name        || "—");
  setEl("profileProgram",     CONFIG.PROGRAM);
  setEl("profileTokens",      user.tokens      ?? "0");
  setEl("profileStars",       user.stars       ?? "0");
  setEl("profileRank",        user.globalRank  ?? "—");
  setEl("profileCodeOnline",  user.code        || "—");
  setEl("profileCodeOffline", user.offlineCode || "—");
  const avatar = document.getElementById("profileAvatar");
  if (avatar && user.avatar) { avatar.src = user.avatar; avatar.onerror = () => { avatar.src = "assets/default-avatar.png"; }; }
}
function clearProfile() {
  ["profileName","profileProgram","profileTokens","profileStars","profileRank","profileCodeOnline","profileCodeOffline"].forEach(id => setEl(id,"—"));
}
function setEl(id, val) { const el = document.getElementById(id); if (el) el.textContent = val; }

// ─── VIEW SWITCHER ───────────────────────────────────────────
function showView(view) {
  const lv = document.getElementById("levelsView");
  const sv = document.getElementById("sessionView");
  if (view === "levels") {
    lv.style.display = "flex"; sv.style.display = "none";
    document.querySelectorAll(".session-btn.active").forEach(b => b.classList.remove("active"));
  } else {
    lv.style.display = "none"; sv.style.display = "block";
  }
}

// ─── BUILD LEVELS ─────────────────────────────────────────────
const LEVEL_NAMES = [
  "","Foundation","Elementary","Pre-Intermediate","Intermediate 1",
  "Intermediate 2","Upper-Intermediate 1","Upper-Intermediate 2",
  "Advanced 1","Advanced 2","Advanced 3","Expert 1","Expert 2 — Graduation"
];

function buildLevels() {
  const container = document.getElementById("levelsContainer");
  if (!container) return;
  for (let lvl = 1; lvl <= 12; lvl++) {
    const group = document.createElement("div");
    group.className = "level-group"; group.id = `level-${lvl}`;
    const sessions = [1,2,3,4].map(s => `
      <div class="session-btn" id="sess-${lvl}-${s}" data-lvl="${lvl}" data-sess="${s}">
        <div class="session-num">${s}</div>
        <div class="session-label">Session</div>
      </div>`).join("");
    group.innerHTML = `
      <div class="level-header" onclick="toggleLevel(${lvl})">
        <div class="level-title">
          <div class="level-num">${lvl}</div>
          <div><div class="level-name">Level ${lvl}</div><div class="level-sub">${LEVEL_NAMES[lvl]}</div></div>
        </div>
        <div class="level-chevron">▾</div>
      </div>
      <div class="sessions-grid">${sessions}</div>`;
    container.appendChild(group);
  }
  container.addEventListener("click", e => {
    const btn = e.target.closest(".session-btn");
    if (!btn) return;
    handleSessionClick(parseInt(btn.dataset.lvl), parseInt(btn.dataset.sess), btn);
  });
}

function toggleLevel(lvl) {
  const g = document.getElementById(`level-${lvl}`);
  if (g) g.classList.toggle("open");
}

// ─── SESSION ──────────────────────────────────────────────────
function handleSessionClick(lvl, sess, btn) {
  if (!currentUser) { pendingAction = { type:"session", lvl, sess }; showLogin("session"); return; }
  openSession(lvl, sess, btn);
}

function executePendingAction() {
  if (!pendingAction) return;
  if (pendingAction.type === "session") {
    const btn = document.getElementById(`sess-${pendingAction.lvl}-${pendingAction.sess}`);
    openSession(pendingAction.lvl, pendingAction.sess, btn);
  } else if (pendingAction.type === "grammar") {
    openGrammarExam(pendingAction.lvl, pendingAction.sess);
  }
  pendingAction = null;
}

function openSession(lvl, sess, btn) {
  document.querySelectorAll(".session-btn.active").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  const key        = `${lvl}-${sess}`;
  const activities = (typeof sessionData !== "undefined" && sessionData[key]) || [];
  setEl("sessionTitle",    `LEVEL ${lvl}  ·  SESSION ${sess}`);
  setEl("sessionSubtitle", LEVEL_NAMES[lvl] || "");
  const list = document.getElementById("sessionActivityList");
  list.innerHTML = "";
  if (activities.length === 0) {
    list.innerHTML = `<div class="no-content">No content found for this session.</div>`;
  } else {
    activities.forEach(name => {
      const isTest   = name.toLowerCase().includes("test");
      const filename = getActivityFilename(lvl, sess, name);
      const { icon, iconClass } = getActivityIcon(name);
      const badge      = isTest?"test":name.toLowerCase().includes("intro")?"intro":name.toLowerCase().includes("review")?"review":"special";
      const badgeLabel = isTest?"TEST":name.toLowerCase().includes("intro")?"INTRO":name.toLowerCase().includes("review")?"REVIEW":"★";
      let imgName = "";
      const n = name.toLowerCase();
      if (n.includes("grammar"))           imgName = "Grammar";
      else if (n.includes("vocab"))        imgName = "Vocabulary";
      else if (n.includes("reading"))      imgName = "Reading";
      else if (n.includes("listening"))    imgName = "Listening";
      else if (n.includes("tongue twister")) imgName = "Tongue-twister";
      else if (n.includes("one shot"))     imgName = "One-shot";
      else if (n.includes("squeezer"))     imgName = "Squeezer";
      else if (n.includes("dmt"))          imgName = "DMT";
      else if (n.includes("wish"))         imgName = "Wish";
      else if (n.includes("graduation"))   imgName = "Graduation-project";
      else if (n.includes("project"))      imgName = "Project";
      else if (n.includes("interview"))    imgName = "Interview";
      else imgName = "default";
      const imgPath = `${CONFIG.ACTIROBO_PATH}${imgName}.png`;
      const tkVal   = getActivityTK(name);
      const tkHTML  = tkVal ? `<div class="activity-tk-badge">${tkVal.toLocaleString()} TK</div>` : "";

      const item = document.createElement("div");
      item.className = `activity-card ${isTest?"test-card":""}`;
      item.innerHTML = `
        <div class="activity-card-img">
          <img src="${imgPath}" alt="${name}"
               onerror="this.parentElement.innerHTML='<div class=\\'act-icon-fallback ${iconClass}\\'>${icon}</div>'" />
        </div>
        <div class="activity-card-body">
          <div class="activity-card-name">${name}</div>
        </div>
        ${tkHTML}
        <span class="activity-badge ${badge}">${badgeLabel}</span>`;
      item.addEventListener("click", () => loadActivityFile(lvl, sess, filename, name));
      list.appendChild(item);
    });
  }
  showView("session");
  const main = document.getElementById("mainContent");
  if (main) main.scrollTop = 0;
}

function getActivityIcon(name) {
  const n = name.toLowerCase();
  if (n.includes("grammar"))        return { icon:"📖", iconClass:"study" };
  if (n.includes("vocab"))          return { icon:"🔤", iconClass:"vocab" };
  if (n.includes("reading"))        return { icon:"📄", iconClass:"reading" };
  if (n.includes("listening"))      return { icon:"🎧", iconClass:"listening" };
  if (n.includes("tongue twister")) return { icon:"🗣️", iconClass:"tongue-twister" };
  if (n.includes("one shot"))       return { icon:"⚡", iconClass:"one-shot" };
  if (n.includes("squeezer"))       return { icon:"💪", iconClass:"squeezer" };
  if (n.includes("dmt"))            return { icon:"🎯", iconClass:"dmt" };
  if (n.includes("wish"))           return { icon:"⭐", iconClass:"wish" };
  if (n.includes("project"))        return { icon:"🏗️", iconClass:"project" };
  if (n.includes("graduation"))     return { icon:"🎓", iconClass:"graduation-project" };
  if (n.includes("interview"))      return { icon:"🎤", iconClass:"Interview" };
  return { icon:"📌", iconClass:"study" };
}

function loadActivityFile(lvl, sess, filename, actName) {

  // ── Grammar: شغّل امتحان الطالب مباشرةً ──────────────────────
  if (actName.toLowerCase().includes("grammar")) {
    openGrammarExam(lvl, sess);
    return;
  }

  // ── باقي الأنشطة: تحميل ملف JS كالمعتاد ──────────────────────
  const path = `${CONFIG.DATA_PATH}${filename}`;
  const existing = document.getElementById("activityScript");
  if (existing) existing.remove();
  const script = document.createElement("script");
  script.id = "activityScript"; script.src = path;
  script.onerror = () => { showToast(`Activity file not found: ${filename}`, "error"); };
  document.body.appendChild(script);
  showToast(`Loading: ${actName}...`);
}

// ─── GRAMMAR EXAM LAUNCHER ────────────────────────────────────
function openGrammarExam(lvl, sess) {
  if (!currentUser) {
    pendingAction = { type: "grammar", lvl, sess };
    showLogin("grammar");
    return;
  }

  // استخدام الـ overlay الموجود في HTML
  const overlay   = document.getElementById("grammarExamOverlay");
  const container = document.getElementById("grammarExamContainer");
  if (!overlay || !container) {
    showToast("Grammar exam overlay not found.", "error");
    return;
  }

  // تنظيف وفتح
  container.innerHTML = "";
  overlay.classList.remove("hidden");

  // GrammarStudentExam محمّل مسبقاً في الـ HTML كـ <script>
  if (typeof GrammarStudentExam === "undefined") {
    container.innerHTML = `
      <div style="color:#ff4757;text-align:center;padding:60px 20px;font-family:'Barlow',sans-serif;">
        <div style="font-size:2.5rem;margin-bottom:16px">⚠️</div>
        <div style="font-size:1.2rem;font-weight:700;">Grammar engine not loaded.</div>
        <div style="font-size:.9rem;color:rgba(255,255,255,.4);margin-top:8px;">
          Make sure grammar-engine-student.js is loaded before Vetoojava.js
        </div>
      </div>`;
    return;
  }

  GrammarStudentExam.start(lvl, sess, container, (result) => {
    // بعد ما الطالب يخلص — حدّث الـ Scardline
    setTimeout(() => syncGrammarToScardline(result), 3000);
  });
}

// ─── تحديث Scardline بعد تسجيل الدرجة ───────────────────────
async function syncGrammarToScardline(result) {
  if (!currentUser || !currentUser.email) return;
  try {
    const url = `${CONFIG.GAS_URL}?action=syncScardline&email=${encodeURIComponent(currentUser.email)}`;
    await fetch(url);
    if (typeof initProgressGallery === "function" && PG.isLoaded) {
      initProgressGallery();
    }
  } catch(e) {
    console.warn("syncScardline failed:", e);
  }
}

function getActivityFilename(level, session, activityName) {
  const isTest    = activityName.toLowerCase().includes("test");
  const firstWord = activityName.split(/[\s:]/)[0].replace(/[^a-zA-Z]/g,"");
  const prefix    = firstWord.substring(0,3);
  const suffix    = isTest ? prefix+"t" : prefix;
  return `L-${level}-S-${session}-${suffix}.js`;
}

// ─── PORTAL FLASH SCREEN ─────────────────────────────────────
function openPortal(type) {
  const data = PORTAL_DATA[type];
  if (!data) return;

  const flash   = document.getElementById("portalFlash");
  const content = document.getElementById("portalFlashContent");
  if (!flash || !content) return;

  const itemsHTML = data.items.map(item => `
    <a href="${item.url}" target="_blank" class="flash-item">
      <div class="flash-item-icon ${item.cls}">${item.icon}</div>
      <div>
        <div class="flash-item-label">${item.label}</div>
        <div class="flash-item-sub">${item.sub}</div>
      </div>
      <span class="flash-item-arrow">→</span>
    </a>`).join("");

  content.innerHTML = `
    <div class="flash-portal-title">${data.title}</div>
    <div class="flash-portal-sub">${data.sub}</div>
    <div class="flash-items">${itemsHTML}</div>`;

  flash.classList.remove("hidden");
}

function closePortalFlash() {
  const flash = document.getElementById("portalFlash");
  if (flash) flash.classList.add("hidden");
}

// إغلاق بالضغط على الخلفية
document.getElementById("portalFlash")?.addEventListener("click", function(e) {
  if (e.target === this) closePortalFlash();
});

// ─── BIND NAV ─────────────────────────────────────────────────
function bindNav() {
  document.getElementById("btnLoginTopbar")?.addEventListener("click", () => showLogin("nav"));
}

// ─── TOAST ──────────────────────────────────────────────────
function showToast(msg, type) {
  if (!toast) return;
  toast.textContent = msg;
  toast.className   = "show" + (type === "error" ? " error-toast" : "");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.className = ""; }, 3200);
}

// ════════════════════════════════════════════════════════════
//  PROGRESS GALLERY
// ════════════════════════════════════════════════════════════
function pgParseScores(raw) {
  if (raw === null || raw === undefined) return [];
  const str = raw.toString().trim();
  if (str === "" || str === "0") return [];
  return str.split(",").map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
}

function pgCalcTrend(scores) {
  if (scores.length < 2) return { pct:0, dir:"flat" };
  const first = scores[0], last = scores[scores.length-1];
  if (first === 0) return { pct:0, dir:"flat" };
  const pct = ((last-first)/Math.abs(first))*100;
  const rounded = Math.round(pct*10)/10;
  return { pct:rounded, dir: rounded>1?"up": rounded<-1?"down":"flat" };
}

function pgBuildCard(actKey, scores, cardIndex) {
  const label   = ACT_ARABIC[actKey] || actKey;
  const trend   = pgCalcTrend(scores);
  const hasData = scores.length > 0;
  const arrowMap = { up:"↑", down:"↓", flat:"→" };
  const pctStr  = trend.dir==="flat" ? "Stable" : (trend.dir==="up"?"+":"")+trend.pct+"%";
  const visible = hasData ? scores.slice(-6) : [];
  const pillsHTML = visible.length>0
    ? visible.map((s,i) => `<span class="pg-score-pill${i===visible.length-1?" latest":""}">${s}</span>`).join("")
    : `<span class="pg-score-pill">No data yet</span>`;

  const card = document.createElement("div");
  card.className = `pg-card trend-${trend.dir}`;
  card.innerHTML = `
    <div class="pg-card-top">
      <div>
        <div class="pg-act-name">${label}</div>
        <div class="pg-act-counter">${hasData ? scores.length+" sessions" : "No data yet"}</div>
      </div>
      <div class="pg-trend-block">
        <div class="pg-arrow ${trend.dir}">${arrowMap[trend.dir]}</div>
        <span class="pg-pct ${trend.dir}">${pctStr}</span>
      </div>
    </div>
    <div class="pg-chart-area">
      <canvas id="pg-canvas-${cardIndex}" role="img" aria-label="Performance chart for ${label}"></canvas>
    </div>
    <div class="pg-scores">${pillsHTML}</div>`;
  return card;
}

function pgDrawChart(canvasId, scores, dir) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const lineColor = dir==="up"?"#00e676": dir==="down"?"#ff4444":"#00d4ff";
  const fillColor = dir==="up"?"rgba(0,230,118,0.1)": dir==="down"?"rgba(255,68,68,0.1)":"rgba(0,212,255,0.08)";
  const labels = scores.length>0 ? scores.map((_,i)=>"S"+(i+1)) : ["—"];
  const data   = scores.length>0 ? scores : [0];
  const inst = new Chart(canvas, {
    type:"line",
    data:{ labels, datasets:[{ data, borderColor:lineColor, borderWidth:2, backgroundColor:fillColor, fill:true, tension:0.4, pointBackgroundColor:lineColor, pointRadius:data.length===1?5:3, pointHoverRadius:6 }] },
    options:{ responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false}, tooltip:{ callbacks:{ label:ctx=>"Score: "+ctx.raw } } },
      scales:{ x:{grid:{color:"rgba(0,212,255,0.06)"},ticks:{color:"#5a7090",font:{size:10}},border:{color:"transparent"}}, y:{grid:{color:"rgba(0,212,255,0.06)"},ticks:{color:"#5a7090",font:{size:10},maxTicksLimit:4},border:{color:"transparent"}} }
    }
  });
  PG.charts.push(inst);
}

function pgBuildGallery(rowData) {
  const gallery = document.getElementById("progressGallery");
  if (!gallery) return;
  PG.charts.forEach(c => { try{c.destroy();}catch(e){} });
  PG.charts=[]; PG.currentIndex=0;
  PG.activities = SCARDLINE_ACTIVITIES.filter(k => pgParseScores(rowData[k]).length>0);
  if (PG.activities.length===0) { gallery.innerHTML=`<div class="pg-no-data">No performance data yet 🎯</div>`; return; }
  gallery.innerHTML="";

  const sliderWrap = document.createElement("div"); sliderWrap.className="pg-slider-wrap";
  const track = document.createElement("div"); track.className="pg-track"; track.id="pgTrack";
  sliderWrap.appendChild(track);
  gallery.appendChild(sliderWrap);

  PG.activities.forEach((actKey,i) => {
    const scores = pgParseScores(rowData[actKey]);
    track.appendChild(pgBuildCard(actKey, scores, i));
  });

  const navBar = document.createElement("div"); navBar.className="pg-nav"; navBar.id="pgNav";
  const btnPrev = document.createElement("button"); btnPrev.className="pg-nav-btn"; btnPrev.textContent="‹"; btnPrev.onclick=()=>pgGoTo(PG.currentIndex-1);
  const dotsWrap = document.createElement("div"); dotsWrap.className="pg-dots"; dotsWrap.id="pgDots";
  PG.activities.forEach((_,i) => {
    const dot = document.createElement("button");
    dot.className="pg-dot"+(i===0?" active":""); dot.onclick=()=>pgGoTo(i);
    dotsWrap.appendChild(dot);
  });
  const btnNext = document.createElement("button"); btnNext.className="pg-nav-btn"; btnNext.textContent="›"; btnNext.onclick=()=>pgGoTo(PG.currentIndex+1);
  navBar.appendChild(btnPrev); navBar.appendChild(dotsWrap); navBar.appendChild(btnNext);
  gallery.appendChild(navBar);

  let touchX=0;
  sliderWrap.addEventListener("touchstart",e=>{touchX=e.touches[0].clientX;},{passive:true});
  sliderWrap.addEventListener("touchend",e=>{
    const diff=touchX-e.changedTouches[0].clientX;
    if(Math.abs(diff)>40){diff>0?pgGoTo(PG.currentIndex+1):pgGoTo(PG.currentIndex-1);}
  },{passive:true});

  requestAnimationFrame(()=>{
    PG.activities.forEach((actKey,i)=>{
      const scores=pgParseScores(rowData[actKey]);
      pgDrawChart("pg-canvas-"+i, scores, pgCalcTrend(scores).dir);
    });
    pgUpdateNav();
  });
}

function pgGoTo(index) {
  const total=PG.activities.length; if(!total)return;
  PG.currentIndex=((index%total)+total)%total;
  const track=document.getElementById("pgTrack");
  if(track) track.style.transform=`translateX(calc(-${PG.currentIndex} * 100%))`;
  pgUpdateNav();
}

function pgUpdateNav() {
  const dots=document.getElementById("pgDots");
  if(dots) dots.querySelectorAll(".pg-dot").forEach((d,i)=>d.classList.toggle("active",i===PG.currentIndex));
}

function renderProgressLocked() {
  const gallery=document.getElementById("progressGallery"); if(!gallery)return;
  PG.charts.forEach(c=>{try{c.destroy();}catch(e){}}); PG.charts=[]; PG.isLoaded=false;
  gallery.innerHTML=`
    <div class="pg-locked">
      <div class="pg-lock-icon">🔒</div>
      <p class="pg-locked-txt">Log in to view<br>your performance</p>
      <button class="pg-login-btn" onclick="showLogin('progress')">LOG IN</button>
    </div>`;
}

function renderProgressLoading() {
  const gallery=document.getElementById("progressGallery"); if(!gallery)return;
  gallery.innerHTML=`<div class="pg-loading">LOADING DATA...</div>`;
}

function renderProgressError(msg) {
  const gallery=document.getElementById("progressGallery"); if(!gallery)return;
  gallery.innerHTML=`<div class="pg-error">${msg||"Unable to load data"}</div>`;
}

async function initProgressGallery() {
  if(!currentUser||!currentUser.email){renderProgressLocked();return;}
  renderProgressLoading();
  try {
    const url=`${CONFIG.GAS_URL}?action=getScardline&email=${encodeURIComponent(currentUser.email)}`;
    const res=await fetch(url);
    const data=await res.json();
    if(data.status==="success"&&data.row){pgBuildGallery(data.row);PG.isLoaded=true;}
    else renderProgressError(data.message||"No data found for this student");
  } catch(e){renderProgressError("Connection error. Please try again.");}
}
