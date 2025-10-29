//8 

function calcularPotencia(base, exponente) {
  let resultado = 1;
  let i = 0;

  while (i < exponente) {
    resultado *= base; 
    i++;               
  }

  return resultado;
}


console.log(calcularPotencia(2, 3));  
console.log(calcularPotencia(5, 4));  
console.log(calcularPotencia(3, 5));  