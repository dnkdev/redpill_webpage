
const main = document.querySelector(".matrix-container");

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

async function startLine(col) {
    if (col.children.length <= 40) {
        let add = document.createElement('span');
        add.textContent += (Math.random() > 0.5) ? "0" 
        : "1";
        col.appendChild(add);
    }
}
async function generateMatrixRain() {
    const col = document.createElement('div');
    col.classList.add('matrix');
    let w = Math.random() * window.innerWidth;//getRandom(window.innerWidth);
    if (w > 50.0){
        w = w - 10.0;
    }
    col.style.left = w+"px";
    main.appendChild(col);

    let interval = setInterval(async ()=>startLine(col),900-getRandom(800));
    setTimeout(()=>{
        clearInterval(interval)
        setTimeout(()=>main.removeChild(col),5000)
    },5000)
}

setInterval(async ()=>generateMatrixRain(),1000);


