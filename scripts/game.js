const levels = [
            {
                title: 'Level 1 - Basic Target Selection',
                description: 'In this level, there is a single target with ID "target" standing among innocent people. Your task is to select the element by its ID and apply the "hit" class to it without affecting any innocent bystanders. If you hit an innocent, you fail the level. The target is the red person marked with 🎯.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div class="person" style="left: 100px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div id="target" class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div class="person" style="left: 700px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const target = document.getElementById('target');
                        if (target.classList.contains('hit')) {
                            const innocents = document.querySelectorAll('[data-type="innocent"]');
                            let innocentHit = false;
                            innocents.forEach(inn => { if (inn.classList.contains('hit')) innocentHit = true; });
                            return !innocentHit;
                        }
                        return false;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use: document.getElementById("target").classList.add("hit");'
            },
            {
                title: 'Level 2 - Query Selector ID',
                description: 'The street is busier now with more innocents. Select the element by its ID using a query selector and apply the "hit" class to the target. Ensure no innocents are hit; only the target should have the "hit" class. The target is still the red 🎯 among the yellow people.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div class="person" style="left: 50px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div class="person" style="left: 150px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div id="target" class="person target" style="left: 450px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div class="person" style="left: 650px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div class="person" style="left: 750px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const target = document.getElementById('target');
                        if (target.classList.contains('hit')) {
                            const innocents = document.querySelectorAll('[data-type="innocent"]');
                            let innocentHit = false;
                            innocents.forEach(inn => { if (inn.classList.contains('hit')) innocentHit = true; });
                            return !innocentHit;
                        }
                        return false;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use: document.querySelector("#target").classList.add("hit");'
            },
            {
                title: 'Level 3 - Select by Class',
                description: 'The target is now in a crowd and identified by the class "target". Select the element by its class using a query selector and apply the "hit" class. Be careful not to hit the crowd container or any innocents. Only the red 🎯 should fall.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div class="crowd" style="left: 200px; bottom: 0;">
                                         <div class="person" style="left: 0; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                         <div class="person target" style="left: 60px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                         <div class="person" style="left: 120px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       </div>
                                       <div class="person" style="left: 600px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const target = document.querySelector('.target');
                        if (target.classList.contains('hit')) {
                            const innocents = document.querySelectorAll('[data-type="innocent"]');
                            let innocentHit = false;
                            innocents.forEach(inn => { if (inn.classList.contains('hit')) innocentHit = true; });
                            return !innocentHit;
                        }
                        return false;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use: document.querySelector(".target").classList.add("hit");'
            },
            {
                title: 'Level 4 - Select Multiple by Class',
                description: 'There are multiple elements with classes, but only one has "target". Select the element by its class using the method that returns a collection of elements with the given class name, then access the first one and apply "hit". Avoid hitting innocents or the car obstacle. The target is behind the car.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div class="car" style="left: 300px; bottom: 0; width: 150px; height: 80px;"></div>
                                       <div class="person innocent" style="left: 100px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div class="person innocent" style="left: 700px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const target = document.querySelector('.target');
                        if (target.classList.contains('hit')) {
                            const innocents = document.querySelectorAll('[data-type="innocent"]');
                            let innocentHit = false;
                            innocents.forEach(inn => { if (inn.classList.contains('hit')) innocentHit = true; });
                            return !innocentHit;
                        }
                        return false;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use: document.getElementsByClassName("target")[0].classList.add("hit");'
            },
            {
                title: 'Level 5 - Query Selector All',
                description: 'Multiple elements have the "target" class, but only the middle one is the real target (data-type="target"). Select all elements with "target" class using the method that returns a list, then access the second item (index 1) and apply "hit". Do not hit the decoys or innocents.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div class="person decoy" style="left: 100px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div class="person target" style="left: 250px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div class="person target" style="left: 550px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div class="person decoy" style="left: 700px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const targets = document.querySelectorAll('.target');
                        if (targets[1].classList.contains('hit') && !targets[0].classList.contains('hit')) {
                            const innocents = document.querySelectorAll('[data-type="innocent"]');
                            let innocentHit = false;
                            innocents.forEach(inn => { if (inn.classList.contains('hit')) innocentHit = true; });
                            return !innocentHit;
                        }
                        return false;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use: document.querySelectorAll(".target")[1].classList.add("hit");'
            },
            // Levels 6-10: More selection variations
            {
                title: 'Level 6 - Select by Tag',
                description: 'The scene has mixed tags. The target is the first <div> with class "target". Select elements by their tag name "div", access the first one, and apply "hit". Avoid hitting other tags or innocents.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<span class="person" style="left: 100px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></span>
                                       <div class="person target" style="left: 300px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <p class="person" style="left: 500px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></p>
                                       <div class="building" style="left: 600px; bottom: 0; width: 100px; height: 200px;"></div>`;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const target = document.querySelector('.target');
                        if (target.classList.contains('hit')) {
                            const innocents = document.querySelectorAll('[data-type="innocent"]');
                            let innocentHit = false;
                            innocents.forEach(inn => { if (inn.classList.contains('hit')) innocentHit = true; });
                            return !innocentHit;
                        }
                        return false;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use: document.getElementsByTagName("div")[7].classList.add("hit");'
            },
            {
                title: 'Level 7 - Attribute Selector',
                description: 'People have data-id attributes. The target has data-id="target". Select the element using an attribute selector in querySelector and apply "hit". Ignore the tree obstacle and don\'t hit innocents.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div class="person" data-id="1" style="left: 100px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div class="person" data-id="target" style="left: 300px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div class="person" data-id="3" style="left: 500px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div class="person" data-id="4" style="left: 700px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                    // Add tree or something
                                        
                    scene.innerHTML += `<div style="left: 400px; bottom: 0; width: 20px; height: 150px;;">
                                        <div style="position: relative; width: 200px; height: 300px;">
                                        <div style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 40px; height: 150px; background-color: #8b4513; border-radius: 10px;"></div>
                                        <div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 120px; height: 100px; background-color: #228b22; border-radius: 50%;"></div>
                                        <div style="position: absolute; top: 50px; left: 20px; width: 100px; height: 80px; background-color: #228b22; border-radius: 50%;"></div>
                                        <div style="position: absolute; top: 50px; right: 20px; width: 100px; height: 80px; background-color: #228b22; border-radius: 50%;"></div>
                                        <div style="position: absolute; top: 100px; left: 50%; transform: translateX(-50%); width: 140px; height: 100px; background-color: #228b22; border-radius: 50%;"></div>
                                        </div></div>`;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const target = document.querySelector('[data-id="target"]');
                        if (target.classList.contains('hit')) {
                            const innocents = document.querySelectorAll('[data-type="innocent"]');
                            let innocentHit = false;
                            innocents.forEach(inn => { if (inn.classList.contains('hit')) innocentHit = true; });
                            return !innocentHit;
                        }
                        return false;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use: document.querySelector("[data-id=\'target\']").classList.add("hit");'
            },
            {
                title: 'Level 8 - Child Selector',
                description: 'The target is a direct child of #market-stall. Select it using a child combinator in querySelector and apply "hit". Don\'t hit the other children who are innocents.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="market-stall" style="left: 200px; bottom: 0; width: 300px; height: 100px; background: orange; position: absolute;">
                                         <div class="person" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                         <div class="person" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                         <div class="person target" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       </div>`;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const target = document.querySelector('.target');
                        if (target.classList.contains('hit')) {
                            const innocents = document.querySelectorAll('[data-type="innocent"]');
                            let innocentHit = false;
                            innocents.forEach(inn => { if (inn.classList.contains('hit')) innocentHit = true; });
                            return !innocentHit;
                        }
                        return false;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use: document.querySelector("#market-stall> .target").classList.add("hit");'
            },
            {
                title: 'Level 9 - Nth Child',
                description: 'In the queue (#queue), the target is the 4th child. Select it using the :nth-child pseudo-class in querySelector and apply "hit". Ensure only that element is hit, not others in the queue.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="queue" style="left: 100px; bottom: 0; display: flex; position: absolute;">
                                         <div class="person" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                         <div class="person" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                         <div class="person" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                         <div class="person target" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                         <div class="person" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       </div>`;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const target = document.querySelector('.target');
                        if (target.classList.contains('hit')) {
                            const innocents = document.querySelectorAll('[data-type="innocent"]');
                            let innocentHit = false;
                            innocents.forEach(inn => { if (inn.classList.contains('hit')) innocentHit = true; });
                            return !innocentHit;
                        }
                        return false;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use: document.querySelector("#queue >:nth-child(4)").classList.add("hit");'
            },
            {
                title: 'Level 10 - Descendant Selector',
                description: 'The target is deep inside the building (#building). Select it using a descendant combinator in querySelector to find any element with class "target" inside #building and apply "hit". Avoid hitting upper floors\' innocents.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="building" class="building" style="left: 300px; bottom: 0; width: 200px; height: 250px;">
                                         <div class="floor" style="top: 0;"><div class="person" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div></div>
                                         <div class="floor" style="top: 100px;"><div class="room"><div class="person" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div></div></div>
                                         <div class="floor" style="top: 200px;"><div class="room"><div class="person target" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div></div></div>
                                       </div>`;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const target = document.querySelector('.target');
                        if (target.classList.contains('hit')) {
                            const innocents = document.querySelectorAll('[data-type="innocent"]');
                            let innocentHit = false;
                            innocents.forEach(inn => { if (inn.classList.contains('hit')) innocentHit = true; });
                            return !innocentHit;
                        }
                        return false;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use: document.querySelector("#building .target").classList.add("hit");'
            }
        ];

        let currentLevel = 0;
        let score = 0;

        function loadLevel() {
            const level = levels[currentLevel];
            document.getElementById('level-title').textContent = level.title;
            level.setup();
            document.getElementById('code-editor').value = '';
            document.getElementById('feedback').textContent = '';
            document.getElementById('next-level').disabled = true;
            updateProgress();
        }

        function updateProgress() {
            document.getElementById('level-progress').textContent = `Level ${currentLevel + 1} of ${levels.length} | Score: ${score}`;
        }

        document.getElementById('run-code').addEventListener('click', () => {
            const code = document.getElementById('code-editor').value;
            const level = levels[currentLevel];
            const success = level.validate(code);
            if (success) {
                document.getElementById('feedback').textContent = 'Target hit! Great shot!';
                document.getElementById('feedback').style.color = '#4caf50';
                score += 100;
                document.getElementById('next-level').disabled = false;
                updateProgress();
            } else {
                document.getElementById('feedback').textContent = 'Missed or hit innocent! Try again. Hint: ' + level.hint;
            }
        });

        document.getElementById('next-level').addEventListener('click', () => {
            currentLevel++;
            if (currentLevel < levels.length) {
                loadLevel();
            } else {
                alert(`Game Over! Final Score: ${score}`);
            }
        });

        document.getElementById('reset-level').addEventListener('click', () => {
            // Remove hits
            document.querySelectorAll('.hit').forEach(el => el.classList.remove('hit'));
            loadLevel();
        });

        // Initial load
        loadLevel();