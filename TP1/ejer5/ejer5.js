let canvas = document.getElementById('canvas');
let ctx= canvas.getContext('2d');
let widht= 500;
let height= 500;

var imageData= ctx.createImageData(widht, height); 

let r= 0;
let g = 0;
let b= 0;
let a = 255;
for(x=0; x<widht; x++){
for(y=0; y<height; y++){
setPixel(imageData,x,y,r,g,b,a);
r=x
g=x;
b=0;

}



}

//una vez que ya recorrio todo y puso todos los colores,
           //le digo al contexto que la coloque , y el 0,0 es donde.
ctx.putImageData(imageData,0,0);


function setPixel(imageData,x,y,r,g,b,a){

index=(x+y*imageData.width)*4//agarro el índice de la matriz // covnieron en matriz
imageData.data[index+0]=r;
imageData.data[index+1]=g;
imageData.data[index+2]=b;
imageData.data[index+3]=a
}
