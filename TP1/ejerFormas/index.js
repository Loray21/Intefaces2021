let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width= canvas.width;
let height = canvas.height;

for(let i= 0; i<50; i++){
    ctx.fillStyle=randomRgba();
    console.log(randomRgba());
    ctx.beginPath();
    ctx.arc(Math.round(Math.random()*width),Math.round(Math.random()*height),20,0,2* Math.PI);
    ctx.fill();
    console.log("llega");
    ctx.closePath();
}




function randomRgba(){
    let r= Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let a = 255;
    return `rgba(${r},${g},${b},${a})`;
}