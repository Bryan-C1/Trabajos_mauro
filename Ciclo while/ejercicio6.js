//6

let numero = [3, 5, 7, 2, 8, 9, 10]; 
let i = 0;
function darmePares(array){
    while ( i < array.length){
        i++;
        if (array [i] % 2 === 0){
            console.log(array[i]);
        }
    }
}
let arrayNuevo = darmePares(numero);
