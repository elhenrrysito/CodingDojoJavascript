// Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).

function sigma(num) {
  var sum = 0;
  var sumaString = '';
  for(var i = 1; i <= num; i++) {
    sumaString = (`${i} +`);
    sum+=i;
  }
  console.log(sumaString);
  return sum;
}

console.log('--- SIGMA ---');
console.log(sigma(3));
