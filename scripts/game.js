const levels = [
            {
                title: 'Level 1 - Basic Target Selection',
                description: 'Select the target using getElementById and add the "hit" class to it.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `
                        <div class="person" style="left: 100px; bottom: 0;" data-type="innocent">👤</div>
                        <div id="target" class="person target" style="left: 400px; bottom: 0;" data-type="target">🎯</div>
                        <div class="person" style="left: 700px; bottom: 0;" data-type="innocent">👤</div>
                    `;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const target = document.getElementById('target');
                        if (target.classList.contains('hit')) {
                            const innocents = document.querySelectorAll('[data-type="innocent"]');
                            let innocentHit = false;
                            innocents.forEach(inn => {
                                if (inn.classList.contains('hit')) innocentHit = true;
                            });
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
                title: 'Level 2 - Query Selector Precision',
                description: 'The target is in a crowd. Use querySelector to hit only the target with class "target".',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `
                        <div class="crowd" style="position: absolute; left: 300px; bottom: 0;">
                            <div class="person" data-type="innocent">👤</div>
                            <div class="person target" data-type="target">🎯</div>
                            <div class="person" data-type="innocent">👤</div>
                        </div>
                    `;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const target = document.querySelector('.target');
                        if (target.classList.contains('hit')) {
                            const innocents = document.querySelectorAll('[data-type="innocent"]');
                            let innocentHit = false;
                            innocents.forEach(inn => {
                                if (inn.classList.contains('hit')) innocentHit = true;
                            });
                            return !innocentHit;
                        }
                        return false;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use: document.querySelector(".target").classList.add("hit"); Don\'t select the whole crowd!'
            },
            {
                title: 'Level 3 - Event Bubbling Basics',
                description: 'Click events bubble up. Add a click listener to the scene, but hit only the target. Use event.target.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `
                        <div class="person" style="left: 100px; bottom: 0;" data-type="innocent">👤</div>
                        <div class="group" style="position: absolute; left: 300px; bottom: 0;" data-type="group">
                            <div class="person target" data-type="target">🎯</div>
                        </div>
                        <div class="person" style="left: 600px; bottom: 0;" data-type="innocent">👤</div>
                    `;
                },
                validate: (code) => {
                    try {
                        // Reset listeners
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true)); // Remove old listeners
                        eval(code);
                        // Simulate click on target
                        const target = document.querySelector('[data-type="target"]');
                        target.click();
                        return target.classList.contains('hit') && !document.querySelector('[data-type="group"]').classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add listener to scene: document.getElementById("scene").addEventListener("click", (event) => { if (event.target.dataset.type === "target") event.target.classList.add("hit"); });'
            },
            {
                title: 'Level 4 - Stop Propagation',
                description: 'Target holds a hostage. Stop event propagation to avoid hitting the hostage.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `
                        <div class="person target" style="left: 400px; bottom: 0;" data-type="target">🎯
                            <div class="person hostage" style="width: 40px; height: 80px; top: -20px; left: 5px;" data-type="hostage">🙎</div>
                        </div>
                    `;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const hostage = document.querySelector('[data-type="hostage"]');
                        hostage.click(); // Click on hostage, which bubbles to target
                        const target = document.querySelector('[data-type="target"]');
                        return !hostage.classList.contains('hit') && target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add listener to target and stop propagation: document.querySelector(".target").addEventListener("click", (event) => { event.stopPropagation(); event.currentTarget.classList.add("hit"); }); Then add a listener to hostage if needed, but prevent hit.'
            },
            {
                title: 'Level 5 - Advanced DOM Traversal',
                description: 'Navigate the DOM to find and hit the hidden target without affecting siblings.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `
                        <div class="building" style="position: absolute; left: 200px; bottom: 0; width: 200px; height: 200px; background: #795548;">
                            <div class="floor">
                                <div class="person" data-type="innocent">👤</div>
                            </div>
                            <div class="floor">
                                <div class="person target" data-type="target">🎯</div>
                            </div>
                            <div class="floor">
                                <div class="person" data-type="innocent">👤</div>
                            </div>
                        </div>
                    `;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const target = document.querySelector('[data-type="target"]');
                        if (target.classList.contains('hit')) {
                            const innocents = document.querySelectorAll('[data-type="innocent"]');
                            let innocentHit = false;
                            innocents.forEach(inn => {
                                if (inn.classList.contains('hit')) innocentHit = true;
                            });
                            return !innocentHit;
                        }
                        return false;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use: document.querySelector(".building").children[1].querySelector(".person").classList.add("hit");'
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