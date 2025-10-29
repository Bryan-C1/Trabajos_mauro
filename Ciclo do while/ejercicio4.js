//4 

let texto = "Valentina";
let i = 0;
let contador = 0;
do {
    if (texto[i] === "a") {
        contador++;
    }
    i++;
} while (i < texto.length)

console.log(contador);