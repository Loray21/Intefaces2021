
let matriz = [];
let Arreglo= [];
let maximo=0;
let maximoFilaPar=0;
let maximoFilaImpar=0;
let promedioFila=0;



for (let i=0 ; i<10; i++){
    matriz[i]=[];
for( let j=0 ; j<10; j++){
    matriz[i][j]= Math.floor(Math.random()*1000)
    if(maximo<matriz[i][j]){
        maximo=matriz[i][j];
    }

    if(isPar(j)){
        if(maximoFilaPar<matriz[i][j]){
                maximoFilaPar= matriz[i][j];

    
}
}
promedioFila+=matriz[i][j];
}
Arreglo.push(promedioFila/10);
promedioFila=0;

}
function isPar(value){
    if (value%2 == 0)
        return true;
    else
        return false;
}

console.log(matriz);
console.log(maximo);
console.log(maximoFilaPar);
console.log(maximoFilaImpar);
console.log(Arreglo);
