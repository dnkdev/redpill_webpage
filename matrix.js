
const main = document.querySelector(".matrix-container");

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

async function startLine(col) {
    let add = document.createElement('span');
    add.textContent += (getRandom(100) > 50) ? "1" 
    : "0";
    
    col.appendChild(add);
}
async function generateMatrixRain() {
    const col = document.createElement('div');
    col.classList.add('matrix');
    col.style.left = getRandom(window.innerWidth-30)+"px";
    main.appendChild(col);

    let interval = setInterval(()=>startLine(col),1000-getRandom(900));
    setTimeout(()=>{
        clearInterval(interval)
        setTimeout(()=>main.removeChild(col),5000)
    },5000)
}

setInterval(()=>generateMatrixRain(),1000);


