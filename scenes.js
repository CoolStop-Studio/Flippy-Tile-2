const bodyElement = document.getElementById("body")
const startScene = 'start';
const scenes = {
    start: {
        html: `
        <h1 id="title">flippy tile 2</h1>
        <button onclick="switchToScene('levelSelect')">play</button>
        <button onclick="switchToScene('customSelect')">custom level</button>
        <button onclick="switchToScene('options')">options</button>
        `,
        js: ``,
        css: `
        h1 {
            color: red;
        }
        `,
    },
    levelSelect: {
        html: `
        <h1 id="title">select level</h1>
        <div id="buttonsContainer"></div>
        `,
        js: `
        let levels;

        async function loadLevels() {
            const res = await fetch('levels.json');
            const data = await res.json();
            levels = data.levels;

            levels.forEach((e) => {
                const newButton = document.createElement('button');
                newButton.innerHTML = e.name;
                newButton.addEventListener('click', () => switchToScene('game'));
                document.getElementById("buttonsContainer").appendChild(newButton)
            });
        }
          
        loadLevels();

          
        `,
        css: `
        h1 {
            color: blue;
        }
        `,
    },
    game: {
        html: `
        <h1 id="title">play game👍</h1>
        `,
        js: `
        
        

        `,
        css: `
        h1 {
            color: yellow;
        }
        `,
    },
    customSelect: {
        html: `
        <h1 id="title">Custom game</h1>
        <input type="number" placeholder="Width"></input>
        <input type="number" placeholder="Height"></input>
        <input type="number" placeholder="Seed"></input>
        <input type="number" placeholder="colors"></input>

        <button onClick="switchToScene('game')">create</button>
        `,
        js: ``,
        css: `
        h1 {
            color: red;
        }
        `,
    },
    options: {
        html: `
        <h1 id="title">options</h1>
        <input type="color" placeholder="bg color">bg color</input>
        <input type="color" placeholder="bg color">cursor color</input>
        <br/>
        <label>control type</label>
        <select>
            <option>keys</option>
            <option>mouse</option>
            <option>arrows</option>
        </select>
        <br/>
        <button onClick="switchToScene('start')">exit</button>
        `,
        js: `
        document.getElementById("playBtn").addEventListener("click", function() {
            switchToScene('levelSelect');
        });
        `,
        css: `
        h1 {
            color: red;
        }
        `,
    }
}

function switchToScene(scene) {
    if (scenes[scene] !== undefined) {
        const sceneData = scenes[scene];
        
        // Set HTML
        bodyElement.innerHTML = '<main>' + sceneData.html + '</main><style>' + sceneData.css + '</style>';
        
        // Run JS
        eval(sceneData.js); // 👈 runs the code as if it was inline script
    } else {
        console.error('Invalid scene: ' + scene);
    }
}

switchToScene('start')