(function() {
    const container = document.getElementById('stage-content');
    if (!container) return;

    // اختيار 20 كلمة مستهدفة لقصة الهاتف المفقود
    const words = [
        "beach", "smartphone", "camera", "social", "shore", 
        "tightly", "crab", "closeup", "wave", "balance", 
        "splash", "salty", "seaweed", "cloudy", "device", 
        "snorkeling", "ocean", "waterproof", "video", "unique"
    ];

    let remainingWords = [...words];
    let currentTargetId = null;

    const storyTitle = "The Underwater Phone";
    
    // محتوى القصة العشرين
    let storyContent = `
        Last summer, Sophie went to the <span class="word-gap" data-word="beach">?</span>. 
        She was excited because she had a new <span class="word-gap" data-word="smartphone">?</span> with an amazing <span class="word-gap" data-word="camera">?</span>. 
        She wanted a photo for her <span class="word-gap" data-word="social">?</span> media. 
        She walked along the <span class="word-gap" data-word="shore">?</span>, holding the phone <span class="word-gap" data-word="tightly">?</span>.
        <br><br>
        Suddenly, she saw an orange <span class="word-gap" data-word="crab">?</span> and knelt down for a <span class="word-gap" data-word="closeup">?</span> shot. 
        Just then, a huge <span class="word-gap" data-word="wave">?</span> crashed, and Sophie lost her <span class="word-gap" data-word="balance">?</span>. 
        With a loud <span class="word-gap" data-word="splash">?</span>, the phone fell into the <span class="word-gap" data-word="salty">?</span> water.
        <br><br>
        She searched through the <span class="word-gap" data-word="seaweed">?</span>, but the water was too <span class="word-gap" data-word="cloudy">?</span>. 
        She thought her expensive <span class="word-gap" data-word="device">?</span> was gone forever. 
        But then, a boy wearing <span class="word-gap" data-word="snorkeling">?</span> gear emerged from the <span class="word-gap" data-word="ocean">?</span> holding her phone.
        <br><br>
        Luckily, it was <span class="word-gap" data-word="waterproof">?</span>. 
        It had even captured a cool <span class="word-gap" data-word="video">?</span> of fish! 
        It was the most <span class="word-gap" data-word="unique">?</span> video she had ever captured.
    `;

    container.innerHTML = ''; 
    container.style.cssText = `height:100%; width:100%; display:block; background:#0f172a; color:#f8fafc; overflow-y:auto; padding:0; font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth;`;

    container.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&family=Outfit:wght@400;700&display=swap');
            
            #stage-content::-webkit-scrollbar { width: 10px; }
            #stage-content::-webkit-scrollbar-track { background: #0f172a; }
            #stage-content::-webkit-scrollbar-thumb { background: #0ea5e9; border-radius: 5px; }

            .story-wrapper {
                max-width: 90%;
                margin: 60px auto;
                background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
                padding: 60px;
                border-radius: 30px;
                box-shadow: 0 0 50px rgba(14, 165, 233, 0.2);
                border: 2px solid #334155;
                position: relative;
            }

            .story-title {
                color: #38bdf8;
                text-align: center;
                font-size: 4rem;
                font-weight: 700;
                margin-bottom: 50px;
                font-family: 'Fredoka', sans-serif;
                text-transform: uppercase;
                letter-spacing: 1px;
                filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.4));
            }

            .story-body {
                line-height: 2.1;
                font-size: 2.7rem;
                color: #cbd5e1;
                font-family: 'Outfit', sans-serif;
            }

            .word-gap {
                display: inline-block;
                min-width: 150px;
                border-bottom: 4px solid #0ea5e9;
                text-align: center;
                color: #38bdf8;
                cursor: pointer;
                transition: 0.3s;
                background: rgba(14, 165, 233, 0.1);
            }

            .word-gap.active-target {
                animation: waveMotion 2s infinite ease-in-out;
            }

            @keyframes waveMotion {
                0% { border-bottom-color: #0ea5e9; transform: translateY(0); }
                50% { border-bottom-color: #fb923c; transform: translateY(-5px); }
                100% { border-bottom-color: #0ea5e9; transform: translateY(0); }
            }

            .word-gap.filled {
                border-bottom: none;
                color: #ffffff;
                font-weight: 700;
                background: #0ea5e9;
                padding: 0 15px;
                border-radius: 8px;
                animation: bubbleUp 0.5s ease-out;
            }

            @keyframes bubbleUp {
                0% { transform: scale(0.5) translateY(20px); opacity: 0; }
                100% { transform: scale(1) translateY(0); opacity: 1; }
            }

            #word-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(15, 23, 42, 0.95);
                display: none;
                flex-wrap: wrap;
                justify-content: center;
                align-content: center;
                gap: 20px;
                padding: 40px;
                z-index: 9999;
                backdrop-filter: blur(15px);
            }

            .choice-btn {
                background: transparent;
                color: #38bdf8;
                padding: 20px 45px;
                font-size: 2.4rem;
                font-weight: 700;
                border-radius: 50px;
                cursor: pointer;
                border: 2px solid #38bdf8;
                font-family: 'Outfit', sans-serif;
                transition: 0.3s;
            }

            .choice-btn:hover { background: #38bdf8; color: #0f172a; box-shadow: 0 0 30px #0ea5e9; }
            .choice-btn.wrong { border-color: #f87171 !important; color: #f87171; animation: sink 0.4s; }

            @keyframes sink {
                0% { transform: translateY(0); }
                50% { transform: translateY(15px); }
                100% { transform: translateY(0); }
            }

            .one-shot-label {
                color: #fb923c;
                font-size: 1.1rem;
                letter-spacing: 5px;
                font-weight: 900;
                margin-bottom: 15px;
                display: block;
                text-transform: uppercase;
            }
        </style>

        <div id="word-overlay"></div>

        <div class="story-wrapper">
            <center>
                <span class="one-shot-label">DEEP BLUE • STORY 20</span>
                <h1 class="story-title">${storyTitle}</h1>
            </center>
            <div class="story-body">
                ${storyContent}
            </div>
        </div>
        <div style="height: 100px;"></div>
    `;

    const overlay = document.getElementById('word-overlay');
    const allGaps = document.querySelectorAll('.word-gap');

    const updateActiveGap = () => {
        allGaps.forEach(g => g.classList.remove('active-target'));
        const nextGap = Array.from(allGaps).find(g => !g.classList.contains('filled'));
        if (nextGap) nextGap.classList.add('active-target');
    };

    const openOverlay = (target) => {
        currentTargetId = target;
        overlay.innerHTML = '';
        const shuffled = [...remainingWords].sort(() => Math.random() - 0.5);
        shuffled.forEach(word => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.innerText = word;
            btn.onclick = () => checkWord(word, btn);
            overlay.appendChild(btn);
        });
        overlay.style.display = 'flex';
    };

    const checkWord = (selectedWord, btnElement) => {
        const correctWord = currentTargetId.getAttribute('data-word');
        if (selectedWord.toLowerCase() === correctWord.toLowerCase()) {
            currentTargetId.innerText = correctWord;
            currentTargetId.classList.add('filled');
            overlay.style.display = 'none';
            remainingWords = remainingWords.filter(w => w !== selectedWord);
            updateActiveGap();
        } else {
            btnElement.classList.add('wrong');
            setTimeout(() => btnElement.classList.remove('wrong'), 400);
        }
    };

    allGaps.forEach(gap => {
        gap.onclick = () => openOverlay(gap);
    });

    document.onkeydown = (e) => {
        if (e.key === "Enter") {
            const nextGap = Array.from(allGaps).find(g => !g.classList.contains('filled'));
            if (nextGap && overlay.style.display !== 'flex') {
                openOverlay(nextGap);
            }
        }
        if (e.key === "Escape") overlay.style.display = 'none';
    };

    updateActiveGap();
})();