(function() {
    const container = document.getElementById('stage-content');
    if (!container) return;

    // قائمة الـ 20 كلمة المختارة لقصة الببغاء الذكي
    const words = [
        "sailor", "company", "intelligent", "ringing", "beeping", 
        "phrases", "paint", "ladder", "balanced", "rang", 
        "minute", "perch", "hallway", "perfectly", "neighbor", 
        "emergency", "edge", "exactly", "whistle", "brilliant"
    ];

    let remainingWords = [...words];
    let currentTargetId = null;

    const storyTitle = "The Smart Parrot";
    
    // محتوى القصة الثالثة
    let storyContent = `
        George was a retired <span class="word-gap" data-word="sailor">?</span> who lived alone in a small house by the sea. 
        To keep him <span class="word-gap" data-word="company">?</span>, he bought a large, colorful parrot named Pickles. 
        Pickles was very <span class="word-gap" data-word="intelligent">?</span> and could mimic any sound he heard, from the <span class="word-gap" data-word="ringing">?</span> of the telephone to the sound of the microwave <span class="word-gap" data-word="beeping">?</span>. 
        George spent hours teaching him funny <span class="word-gap" data-word="phrases">?</span> to entertain his guests.
        <br><br>
        One afternoon, George decided to <span class="word-gap" data-word="paint">?</span> his kitchen ceiling. 
        He put on some old clothes and climbed up a tall <span class="word-gap" data-word="ladder">?</span>. 
        He had a bucket of bright yellow paint <span class="word-gap" data-word="balanced">?</span> on a small wooden plank. 
        Just as he was about to start, the doorbell <span class="word-gap" data-word="rang">?</span>. 
        George shouted, "I’m coming! Just a <span class="word-gap" data-word="minute">?</span>!" as he carefully began to climb down.
        <br><br>
        However, Pickles was watching from his <span class="word-gap" data-word="perch">?</span> and found this very interesting. 
        As soon as George reached the <span class="word-gap" data-word="hallway">?</span> to open the door, Pickles mimicked George’s voice <span class="word-gap" data-word="perfectly">?</span> and screamed, "Jump! Jump now!" 
        George, thinking a <span class="word-gap" data-word="neighbor">?</span> was calling him from outside in an <span class="word-gap" data-word="emergency">?</span>, got confused and jumped off the last few steps.
        <br><br>
        He landed safely, but his foot hit the <span class="word-gap" data-word="edge">?</span> of the paint bucket. 
        The yellow paint flew into the air and landed <span class="word-gap" data-word="exactly">?</span> on top of George's head. 
        When George opened the door, it was just a man delivering a package. 
        From the kitchen, Pickles let out a loud <span class="word-gap" data-word="whistle">?</span> and said, "Looking good, Captain!" 
        George couldn't stay angry for long because the parrot’s timing was simply too <span class="word-gap" data-word="brilliant">?</span>.
    `;

    container.innerHTML = ''; 
    container.style.cssText = `height:100%; width:100%; display:block; background:#042f2e; color:#ccfbf1; overflow-y:auto; padding:0; font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth;`;

    container.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@700;900&family=Outfit:wght@400;700&display=swap');
            
            #stage-content::-webkit-scrollbar { width: 10px; }
            #stage-content::-webkit-scrollbar-track { background: #042f2e; }
            #stage-content::-webkit-scrollbar-thumb { background: #2dd4bf; border-radius: 5px; }

            .story-wrapper {
                max-width: 90%;
                margin: 60px auto;
                background: #134e4a;
                padding: 60px;
                border-radius: 30px;
                box-shadow: 0 25px 50px -12px rgba(0,0,0,0.6);
                border: 2px solid #14b8a6;
            }

            .story-title {
                color: #5eead4;
                text-align: center;
                font-size: 4rem;
                font-weight: 900;
                margin-bottom: 50px;
                font-family: 'Unbounded', sans-serif;
                text-transform: uppercase;
                text-shadow: 0 4px 20px rgba(0,0,0,0.3);
            }

            .story-body {
                line-height: 1.8;
                font-size: 2.6rem;
                color: #f0fdfa;
                font-family: 'Outfit', sans-serif;
            }

            .word-gap {
                display: inline-block;
                min-width: 140px;
                border-bottom: 4px solid #5eead4;
                text-align: center;
                color: #5eead4;
                cursor: pointer;
                transition: 0.2s;
                background: rgba(94, 234, 212, 0.1);
                border-radius: 8px;
                padding: 0 15px;
                margin: 0 5px;
            }

            .word-gap.active-target {
                animation: pulseGlowTeal 1.5s infinite;
                border-bottom-style: dashed;
            }

            @keyframes pulseGlowTeal {
                0% { box-shadow: 0 0 0 0 rgba(94, 234, 212, 0.4); }
                70% { box-shadow: 0 0 0 20px rgba(94, 234, 212, 0); }
                100% { box-shadow: 0 0 0 0 rgba(94, 234, 212, 0); }
            }

            .word-gap.filled {
                border-bottom: none;
                color: #facc15; /* اللون الأصفر لون الدهان في القصة */
                font-weight: 700;
                background: transparent;
                animation: correctPop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }

            @keyframes correctPop {
                0% { transform: scale(0.5); }
                100% { transform: scale(1); }
            }

            #word-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(2, 44, 34, 0.98);
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
                background: #f0fdfa;
                color: #134e4a;
                padding: 20px 40px;
                font-size: 2.4rem;
                font-weight: 700;
                border-radius: 15px;
                cursor: pointer;
                border: none;
                font-family: 'Outfit', sans-serif;
                transition: 0.2s;
            }

            .choice-btn:hover { transform: scale(1.05); background: #5eead4; color: #134e4a; }
            .choice-btn.wrong { background: #f43f5e !important; color: white; animation: shake 0.4s; }

            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }

            .one-shot-label {
                display: inline-block;
                background: #5eead4;
                color: #134e4a;
                padding: 5px 25px;
                border-radius: 50px;
                font-size: 1.2rem;
                font-weight: 900;
                margin-bottom: 20px;
            }
        </style>

        <div id="word-overlay"></div>

        <div class="story-wrapper">
            <center><div class="one-shot-label">VETO ONE-SHOT • STORY 03</div></center>
            <h1 class="story-title">${storyTitle}</h1>
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