(function() {
    const container = document.getElementById('stage-content');
    if (!container) return;

    // اختيار 20 كلمة مستهدفة لقصة الحلاق والمقابلة
    const words = [
        "interview", "professional", "barbershop", "beard", "nervous", 
        "trim", "metal", "nodded", "special", "object", 
        "clippers", "steel", "snip", "superstar", "mirror", 
        "fainted", "zigzag", "neon", "puzzled", "hired"
    ];

    let remainingWords = [...words];
    let currentTargetId = null;

    const storyTitle = "The Wrong Haircut";
    
    // محتوى القصة السابعة عشرة
    let storyContent = `
        Barnaby had an important <span class="word-gap" data-word="interview">?</span> on Monday. 
        He wanted to look <span class="word-gap" data-word="professional">?</span>, so he went to a new <span class="word-gap" data-word="barbershop">?</span>. 
        The barber was a man with a giant <span class="word-gap" data-word="beard">?</span>. 
        Barnaby was <span class="word-gap" data-word="nervous">?</span> because the music was very loud.
        <br><br>
        He asked for a slight <span class="word-gap" data-word="trim">?</span>, but a heavy <span class="word-gap" data-word="metal">?</span> song started playing. 
        The barber <span class="word-gap" data-word="nodded">?</span> and said, "One <span class="word-gap" data-word="special">?</span> coming up!" 
        Before Barnaby could <span class="word-gap" data-word="object">?</span>, the barber started using the electric <span class="word-gap" data-word="clippers">?</span>.
        <br><br>
        Barnaby felt the cold <span class="word-gap" data-word="steel">?</span> and heard the <span class="word-gap" data-word="snip">?</span> of scissors. 
        Later, the barber said, "You look like a <span class="word-gap" data-word="superstar">?</span>!" 
        Barnaby looked in the <span class="word-gap" data-word="mirror">?</span> and nearly <span class="word-gap" data-word="fainted">?</span>. 
        He had a giant <span class="word-gap" data-word="zigzag">?</span> on his head and <span class="word-gap" data-word="neon">?</span> blue hair.
        <br><br>
        The barber looked <span class="word-gap" data-word="puzzled">?</span>; he thought Barnaby said he was in a band! 
        Barnaby wore a hat to the bank, and surprisingly, he was <span class="word-gap" data-word="hired">?</span> because he looked "mysterious."
    `;

    container.innerHTML = ''; 
    container.style.cssText = `height:100%; width:100%; display:block; background:#111827; color:#f3f4f6; overflow-y:auto; padding:0; font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth;`;

    container.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Outfit:wght@400;700&display=swap');
            
            #stage-content::-webkit-scrollbar { width: 10px; }
            #stage-content::-webkit-scrollbar-track { background: #111827; }
            #stage-content::-webkit-scrollbar-thumb { background: #00f2ff; border-radius: 5px; }

            .story-wrapper {
                max-width: 90%;
                margin: 60px auto;
                background: #1f2937;
                padding: 60px;
                border-radius: 20px;
                box-shadow: 0 0 50px rgba(0, 242, 255, 0.1);
                border: 2px solid #374151;
                position: relative;
                overflow: hidden;
            }

            /* تأثير خطوط النيون */
            .story-wrapper::before {
                content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 5px;
                background: linear-gradient(90deg, #00f2ff, #7000ff);
            }

            .story-title {
                color: #00f2ff;
                text-align: center;
                font-size: 4rem;
                font-weight: 400;
                margin-bottom: 50px;
                font-family: 'Righteous', cursive;
                text-transform: uppercase;
                letter-spacing: 2px;
                text-shadow: 3px 3px 0px #7000ff;
            }

            .story-body {
                line-height: 1.9;
                font-size: 2.7rem;
                color: #e5e7eb;
                font-family: 'Outfit', sans-serif;
            }

            .word-gap {
                display: inline-block;
                min-width: 150px;
                border-bottom: 3px solid #7000ff;
                text-align: center;
                color: #00f2ff;
                cursor: pointer;
                transition: 0.3s;
                background: rgba(0, 242, 255, 0.05);
            }

            .word-gap.active-target {
                animation: neonPulse 1s infinite alternate;
            }

            @keyframes neonPulse {
                0% { border-color: #7000ff; box-shadow: 0 0 5px #7000ff; }
                100% { border-color: #00f2ff; box-shadow: 0 0 15px #00f2ff; }
            }

            .word-gap.filled {
                border-bottom: none;
                color: #ffffff;
                font-weight: 700;
                background: linear-gradient(45deg, #7000ff, #00f2ff);
                padding: 0 15px;
                border-radius: 4px;
                animation: snipEffect 0.4s ease-out;
            }

            @keyframes snipEffect {
                0% { transform: scale(0) rotate(-45deg); opacity: 0; }
                100% { transform: scale(1) rotate(0deg); opacity: 1; }
            }

            #word-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(17, 24, 39, 0.98);
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
                background: #1f2937;
                color: #00f2ff;
                padding: 20px 40px;
                font-size: 2.4rem;
                font-weight: 700;
                border-radius: 10px;
                cursor: pointer;
                border: 2px solid #00f2ff;
                font-family: 'Outfit', sans-serif;
                transition: 0.2s;
            }

            .choice-btn:hover { background: #00f2ff; color: #111827; box-shadow: 0 0 20px #00f2ff; transform: translateY(-5px); }
            .choice-btn.wrong { background: #991b1b !important; color: white; border-color: #ef4444; animation: zigzagShake 0.4s; }

            @keyframes zigzagShake {
                0% { transform: translate(0,0); }
                25% { transform: translate(-10px, 10px); }
                50% { transform: translate(10px, -10px); }
                75% { transform: translate(-10px, -10px); }
                100% { transform: translate(0,0); }
            }

            .one-shot-label {
                color: #6b7280;
                font-size: 1.1rem;
                letter-spacing: 8px;
                font-weight: 900;
                margin-bottom: 10px;
                display: block;
                text-transform: uppercase;
            }
        </style>

        <div id="word-overlay"></div>

        <div class="story-wrapper">
            <center>
                <span class="one-shot-label">STYLIST • STORY 17</span>
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