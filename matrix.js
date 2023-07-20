
let main = document.querySelector(".matrix-container");
// main.style.setProperty('--matrix-content','"01010"');

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function startLine(col) {
    let add = document.createElement('span');
    add.textContent += (getRandom(100) > 50) ? "1" 
    : "0";
    col.appendChild(add);
    // console.log(self);
}
function generateMatrix() {
    const col = document.createElement('div');
    col.classList.add('matrix');
    let on_width = getRandom(window.innerWidth-30);
    col.style.left = on_width+"px";
    main.appendChild(col);
    // for(i=0;i<10;i++){
    //     startLine(col)
    // }
    let interval = setInterval(()=>startLine(col),1000-getRandom(800));
    setTimeout(()=>{
        //main.removeChild(col)
        //console.log(interval)
        clearInterval(interval)
        setTimeout(()=>main.removeChild(col),5000)
    },5000)
    
    
}
// let rows = Math.floor(window.innerWidth / 14)
// var arr1 = Array.from({length: rows },
//   function(v, k) { 
//     return k; 
//   }
console.log('loaded')
setInterval(()=>generateMatrix(),1000);

