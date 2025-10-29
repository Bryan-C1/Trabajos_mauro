// 7 

function sumaCuadrados(Numero) {
  let suma = 0
  let i = 1

  while (i <= Numero) {
    suma += i * i
    i++
   
  }

  return suma
 
}
console.log(sumaCuadrados(4))
console.log(sumaCuadrados(10))