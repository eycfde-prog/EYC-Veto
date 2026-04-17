/**
 * WOLF D - Listening Engine V2.0
 * Optimized for: Multi-class JSON data & Bold highlighted text
 */

const ListeningEngine = {
    audioPlayer: new Audio(),
    currentIdx: 0,
    data: null, // سيحتوي على بيانات الـ Class المختار

    init: function(classData) {
        this.data = classData;
        this.currentIdx = 0; // البدء من أول محادثة في الكلاس
        this.renderLayout();
        this.renderTask(0);
    },

    renderLayout: function() {
        const container = document.getElementById('stage-content');
        container.innerHTML = `
            <style>
                .listening-theater { 
                    height: 100vh; width: 100%; background: radial-gradient(circle, #1a1a1a 0%, #000 100%);
                    color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center;
                    font-family: 'Segoe UI', sans-serif; position: relative;
                }
                .top-info { position: absolute; top: 20px; color: #c5a059; letter-spacing: 2px; font-weight: bold; }
                
                .audio-controls { margin-bottom: 30px; z-index: 10; }
                .play-trigger { 
                    width: 80px; height: 80px; border-radius: 50%; background: #c5a059; border: none;
                    cursor: pointer; font-size: 1.5rem; transition: 0.3s; box-shadow: 0 0 20px rgba(197,160,89,0.3);
                }
                .play-trigger:hover { transform: scale(1.1); background: #d4af37; }
                .play-trigger.playing { background: #ff4757; }

                .main-dialogue-area { 
                    width: 80%; max-width: 900px; padding: 40px; 
                    background: rgba(255,255,255,0.03); border-radius: 30px;
                    border: 1px solid rgba(197, 160, 89, 0.2); min-height: 300px;
                }
                .chat-line { margin-bottom: 25px; border-left: 3px solid #c5a059; padding-left: 20px; }
                .name-tag { color: #c5a059; font-size: 1.2rem; font-weight: 800; text-transform: uppercase; margin-bottom: 5px; display: block; }
                .speech-text { font-size: 1.8rem; line-height: 1.4; color: #e0e0e0; }
                .speech-text b { color: #fff; text-decoration: underline; text-underline-offset: 4px; }

                .nav-buttons { position: absolute; bottom: 40px; display: flex; gap: 20px; }
                .nav-btn { 
                    padding: 10px 25px; background: transparent; border: 1px solid #c5a059; 
                    color: #c5a059; cursor: pointer; border-radius: 5px; transition: 0.3s;
                }
                .nav-btn:hover { background: #c5a059; color: #000; }
                .nav-btn:disabled { opacity: 0.3; cursor: not-allowed; }
            </style>
            
            <div class="listening-theater">
                <div class="top-info" id="class-title"></div>
                
                <div class="audio-controls">
                    <button class="play-trigger" id="master-play" onclick="ListeningEngine.toggleAudio()">▶</button>
                </div>

                <div class="main-dialogue-area" id="convo-container"></div>

                <div class="nav-buttons">
                    <button class="nav-btn" id="prev-btn" onclick="ListeningEngine.prevTask()">Previous</button>
                    <button class="nav-btn" id="next-btn" onclick="ListeningEngine.nextTask()">Next</button>
                </div>
            </div>
        `;
    },

    renderTask: function(idx) {
        this.currentIdx = idx;
        const task = this.data.tasks[idx];
        const container = document.getElementById('convo-container');
        const titleTag = document.getElementById('class-title');
        
        // تحديث العنوان (Class Title + Task ID)
        titleTag.innerText = `${this.data.title.toUpperCase()} - TASK ${task.id}`;
        
        // تنظيف الحاوية
        container.innerHTML = '';
        this.audioPlayer.pause();
        document.getElementById('master-play').classList.remove('playing');
        document.getElementById('master-play').innerText = "▶";

        // تقسيم الحوار بناءً على الشخصيات
        // regex لتقسيم النص عند كل [Name - Mood]
        const lines = task.dialogue.split(/(?=\[.*?\])/);
        
        lines.forEach(line => {
            const match = line.match(/\[(.*?)\s-\s(.*?)\]:\s(.*)/);
            if (match) {
                const [_, name, mood, text] = match;
                const lineDiv = document.createElement('div');
                lineDiv.className = 'chat-line';
                lineDiv.innerHTML = `
                    <span class="name-tag">${name} <small style="font-weight:400; font-size:0.7rem; opacity:0.6">(${mood})</small></span>
                    <p class="speech-text">${text.trim()}</p>
                `;
                container.appendChild(lineDiv);
            }
        });

        // تحديث حالة الأزرار
        document.getElementById('prev-btn').disabled = (idx === 0);
        document.getElementById('next-btn').disabled = (idx === this.data.tasks.length - 1);
    },

    toggleAudio: function() {
        const task = this.data.tasks[this.currentIdx];
        // توليد اسم الملف الصوتي بناءً على الـ ID (مثلاً 1.1.mp3)
        const audioFile = `${task.id}.mp3`;
        const src = `${this.data.audioBaseUrl}${audioFile}`;
        
        if (this.audioPlayer.src !== src) {
            this.audioPlayer.src = src;
        }

        const btn = document.getElementById('master-play');
        if (this.audioPlayer.paused) {
            this.audioPlayer.play();
            btn.innerText = "⏸";
            btn.classList.add('playing');
        } else {
            this.audioPlayer.pause();
            btn.innerText = "▶";
            btn.classList.remove('playing');
        }
    },

    nextTask: function() {
        if (this.currentIdx < this.data.tasks.length - 1) {
            this.renderTask(this.currentIdx + 1);
        }
    },

    prevTask: function() {
        if (this.currentIdx > 0) {
            this.renderTask(this.currentIdx - 1);
        }
    }
};

// عند انتهاء الصوت يرجع الزر لشكل التشغيل
ListeningEngine.audioPlayer.onended = () => {
    const btn = document.getElementById('master-play');
    btn.innerText = "▶";
    btn.classList.remove('playing');
};
