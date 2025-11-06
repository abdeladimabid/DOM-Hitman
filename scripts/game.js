const levels = [
            {
                title: 'Level 1 - Basic Target Selection',
                description: 'In this level, there is a single target with ID "target" standing among innocent people. Your task is to select the element by its ID and apply the "hit" class to it without affecting any innocent bystanders. If you hit an innocent, you fail the level. The target is the red person marked with 🎯.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div class="person" style="left: 100px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div id="target" class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head" style="display: grid;place-items: center;"><span>🎯</span></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
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
                                       <div id="target" class="person target" style="left: 450px; bottom: 0;" data-type="target"><div class="head" style="display: grid;place-items: center;"><span>🎯</span></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
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
                                         <div class="person target" style="left: 60px; bottom: 0;" data-type="target"><div class="head" style="display: grid;place-items: center;"><span>🎯</span></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
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
                                       <div class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head" style="display: grid;place-items: center;"><span>🎯</span></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
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
                                       <div class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head" style="display: grid;place-items: center;"><span>🎯</span></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
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
                                       <div class="person target" style="left: 300px; bottom: 0;" data-type="target"><div class="head" style="display: grid;place-items: center;"><span>🎯</span></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
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
                                       <div class="person" data-id="target" style="left: 300px; bottom: 0;" data-type="target"><div class="head" style="display: grid;place-items: center;"><span>🎯</span></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
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
                                         <div class="person target" data-type="target"><div class="head" style="display: grid;place-items: center;"><span>🎯</span></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
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
                                         <div class="person target" data-type="target"><div class="head" style="display: grid;place-items: center;"><span>🎯</span></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
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
                                         <div class="floor" style="top: 200px;"><div class="room"><div class="person target" data-type="target"><div class="head" style="display: grid;place-items: center;"><span>🎯</span></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div></div></div>
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
            },
            {
                title: 'Level 11 - Change Style',
                description: 'The scene is foggy. Instead of adding a class, directly modify the style property of the target to set its opacity to 0, making it fade out. Select the target by ID and change only its style, not innocents\'.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.style.backgroundColor = '#bdbdbd'; // Foggy
                    scene.innerHTML = `<div class="person" style="left: 100px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div id="target" class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div class="person" style="left: 700px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const target = document.getElementById('target');
                        const innocents = document.querySelectorAll('[data-type="innocent"]');
                        let innocentChanged = false;
                        innocents.forEach(inn => { if (inn.style.opacity === '0') innocentChanged = true; });
                        return target.style.opacity === '0' && !innocentChanged;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use: document.getElementById("target").style.opacity = "0";'
            },
            {
                title: 'Level 12 - Set Attribute',
                description: 'Night scene. Set a custom data attribute "data-hit" to "true" on the target. Select by ID and use the method to set attributes. Ensure no innocents get this attribute.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.style.backgroundColor = '#303f9f'; // Night
                    scene.innerHTML = `<div class="person" style="left: 100px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div id="target" class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div class="person" style="left: 700px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const target = document.getElementById('target');
                        const innocents = document.querySelectorAll('[data-type="innocent"]');
                        let innocentHit = false;
                        innocents.forEach(inn => { if (inn.getAttribute('data-hit')) innocentHit = true; });
                        return target.getAttribute('data-hit') === 'true' && !innocentHit;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use: document.getElementById("target").setAttribute("data-hit", "true");'
            },
            {
                title: 'Level 13 - Create Element',
                description: 'Shooting range. Create a new element (div) with class "bullet", optionally style it, and append it as a child to the target to simulate a hit. The bullet should appear inside the target.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div class="building" style="left: 0; bottom: 0; width: 800px; height: 100px; background: #ffcc80;"></div>
                                       <div id="target" class="person target" style="left: 400px; bottom: 100px;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const target = document.getElementById('target');
                        return target.querySelector('.bullet') !== null;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Create div.bullet and append to target.'
            },
            {
                title: 'Level 14 - Remove Element',
                description: 'Chase scene. Completely remove the target element from the document so it disappears. Select by ID and use the removal method. Innocents and car should stay.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div class="car moving" style="left: 100px; bottom: 0; width: 150px; height: 80px;"></div>
                                       <div id="target" class="person target" style="left: 300px; bottom: 80px;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div class="person" style="left: 500px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        return document.getElementById('target') === null && document.querySelectorAll('[data-type="innocent"]').length === 1;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use: document.getElementById("target").remove();'
            },
            {
                title: 'Level 15 - Insert Before',
                description: 'Dynamic crowd. Create a new innocent person element (decoy) and insert it immediately before the target in the DOM. Then apply "hit" to the target. The crowd should grow by one, but only target hit.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div class="crowd" style="left: 200px; bottom: 0;">
                                         <div class="person" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                         <div id="target" class="person target" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       </div>`;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const target = document.getElementById('target');
                        if (target.classList.contains('hit') && document.querySelectorAll('.person').length > 2) {
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
                hint: 'Create decoy, insertBefore target, then hit target.'
            },
            {
                title: 'Level 16 - Clone Node',
                description: 'Mirror scene. Make a deep copy of the target element, append the copy to the scene, and apply "hit" only to the copied element. The original remains unhit.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="target" class="person target" style="left: 200px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div style="left: 400px; bottom: 0; width: 5px; height: 300px; background: silver;"></div>`; // Mirror
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const targets = document.querySelectorAll('.target');
                        if (targets.length === 2 && targets[1].classList.contains('hit') && !targets[0].classList.contains('hit')) {
                            return true;
                        }
                        return false;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Clone target, append to scene, hit clone.'
            },
            {
                title: 'Level 17 - Text Content',
                description: 'Labeled scene. Replace the text content of the target with "Hit". Select by ID and change only its text, keeping innocents\' text unchanged.',
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
                        const innocents = document.querySelectorAll('[data-type="innocent"]');
                        let innocentChanged = false;
                        innocents.forEach(inn => { if (inn.textContent === 'Hit') innocentChanged = true; });
                        return target.textContent === 'Hit' && !innocentChanged;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use: document.getElementById("target").textContent = "Hit";'
            },
            {
                title: 'Level 18 - Inner HTML',
                description: 'Complex structure. Append HTML content "<span>Hit</span>" to the inner content of the target. The target should now include this new span.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="target" class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const target = document.getElementById('target');
                        return target.innerHTML.includes('<span>Hit</span>');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use: document.getElementById("target").innerHTML += "<span>Hit</span>";'
            },
            {
                title: 'Level 19 - Parent Node',
                description: 'Target is inside a car. Access the first child of the parent element (#car) and apply "hit" to it.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="car" class="car" style="left: 300px; bottom: 0; width: 150px; height: 80px;">
                                         <div class="person target" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       </div>`;
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const target = document.querySelector('.target');
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use: document.getElementById("car").firstChild.classList.add("hit");'
            },
            {
                title: 'Level 20 - Sibling Node',
                description: 'In the group, the target is the next sibling of the first person element. Select the first person in the group, get its next sibling, and apply "hit". Don\'t hit other siblings.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div class="group" style="left: 300px; bottom: 0;">
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
                hint: 'Use: document.querySelector(".group .person").nextSibling.classList.add("hit");'
            },
            {
                title: 'Level 21 - Add Click Event',
                description: 'Attach a click event listener to the target element. In the handler, apply "hit" to the clicked element. The simulation will trigger a click on the target; ensure innocents aren\'t affected if clicked.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div class="person" style="left: 100px; bottom: 0;" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       <div id="target" class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('#target');
                        target.click();
                        const innocents = document.querySelectorAll('[data-type="innocent"]');
                        let innocentHit = false;
                        innocents.forEach(inn => { if (inn.classList.contains('hit')) innocentHit = true; });
                        return target.classList.contains('hit') && !innocentHit;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add listener to target for click to add "hit".'
            },
            {
                title: 'Level 22 - Event on Scene',
                description: 'Attach a click event listener to the entire scene element. In the handler, check if the clicked element (event target) has the "target" class and apply "hit" only to it. Simulation clicks the target; avoid hitting crowd or innocents.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div class="crowd" style="left: 200px; bottom: 0;">
                                         <div class="person" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                         <div class="person target" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                         <div class="person" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       </div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('.target');
                        target.click();
                        const innocents = document.querySelectorAll('[data-type="innocent"]');
                        let innocentHit = false;
                        innocents.forEach(inn => { if (inn.classList.contains('hit')) innocentHit = true; });
                        return target.classList.contains('hit') && !innocentHit;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add click to scene, check event.target.classList.contains("target").'
            },
            {
                title: 'Level 23 - Mouseover Event',
                description: 'The target is moving. Attach a mouseover event listener to it. In the handler, apply "hit" to the element. Simulation dispatches mouseover on target.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="target" class="person target moving" style="left: 400px; bottom: 150px;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('#target');
                        const event = new MouseEvent('mouseover');
                        target.dispatchEvent(event);
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add mouseover listener to target.'
            },
            {
                title: 'Level 24 - Remove Event Listener',
                description: 'Attach a click event listener to the target to apply "hit", then detach that listener. However, ensure the target gets "hit" directly since the simulation will try to click after detachment.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="target" class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('#target');
                        target.click();
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add listener, remove it, but add "hit" directly.'
            },
            {
                title: 'Level 25 - Event Delegation',
                description: 'Large crowd with nested groups. Attach a click listener to the #crowd element. In the handler, check if the event target has "target" class and apply "hit" to it. Simulation clicks the target.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="crowd" style="left: 100px; bottom: 0;">
                                         <div class="person" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                         <div class="group"><div class="person target" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div></div>
                                         <div class="person" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       </div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('.target');
                        target.click();
                        const innocents = document.querySelectorAll('[data-type="innocent"]');
                        let innocentHit = false;
                        innocents.forEach(inn => { if (inn.classList.contains('hit')) innocentHit = true; });
                        return target.classList.contains('hit') && !innocentHit;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add click to #crowd, check event.target.'
            },
            {
                title: 'Level 26 - Bubbling',
                description: 'Nested groups. Attach a click listener to the scene. In the handler, use the event target to apply "hit" only if its data-type is "target". Simulation clicks target; avoid hitting groups.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div class="outer-group" data-type="group">
                                         <div class="inner-group" data-type="group">
                                           <div class="person target" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                         </div>
                                       </div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('.target');
                        target.click();
                        let groupHit = false;
                        document.querySelectorAll('[data-type="group"]').forEach(g => { if (g.classList.contains('hit')) groupHit = true; });
                        return target.classList.contains('hit') && !groupHit;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use event.target in listener on scene.'
            },
            {
                title: 'Level 27 - Stop Propagation',
                description: 'Target holds a hostage (child element). Attach a click listener to the target, stop the event from bubbling in the handler, and apply "hit" to the listener\'s element. Simulation clicks the hostage; it should bubble to hit only the target.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div>
                                         <div class="person hostage" style="left: 10px; top: -20px;" data-type="hostage"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       </div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const hostage = document.querySelector('.hostage');
                        hostage.click();
                        const target = document.querySelector('.target');
                        return target.classList.contains('hit') && !hostage.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add listener to target, event.stopPropagation().'
            },
            {
                title: 'Level 28 - Prevent Default',
                description: 'Target is a link <a>. Attach a click listener, prevent the default action (navigation), and apply "hit". Simulation clicks and checks if default was prevented.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<a href="#" class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></a>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('.target');
                        const event = new MouseEvent('click', {bubbles: true, cancelable: true});
                        const dispatched = target.dispatchEvent(event);
                        return target.classList.contains('hit') && !dispatched; // prevented if false
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add click, event.preventDefault(), add "hit".'
            },
            {
                title: 'Level 29 - Custom Event',
                description: 'Attach a custom event listener named "snipe" to the target that applies "hit". Then create a new custom event "snipe" and dispatch it on the target.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="target" class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('#target');
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add "snipe" listener, dispatch new Event("snipe").'
            },
            {
                title: 'Level 30 - Multiple Events',
                description: 'Attach a mouseover listener to change the background color to "black", and a click listener to apply "hit". Simulation triggers both; target should reflect both changes.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="target" class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('#target');
                        target.dispatchEvent(new MouseEvent('mouseover'));
                        target.click();
                        return target.classList.contains('hit') && target.style.backgroundColor === 'black';
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add two listeners: mouseover change style, click add "hit".'
            },
            {
                title: 'Level 31 - Capturing Phase',
                description: 'Nested elements. Attach a click listener to the outer element in capture phase, check the event target, and apply "hit" if it\'s the target. Simulation clicks target.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div class="outer" style="left: 300px; bottom: 0; width: 200px; height: 200px; background: gray;">
                                         <div class="inner" style="width: 100px; height: 100px; background: lightgray;">
                                           <div class="person target" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                         </div>
                                       </div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('.target');
                        target.click();
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add listener to outer with {capture: true}.'
            },
            {
                title: 'Level 32 - Event Target vs CurrentTarget',
                description: 'Group with target. Attach click to the group element. In the handler, use the event\'s target for the clicked element and currentTarget for the attached element to apply "hit" only if the target is the person with "target" class.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div class="group" style="left: 300px; bottom: 0;">
                                         <div class="person" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                         <div class="person target" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       </div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('.target');
                        target.click();
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use event.target and currentTarget wisely.'
            },
            {
                title: 'Level 33 - Keyboard Event',
                description: 'Attach a keydown event listener to the document. Check if the pressed key is "s" and apply "hit" to the target. Simulation presses "s".',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="target" class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                    // Note: Validate will dispatch keydown
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('#target');
                        const event = new KeyboardEvent('keydown', {key: 's'});
                        document.dispatchEvent(event);
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add keydown to document, if event.key === "s" hit target.'
            },
            {
                title: 'Level 34 - Focus Event',
                description: 'Target is focusable. Attach a focus event listener to the target to apply "hit" when it gains focus. Simulation focuses it.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="target" class="person target" tabindex="0" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('#target');
                        target.focus();
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add focus listener to target.'
            },
            {
                title: 'Level 35 - Resize Event',
                description: 'Attach a resize event listener to the window to apply "hit" to the target when the window resizes. Simulation triggers resize.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="target" class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const event = new Event('resize');
                        window.dispatchEvent(event);
                        const target = document.querySelector('#target');
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add resize to window.'
            },
            {
                title: 'Level 36 - Scroll Event',
                description: 'Scene has overflow. Attach a scroll event listener to the scene element to apply "hit" to the target when scrolled. Simulation triggers scroll.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.style.overflow = 'auto';
                    scene.innerHTML = `<div style="height: 600px;">
                                         <div id="target" class="person target" style="top: 400px;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       </div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const event = new Event('scroll');
                        document.getElementById('scene').dispatchEvent(event);
                        const target = document.querySelector('#target');
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add scroll to scene.'
            },
            {
                title: 'Level 37 - Once Event',
                description: 'Attach a click listener to the target with the option to fire only once, applying "hit". Simulation clicks twice; it should hit only on the first.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="target" class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('#target');
                        target.click();
                        target.click(); // Should only hit once
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add click with {once: true}.'
            },
            {
                title: 'Level 38 - Passive Listener',
                description: 'Attach a click listener to the target with passive option true, applying "hit". Simulation clicks.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="target" class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('#target');
                        target.click();
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add click with {passive: true}.'
            },
            {
                title: 'Level 39 - Event Composition',
                description: 'Attach mouseover and click listeners to the target. Use variables or flags to ensure "hit" is applied only after both events occur. Simulation triggers both.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="target" class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('#target');
                        target.dispatchEvent(new MouseEvent('mouseover'));
                        target.click();
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Require both mouseover and click.'
            },
            {
                title: 'Level 40 - Dynamic Event Addition',
                description: 'Scene is empty. Create a new person element with "target" class, attach a click listener to apply "hit", then append it to the scene. Simulation will click the created element.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = ``; // Empty, code creates target
                },
                validate: (code) => {
                    try {
                        eval(code);
                        const target = document.querySelector('.target');
                        if (target) {
                            target.click();
                            return target.classList.contains('hit');
                        }
                        return false;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Create target, add listener, append to scene.'
            },
            {
                title: 'Level 41 - Combined Selection and Event',
                description: 'Complex building. Select the target element on the second floor using appropriate query, attach a click listener to apply "hit". Simulation clicks it; avoid affecting innocents.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div class="building" style="left: 200px; bottom: 0; width: 400px; height: 250px;">
                                         <div class="floor"><div class="person" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div></div>
                                         <div class="floor"><div class="person target" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div></div>
                                       </div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('.target');
                        target.click();
                        const innocents = document.querySelectorAll('[data-type="innocent"]');
                        let innocentHit = false;
                        innocents.forEach(inn => { if (inn.classList.contains('hit')) innocentHit = true; });
                        return target.classList.contains('hit') && !innocentHit;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Select target, add click listener.'
            },
            {
                title: 'Level 42 - Mutation Observer',
                description: 'Empty scene. Set up an observer on the scene to watch for added children. When an element with "target" class is added, apply "hit" to it. Simulation adds the target.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = ``;
                    // In validate, add target after
                },
                validate: (code) => {
                    try {
                        let scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        scene = document.getElementById('scene');
                        eval(code);
                        eval(code);
                        const target = document.createElement('div');
                        target.classList.add('person', 'target');
                        target.dataset.type = 'target';
                        target.innerHTML = '<div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div>';
                        scene.appendChild(target);
                        setTimeout(() => {
                            console.log(target.classList.contains('hit'));
                            
                            return target.classList.contains('hit');
                        }, 0);
                        
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Observe scene for childList, hit added target.'
            },
            {
                title: 'Level 43 - Drag Event',
                description: 'Target is draggable. Attach a dragstart event listener to apply "hit" when drag starts. Simulation triggers dragstart.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="target" class="person target" draggable="true" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('#target');
                        const event = new DragEvent('dragstart');
                        target.dispatchEvent(event);
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add dragstart listener.'
            },
            {
                title: 'Level 44 - Touch Event',
                description: 'Attach a touchstart event listener to the target to apply "hit" on touch. Simulation triggers touchstart.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="target" class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('#target');
                        const event = new TouchEvent('touchstart', {touches: [{}]});
                        target.dispatchEvent(event);
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add touchstart listener.'
            },
            {
                title: 'Level 45 - Animation End Event',
                description: 'Target is animating. Attach an animationend event listener to apply "hit" when animation ends. Simulation triggers animationend.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="target" class="person target moving" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('#target');
                        const event = new Event('animationend');
                        target.dispatchEvent(event);
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add animationend listener.'
            },
            {
                title: 'Level 46 - Transition End',
                description: 'Target has a transition. Attach a transitionend event listener to apply "hit" when transition ends. Simulation triggers transitionend.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="target" class="person target" style="left: 400px; bottom: 0; transition: transform 1s;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('#target');
                        const event = new Event('transitionend');
                        target.dispatchEvent(event);
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add transitionend listener.'
            },
            {
                title: 'Level 47 - Wheel Event',
                description: 'Attach a wheel event listener to the target to apply "hit" on mouse wheel action. Simulation triggers wheel.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="target" class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('#target');
                        const event = new WheelEvent('wheel');
                        target.dispatchEvent(event);
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add wheel listener.'
            },
            {
                title: 'Level 48 - Pointer Event',
                description: 'Attach a pointerdown event listener to the target to apply "hit" on pointer down. Simulation triggers pointerdown.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div id="target" class="person target" style="left: 400px; bottom: 0;" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('#target');
                        const event = new PointerEvent('pointerdown');
                        target.dispatchEvent(event);
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add pointerdown listener.'
            },
            {
                title: 'Level 49 - Input Event',
                description: 'Target is an input field. Attach an input event listener to apply "hit" when input changes. Simulation triggers input.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<input id="target" type="text" class="target" style="left: 400px; bottom: 0; position: absolute;" data-type="target">`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('#target');
                        const event = new Event('input');
                        target.dispatchEvent(event);
                        return target.classList.contains('hit');
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Add input listener to target.'
            },
            {
                title: 'Level 50 - Advanced Combination',
                description: 'Final boss. Attach event delegation for click on the boss-room, optionally stop propagation, select the moving target element, and apply "hit" only to it. Avoid the minion and hostage. Simulation clicks the target.',
                setup: () => {
                    const scene = document.getElementById('scene');
                    scene.innerHTML = `<div class="boss-room" style="left: 100px; bottom: 0; width: 600px; height: 250px; background: darkred;">
                                         <div class="person minion" data-type="innocent"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                         <div class="target-container"><div class="person target moving" data-type="target"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div></div>
                                         <div class="person hostage" data-type="hostage"><div class="head"></div><div class="body"></div><div class="legs"></div><div class="arms"></div></div>
                                       </div>`;
                },
                validate: (code) => {
                    try {
                        const scene = document.getElementById('scene');
                        scene.replaceWith(scene.cloneNode(true));
                        eval(code);
                        const target = document.querySelector('.target');
                        target.click();
                        const innocents = document.querySelectorAll('[data-type="innocent"], [data-type="hostage"]');
                        let innocentHit = false;
                        innocents.forEach(inn => { if (inn.classList.contains('hit')) innocentHit = true; });
                        return target.classList.contains('hit') && !innocentHit;
                    } catch (e) {
                        return false;
                    }
                },
                hint: 'Use advanced selection, event delegation, stop propagation.'
            }
        ];

        let currentLevel = localStorage.getItem('currentLevel') ? parseInt(localStorage.getItem('currentLevel')) : 0;
        let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
        let hinted = false;
        

        function loadLevel() {
            const level = levels[currentLevel];
            document.getElementById('hint-area').textContent = '';
            hinted=false;
            document.getElementById('next-level').style.display = 'none';
            document.getElementById('level-title').textContent = level.title;
            document.getElementById('level-desc').textContent = level.description;
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
                document.getElementById('next-level').style.display = 'block';
                updateProgress();
            } else {
                document.getElementById('feedback').textContent = 'Missed or hit innocent! Try again. Hint: ';
            }
        });

        document.getElementById('show-solution').addEventListener('click', () => {
            if(!hinted){ score-=200;}
            const hint = levels[currentLevel].hint;
            document.getElementById('hint-area').textContent = 'Hint: ' + hint;
            hinted=true;
        });

        document.getElementById('next-level').addEventListener('click', () => {
            currentLevel++;
            localStorage.setItem('currentLevel', currentLevel);
            localStorage.setItem('score', score);
            if (currentLevel < levels.length) {
                loadLevel();
            } else {
                alert(`Game Over! Final Score: ${score}`);
            }
        });

        document.getElementById('reset-level').addEventListener('click', () => {
            document.querySelectorAll('.hit').forEach(el => el.classList.remove('hit'));
            loadLevel();
        });

        // Initial load
        loadLevel();