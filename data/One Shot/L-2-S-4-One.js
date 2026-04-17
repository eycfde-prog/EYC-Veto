(function() {
    const container = document.getElementById('stage-content');
    if (!container) return;

    // قائمة الـ 20 كلمة المختارة للنشاط
    const words = [
        "comfortable", "close", "gym", "garage", "energetic", 
        "machine", "impress", "setting", "breath", "purple", 
        "shake", "air", "stuck", "pendulum", "instructor", 
        "giggle", "silly", "confidence", "treadmill", "gravity"
    ];

    let remainingWords = [...words];
    let currentTargetId = null;

    const storyTitle = "The Gym Adventure";
    
    // محتوى القصة الجديدة
    let storyContent = `
        Arthur was a man who preferred sitting on his <span class="word-gap" data-word="comfortable">?</span> sofa rather than running. 
        However, after he realized he couldn't <span class="word-gap" data-word="close">?</span> his favorite jeans, he decided to join a local <span class="word-gap" data-word="gym">?</span>. 
        On his first day, he wore a bright neon tracksuit that he found in the <span class="word-gap" data-word="garage">?</span>. 
        He felt very <span class="word-gap" data-word="energetic">?</span> and ready to transform his body.
        <br><br>
        He walked toward a complicated-looking <span class="word-gap" data-word="machine">?</span> that had many heavy weights. 
        Arthur wanted to <span class="word-gap" data-word="impress">?</span> a group of people nearby, so he chose the highest <span class="word-gap" data-word="setting">?</span>. 
        He sat down, took a deep <span class="word-gap" data-word="breath">?</span>, and tried to lift the bar. 
        His face turned <span class="word-gap" data-word="purple">?</span>, and his arms began to <span class="word-gap" data-word="shake">?</span> violently. 
        Instead of lifting the weight, the weight slowly pulled Arthur up into the <span class="word-gap" data-word="air">?</span>.
        <br><br>
        He was <span class="word-gap" data-word="stuck">?</span> hanging there, swinging back and forth like a giant <span class="word-gap" data-word="pendulum">?</span>. 
        A young <span class="word-gap" data-word="instructor">?</span> ran over to help him. 
        "Sir," the instructor said, trying not to <span class="word-gap" data-word="giggle">?</span>, "you are supposed to push, not pull yourself up." 
        Arthur felt a bit <span class="word-gap" data-word="silly">?</span> as he was lowered back to the floor.
        <br><br>
        To recover his <span class="word-gap" data-word="confidence">?</span>, Arthur decided to try the <span class="word-gap" data-word="treadmill">?</span>. 
        He started it at a very fast speed by mistake. Before he could find the button to stop it, his legs were moving like a cartoon character. 
        He eventually tripped and landed on the soft mat. 
        Everyone stopped to look, but Arthur just stood up and said, "I'm just testing the <span class="word-gap" data-word="gravity">?</span> here!" 
        He went home and decided that walking his dog was enough exercise for one day.
    `;

    container.innerHTML = ''; 
    container.style.cssText = `height:100%; width:100%; display:block; background:#0f172a; color:#f8fafc; overflow-y:auto; padding:0; font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth;`;

    container.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@700;900&family=Outfit:wght@400;700&display=swap');
            
            #stage-content::-webkit-scrollbar { width: 10px; }
            #stage-content::-webkit-scrollbar-track { background: #0f172a; }
            #stage-content::-webkit-scrollbar-thumb { background: #10b981; border-radius: 5px; }

            .story-wrapper {
                max-width: 90%;
                margin: 60px auto;
                background: #1e293b;
                padding: 60px;
                border-radius: 30px;
                box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
                border: 2px solid #334155;
            }

            .story-title {
                color: #10b981;
                text-align: center;
                font-size: 4rem;
                font-weight: 900;
                margin-bottom: 50px;
                font-family: 'Unbounded', sans-serif;
                text-transform: uppercase;
                letter-spacing: -1px;
            }

            .story-body {
                line-height: 1.8;
                font-size: 2.6rem;
                color: #e2e8f0;
                font-family: 'Outfit', sans-serif;
            }

            .word-gap {
                display: inline-block;
                min-width: 140px;
                border-bottom: 4px solid #10b981;
                text-align: center;
                color: #10b981;
                cursor: pointer;
                transition: 0.2s;
                background: rgba(16, 185, 129, 0.1);
                border-radius: 8px;
                padding: 0 15px;
                margin: 0 5px;
            }

            .word-gap.active-target {
                animation: pulseGlowGreen 1.5s infinite;
                border-bottom-style: dashed;
            }

            @keyframes pulseGlowGreen {
                0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
                70% { box-shadow: 0 0 0 20px rgba(16, 185, 129, 0); }
                100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
            }

            .word-gap.filled {
                border-bottom: none;
                color: #fbbf24;
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
                background: rgba(15, 23, 42, 0.98);
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
                background: #f8fafc;
                color: #0f172a;
                padding: 20px 40px;
                font-size: 2.4rem;
                font-weight: 700;
                border-radius: 15px;
                cursor: pointer;
                border: none;
                font-family: 'Outfit', sans-serif;
                transition: 0.2s;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }

            .choice-btn:hover { transform: scale(1.05); background: #10b981; color: white; }
            .choice-btn.wrong { background: #ef4444 !important; color: white; animation: shake 0.4s; }

            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }

            .one-shot-label {
                display: inline-block;
                background: #10b981;
                color: #0f172a;
                padding: 5px 25px;
                border-radius: 50px;
                font-size: 1.2rem;
                font-weight: 900;
                margin-bottom: 20px;
            }
        </style>

        <div id="word-overlay"></div>

        <div class="story-wrapper">
            <center><div class="one-shot-label">VETO ONE-SHOT • STORY 02</div></center>
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