(function() {
    const container = document.getElementById('stage-content');
    if (!container) return;

    // اختيار 20 كلمة مستهدفة لقصة البطل الخارق بالصدفة
    const words = [
        "shy", "factory", "attention", "jacket", "umbrella", 
        "storm", "strong", "blanket", "shoulders", "moment", 
        "balloon", "struggling", "bin", "fluttering", "cape", 
        "superhero", "explain", "photographer", "invisible", "powers"
    ];

    let remainingWords = [...words];
    let currentTargetId = null;

    const storyTitle = "The Accidental Superhero";
    
    // محتوى القصة الرابعة عشرة
    let storyContent = `
        Arthur was a very <span class="word-gap" data-word="shy">?</span> man who worked in a noisy <span class="word-gap" data-word="factory">?</span>. 
        He didn't like <span class="word-gap" data-word="attention">?</span>, so he always wore a plain <span class="word-gap" data-word="jacket">?</span>. 
        One windy Tuesday, a sudden <span class="word-gap" data-word="storm">?</span> began. 
        The wind was so <span class="word-gap" data-word="strong">?</span> that it blew a red <span class="word-gap" data-word="blanket">?</span> off a balcony and onto his <span class="word-gap" data-word="shoulders">?</span>.
        <br><br>
        At that exact <span class="word-gap" data-word="moment">?</span>, a small girl's <span class="word-gap" data-word="balloon">?</span> got stuck in a tree. 
        Arthur, who was <span class="word-gap" data-word="struggling">?</span> with the wind, tripped over a <span class="word-gap" data-word="bin">?</span>. 
        He flew forward, and because the blanket was <span class="word-gap" data-word="fluttering">?</span> like a <span class="word-gap" data-word="cape">?</span>, a group of children shouted, "Look! It’s a <span class="word-gap" data-word="superhero">?</span>!"
        <br><br>
        Arthur tried to <span class="word-gap" data-word="explain">?</span> that he was just a worker, but a <span class="word-gap" data-word="photographer">?</span> was already taking pictures. 
        He spent the whole afternoon helping people. 
        By the time he got home, he looked in the mirror and realized that he didn't feel <span class="word-gap" data-word="invisible">?</span> anymore. 
        He didn't have real <span class="word-gap" data-word="powers">?</span>, but being helpful made him feel much braver.
    `;

    container.innerHTML = ''; 
    container.style.cssText = `height:100%; width:100%; display:block; background:#f4f4f5; color:#18181b; overflow-y:auto; padding:0; font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth;`;

    container.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Outfit:wght@400;700&display=swap');
            
            #stage-content::-webkit-scrollbar { width: 10px; }
            #stage-content::-webkit-scrollbar-track { background: #f4f4f5; }
            #stage-content::-webkit-scrollbar-thumb { background: #dc2626; border-radius: 5px; }

            .story-wrapper {
                max-width: 90%;
                margin: 60px auto;
                background: #ffffff;
                padding: 60px;
                border-radius: 30px;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                border: 1px solid #e4e4e7;
                border-top: 15px solid #dc2626; /* خط علوي أحمر كعباءة السوبر هيرو */
            }

            .story-title {
                color: #b91c1c;
                text-align: center;
                font-size: 4rem;
                font-weight: 400;
                margin-bottom: 50px;
                font-family: 'Bangers', cursive;
                text-transform: uppercase;
                letter-spacing: 2px;
                text-shadow: 2px 2px 0px #fee2e2;
            }

            .story-body {
                line-height: 2;
                font-size: 2.7rem;
                color: #27272a;
                font-family: 'Outfit', sans-serif;
            }

            .word-gap {
                display: inline-block;
                min-width: 150px;
                border-bottom: 4px solid #dc2626;
                text-align: center;
                color: #dc2626;
                cursor: pointer;
                transition: 0.3s;
                background: rgba(220, 38, 38, 0.05);
                border-radius: 8px;
                padding: 0 10px;
            }

            .word-gap.active-target {
                animation: actionPulse 1.2s infinite alternate;
                background: rgba(220, 38, 38, 0.15);
            }

            @keyframes actionPulse {
                0% { border-color: #dc2626; transform: skewX(-5deg); }
                50% { border-color: #ef4444; transform: skewX(5deg); }
                100% { border-color: #dc2626; transform: skewX(-5deg); }
            }

            .word-gap.filled {
                border-bottom: none;
                color: #ffffff;
                font-weight: 800;
                background: #dc2626;
                padding: 0 15px;
                border-radius: 10px;
                animation: heroArrival 0.5s ease-out;
            }

            @keyframes heroArrival {
                0% { transform: scale(1.5); opacity: 0; }
                100% { transform: scale(1); opacity: 1; }
            }

            #word-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(24, 24, 27, 0.98);
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
                background: #ffffff;
                color: #18181b;
                padding: 20px 45px;
                font-size: 2.5rem;
                font-weight: 700;
                border-radius: 15px;
                cursor: pointer;
                border: 3px solid #dc2626;
                font-family: 'Outfit', sans-serif;
                transition: 0.2s;
            }

            .choice-btn:hover { background: #dc2626; color: white; transform: translateY(-5px) rotate(-3deg); }
            .choice-btn.wrong { background: #e4e4e7 !important; color: #18181b; border-color: #d1d5db; animation: stumbleshake 0.4s; }

            @keyframes stumbleshake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-15px) rotate(-5deg); }
                75% { transform: translateX(15px) rotate(5deg); }
            }

            .one-shot-label {
                background: #dc2626;
                color: white;
                padding: 5px 30px;
                border-radius: 5px;
                font-size: 1.3rem;
                font-weight: 900;
                display: inline-block;
                margin-bottom: 20px;
                font-family: 'Bangers', cursive;
                transform: rotate(-3deg);
            }
        </style>

        <div id="word-overlay"></div>

        <div class="story-wrapper">
            <center>
                <div class="one-shot-label">HERO IN DISGUISE • STORY 14</div>
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