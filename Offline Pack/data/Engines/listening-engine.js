/* ════════════════════════════════════════════
   listening-engine.js
   Standalone — يتحمل في EYCSB.html كـ <script>
   ════════════════════════════════════════════ */

// ════════════════════════════════════════════
// LISTENING DATA
// أضف levels جديدة تحت level_1 بنفس الشكل
// ════════════════════════════════════════════
const LISTENING_DATA = {
  "level_1": {
    "class_1": {
      "title": "First Impressions",
      "tasks": [
        { "id": "1.1", "dialogue": "[Ahmed - Friendly]: Hello! I am Ahmed. I <b>[feel]</b> a bit <b>[shy]</b> today. [Sandy - Encouraging]: Hi! I am Sandy. Don't be <b>[scared]</b>. [Ahmed - Honest]: My <b>[English]</b> is not <b>[good]</b>. I <b>[often]</b> stop <b>[talking]</b>. [Sandy - Supportive]: It is <b>[okay]</b>. We can <b>[practice]</b> together <b>[every]</b> day." },
        { "id": "1.2", "dialogue": "[Emy - Searching]: Is this the <b>[right]</b> room? I am <b>[looking]</b> for the <b>[class]</b>. [John - Welcoming]: Yes, it <b>[is]</b>. Welcome! I am John. [Emy - Worried]: I am Emy. I <b>[always]</b> make <b>[mistakes]</b> with <b>[past]</b> tenses. [John - Positive]: No <b>[problem]</b>. We are all <b>[here]</b> to <b>[improve]</b>." },
        { "id": "1.3", "dialogue": "[John - Curious]: What is your <b>[major]</b>, Ahmed? [Ahmed - Academic]: I study <b>[Commerce]</b>. I <b>[need]</b> English for my <b>[future]</b> job. [John - Technical]: Great! I am in <b>[IT]</b>. My <b>[accent]</b> is very <b>[strong]</b>. [Ahmed - Cooperative]: We <b>[must]</b> help <b>[each]</b> other to <b>[speak]</b> well." },
        { "id": "1.4", "dialogue": "[Sandy - Distant]: Look at this <b>[book]</b>. The <b>[words]</b> are very <b>[new]</b> to me. [Emy - Helping]: Let me <b>[see]</b>. I <b>[know]</b> some of <b>[them]</b>. [Sandy - Struggling]: I <b>[try]</b> to <b>[explain]</b> things but I <b>[forget]</b> the <b>[vocabulary]</b>. [Emy - Practical]: We can use a <b>[dictionary]</b> for these <b>[difficult]</b> parts." }
      ]
    },
    "class_2": {
      "title": "Getting Started",
      "tasks": [
        { "id": "2.1", "dialogue": "[Ahmed - Observing]: The <b>[teacher]</b> is very <b>[friendly]</b>, right? [Emy - Confirming]: Yes, she <b>[speaks]</b> slowly. I <b>[understand]</b> her <b>[well]</b>. [Ahmed - Hopeful]: I <b>[hope]</b> I can <b>[answer]</b> her <b>[questions]</b> tomorrow. [Emy - Advising]: Just <b>[listen]</b> carefully and <b>[stay]</b> calm." },
        { "id": "2.2", "dialogue": "[John - Searching]: Do you have a <b>[pen]</b>? I <b>[lost]</b> mine in the <b>[hall]</b>. [Sandy - Kind]: Here you <b>[go]</b>. I have an <b>[extra]</b> one. [John - Grateful]: Thanks! This <b>[lesson]</b> is about <b>[simple]</b> present <b>[verbs]</b>. [Sandy - Interested]: I <b>[like]</b> this topic. It <b>[seems]</b> very <b>[useful]</b>." },
        { "id": "2.3", "dialogue": "[Ahmed - Directing]: Let's <b>[start]</b> our <b>[group]</b> work now. [Sandy - Agreeing]: Okay. We <b>[need]</b> to <b>[write]</b> five <b>[sentences]</b>. [John - Ready]: I can <b>[type]</b> them on my <b>[laptop]</b> quickly. [Ahmed - Careful]: Wait, let's <b>[check]</b> the <b>[spelling]</b> first. [John - Approving]: Good <b>[idea]</b>, Ahmed." },
        { "id": "2.4", "dialogue": "[Emy - Curious]: What do you <b>[think]</b> of the <b>[campus]</b>? [Sandy - Surprised]: It is <b>[huge]</b>! I <b>[got]</b> lost this <b>[morning]</b>. [Emy - Sharing]: Me too! I <b>[asked]</b> a <b>[guard]</b> for <b>[directions]</b>. [Sandy - Happy]: I <b>[found]</b> the <b>[cafeteria]</b>. The <b>[coffee]</b> is <b>[cheap]</b>." }
      ]
    }
  }
};

// ════════════════════════════════════════════
// LISTENING ENGINE
// ════════════════════════════════════════════
const ListeningEngine = {
    audioPlayer: new Audio(),
    allTasks: [], currentIdx: 0, classBoundaries: [],

    init(classesData) {
        this.allTasks = []; this.classBoundaries = []; this.currentIdx = 0;
        classesData.forEach(cls => {
            const start = this.allTasks.length;
            cls.tasks.forEach(task => this.allTasks.push({ ...task, _audioBase: cls.audioBaseUrl, _classTitle: cls.title }));
            this.classBoundaries.push({ label: cls.title, start, end: this.allTasks.length - 1 });
        });
        this.audioPlayer.pause();
        this._renderLayout();
        this.renderTask(0);
    },

    _renderLayout() {
        const tabsHtml = this.classBoundaries.map((b, i) =>
            `<button class="le-tab ${i===0?"active":""}" data-idx="${b.start}" onclick="ListeningEngine.renderTask(${b.start})">${b.label}</button>`
        ).join("");
        document.getElementById("stage-content").innerHTML = `
            <style>
                .le-wrap{height:100vh;width:100%;background:radial-gradient(circle at 50% 30%,#0d1a2e 0%,#060810 100%);color:#fff;display:flex;flex-direction:column;font-family:"Barlow","Segoe UI",sans-serif;overflow:hidden;position:relative}
                .le-header{padding:14px 28px 0;display:flex;flex-direction:column;gap:10px;border-bottom:1px solid rgba(197,160,89,0.2);flex-shrink:0}
                .le-title{font-family:"Orbitron",sans-serif;font-size:.6rem;letter-spacing:4px;color:#c5a059;text-transform:uppercase}
                .le-tabs{display:flex;gap:8px;flex-wrap:wrap;padding-bottom:12px}
                .le-tab{padding:6px 16px;border-radius:20px;font-size:.7rem;font-weight:700;border:1px solid rgba(197,160,89,0.35);background:transparent;color:rgba(197,160,89,0.6);cursor:pointer;transition:.2s;font-family:"Barlow",sans-serif}
                .le-tab.active,.le-tab:hover{background:#c5a059;color:#000;border-color:#c5a059}
                .le-counter{text-align:center;font-family:"Orbitron",sans-serif;font-size:.55rem;color:rgba(255,255,255,0.3);letter-spacing:3px;padding:8px 0;flex-shrink:0}
                .le-play-wrap{display:flex;justify-content:center;padding:10px 0;flex-shrink:0}
                .le-play{width:64px;height:64px;border-radius:50%;background:#c5a059;border:none;cursor:pointer;font-size:1.4rem;transition:.25s;box-shadow:0 0 24px rgba(197,160,89,0.35);display:flex;align-items:center;justify-content:center}
                .le-play:hover{transform:scale(1.08);background:#d4af37}
                .le-play.playing{background:#ff4757;box-shadow:0 0 24px rgba(255,71,87,0.4)}
                .le-dialogue{flex:1;overflow-y:auto;padding:20px 40px 100px;scrollbar-width:thin;scrollbar-color:#c5a059 transparent}
                .le-dialogue::-webkit-scrollbar{width:3px}.le-dialogue::-webkit-scrollbar-thumb{background:#c5a059;border-radius:2px}
                .le-line{margin-bottom:22px;padding-left:18px;border-left:3px solid #c5a059;animation:le-fi .3s ease}
                @keyframes le-fi{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
                .le-name{color:#c5a059;font-size:.85rem;font-weight:800;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:4px}
                .le-mood{font-weight:400;font-size:.65rem;opacity:.5;text-transform:none;letter-spacing:0}
                .le-text{font-size:1.5rem;line-height:1.45;color:#e0e0e0}
                .le-text b{color:#fff;text-decoration:underline;text-underline-offset:4px}
                .le-nav{position:absolute;bottom:0;left:0;right:0;display:flex;justify-content:center;gap:16px;padding:14px 0 18px;background:linear-gradient(to top,#060810 70%,transparent)}
                .le-nav-btn{padding:9px 28px;background:transparent;border:1px solid #c5a059;color:#c5a059;cursor:pointer;border-radius:6px;transition:.2s;font-family:"Orbitron",sans-serif;font-size:.6rem;letter-spacing:2px}
                .le-nav-btn:hover{background:#c5a059;color:#000}
                .le-nav-btn:disabled{opacity:.25;cursor:not-allowed}
            </style>
            <div class="le-wrap">
                <div class="le-header">
                    <div class="le-title" id="le-session-label">LISTENING</div>
                    <div class="le-tabs">${tabsHtml}</div>
                </div>
                <div class="le-counter" id="le-counter"></div>
                <div class="le-play-wrap"><button class="le-play" id="le-play-btn" onclick="ListeningEngine.toggleAudio()">&#9654;</button></div>
                <div class="le-dialogue" id="le-dialogue"></div>
                <div class="le-nav">
                    <button class="le-nav-btn" id="le-prev" onclick="ListeningEngine.prev()">&#9664; PREV</button>
                    <button class="le-nav-btn" id="le-next" onclick="ListeningEngine.next()">NEXT &#9654;</button>
                </div>
            </div>`;
    },

    renderTask(idx) {
        this.currentIdx = idx;
        const task = this.allTasks[idx], total = this.allTasks.length;
        document.getElementById("le-session-label").innerText = task._classTitle.toUpperCase() + " — TASK " + task.id;
        document.getElementById("le-counter").innerText = "CONVERSATION  " + (idx+1) + "  /  " + total;
        this.audioPlayer.pause();
        const btn = document.getElementById("le-play-btn");
        btn.classList.remove("playing"); btn.innerHTML = "&#9654;";
        const el = document.getElementById("le-dialogue"); el.innerHTML = "";
        task.dialogue.split(/(?=\[[\w\s]+ - [\w\s]+\]:)/).forEach(line => {
            const m = line.match(/\[(.*?)\s-\s(.*?)\]:\s*([\s\S]*)/);
            if (m) {
                const div = document.createElement("div"); div.className = "le-line";
                div.innerHTML = "<span class=\"le-name\">" + m[1] + " <span class=\"le-mood\">(" + m[2] + ")</span></span><p class=\"le-text\">" + m[3].trim() + "</p>";
                el.appendChild(div);
            }
        });
        el.scrollTop = 0;
        document.querySelectorAll(".le-tab").forEach(tab => {
            const b = this.classBoundaries.find(b => b.start === parseInt(tab.dataset.idx));
            tab.classList.toggle("active", b && idx >= b.start && idx <= b.end);
        });
        document.getElementById("le-prev").disabled = (idx === 0);
        document.getElementById("le-next").disabled = (idx === total - 1);
    },

    _classStartIdx() {
        for (let i = this.classBoundaries.length - 1; i >= 0; i--)
            if (this.currentIdx >= this.classBoundaries[i].start) return this.classBoundaries[i].start;
        return 0;
    },

    toggleAudio() {
        const task = this.allTasks[this.currentIdx];
        const num  = this.currentIdx - this._classStartIdx() + 1;
        const src  = task._audioBase + num + ".wav";
        if (this.audioPlayer.src !== src) this.audioPlayer.src = src;
        const btn = document.getElementById("le-play-btn");
        if (this.audioPlayer.paused) {
            this.audioPlayer.play().catch(() => {});
            btn.innerHTML = "&#9646;&#9646;"; btn.classList.add("playing");
        } else {
            this.audioPlayer.pause();
            btn.innerHTML = "&#9654;"; btn.classList.remove("playing");
        }
    },

    next() { if (this.currentIdx < this.allTasks.length - 1) this.renderTask(this.currentIdx + 1); },
    prev() { if (this.currentIdx > 0) this.renderTask(this.currentIdx - 1); }
};

ListeningEngine.audioPlayer.onended = () => {
    const b = document.getElementById("le-play-btn");
    if (b) { b.innerHTML = "&#9654;"; b.classList.remove("playing"); }
};
