(function() {
    const container = document.getElementById('stage-content');
    if (!container) return;

    // اختيار 20 كلمة مستهدفة لقصة الكلب الذكي
    const words = [
        "genius", "neighbors", "languages", "math", "reporter", 
        "newspaper", "interview", "proud", "garden", "kitchen", 
        "bucket", "fence", "digging", "middle", "warming", 
        "treats", "bark", "trick", "expensive", "thief"
    ];

    let remainingWords = [...words];
    let currentTargetId = null;

    const storyTitle = "The Smartest Dog in the World";
    
    // محتوى القصة التاسعة عشرة
    let storyContent = `
        Mr. Jenkins believed his dog was a <span class="word-gap" data-word="genius">?</span>. 
        He told all his <span class="word-gap" data-word="neighbors">?</span> that Barnaby could understand three <span class="word-gap" data-word="languages">?</span> and solve <span class="word-gap" data-word="math">?</span>. 
        One day, a <span class="word-gap" data-word="reporter">?</span> from the local <span class="word-gap" data-word="newspaper">?</span> came for an <span class="word-gap" data-word="interview">?</span>. 
        Mr. Jenkins was very <span class="word-gap" data-word="proud">?</span> and took her to the <span class="word-gap" data-word="garden">?</span>.
        <br><br>
        He asked Barnaby to go to the <span class="word-gap" data-word="kitchen">?</span> and bring a <span class="word-gap" data-word="bucket">?</span>. 
        Instead, the dog ran to the <span class="word-gap" data-word="fence">?</span> and started <span class="word-gap" data-word="digging">?</span> a hole in the <span class="word-gap" data-word="middle">?</span> of the flowers. 
        "He's just <span class="word-gap" data-word="warming">?</span> up," Mr. Jenkins explained.
        <br><br>
        Next, he used <span class="word-gap" data-word="treats">?</span> to test math, but the dog just let out a loud <span class="word-gap" data-word="bark">?</span> and ate them. 
        For the last <span class="word-gap" data-word="trick">?</span>, Barnaby grabbed the reporter's <span class="word-gap" data-word="expensive">?</span> bag and ran away. 
        "He is not a scientist," she laughed, "but he is a very good <span class="word-gap" data-word="thief">?</span>!"
    `;

    container.innerHTML = ''; 
    container.style.cssText = `height:100%; width:100%; display:block; background:#f0fdf4; color:#166534; overflow-y:auto; padding:0; font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth;`;

    container.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Boogaloo&family=Outfit:wght@400;700&display=swap');
            
            #stage-content::-webkit-scrollbar { width: 10px; }
            #stage-content::-webkit-scrollbar-track { background: #f0fdf4; }
            #stage-content::-webkit-scrollbar-thumb { background: #22c55e; border-radius: 5px; }

            .story-wrapper {
                max-width: 90%;
                margin: 60px auto;
                background: #ffffff;
                padding: 60px;
                border-radius: 40px;
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                border: 3px solid #bbf7d0;
                position: relative;
            }

            .story-title {
                color: #15803d;
                text-align: center;
                font-size: 4.2rem;
                font-weight: 400;
                margin-bottom: 50px;
                font-family: 'Boogaloo', cursive;
                text-transform: uppercase;
                letter-spacing: 2px;
            }

            .story-body {
                line-height: 2;
                font-size: 2.7rem;
                color: #166534;
                font-family: 'Outfit', sans-serif;
            }

            .word-gap {
                display: inline-block;
                min-width: 150px;
                border-bottom: 4px dashed #22c55e;
                text-align: center;
                color: #16a34a;
                cursor: pointer;
                transition: 0.3s;
                background: rgba(34, 197, 94, 0.05);
            }

            .word-gap.active-target {
                animation: dogWag 0.8s infinite;
                background: rgba(34, 197, 94, 0.15);
            }

            @keyframes dogWag {
                0% { transform: rotate(-2deg); }
                50% { transform: rotate(2deg); }
                100% { transform: rotate(-2deg); }
            }

            .word-gap.filled {
                border-bottom: none;
                color: #ffffff;
                font-weight: 800;
                background: #22c55e;
                padding: 0 15px;
                border-radius: 15px;
                animation: pounce 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }

            @keyframes pounce {
                0% { transform: translateY(20px) scale(0.8); opacity: 0; }
                100% { transform: translateY(0) scale(1); opacity: 1; }
            }

            #word-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(21, 128, 61, 0.95);
                display: none;
                flex-wrap: wrap;
                justify-content: center;
                align-content: center;
                gap: 15px;
                padding: 40px;
                z-index: 9999;
                backdrop-filter: blur(10px);
            }

            .choice-btn {
                background: #ffffff;
                color: #15803d;
                padding: 18px 40px;
                font-size: 2.3rem;
                font-weight: 700;
                border-radius: 20px;
                cursor: pointer;
                border: 3px solid #facc15;
                font-family: 'Outfit', sans-serif;
                transition: 0.2s;
            }

            .choice-btn:hover { background: #facc15; transform: scale(1.1) rotate(3deg); }
            .choice-btn.wrong { background: #ef4444 !important; color: white; border-color: #991b1b; animation: shake 0.4s; }

            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }

            .one-shot-label {
                background: #facc15;
                color: #15803d;
                padding: 5px 25px;
                border-radius: 50px;
                font-size: 1.2rem;
                font-weight: 900;
                display: inline-block;
                margin-bottom: 20px;
                box-shadow: 0 4px 0 #ca8a04;
            }
        </style>

        <div id="word-overlay"></div>

        <div class="story-wrapper">
            <center>
                <div class="one-shot-label">BARNABY THE GENIUS • STORY 19</div>
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