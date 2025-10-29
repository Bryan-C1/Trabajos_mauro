//9 
function generarFibonacci(N) {

  if (N <= 0) return [];

  if (N === 1) return [0];

  let serie = [0, 1];

  for (let i = 2; i < N; i++) {
    let siguiente = serie[i - 1] + serie[i - 2];
    serie.push(siguiente);
  }

  return serie;
}


console.log(generarFibonacci(5));  
console.log(generarFibonacci(10)); 
