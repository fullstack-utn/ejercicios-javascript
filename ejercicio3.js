/*
Ejercicio 3: Determinación de Números Primos
Descripción: Determina si un número entero es primo.
*/
const number = 69;
let isPrime = true;
if (number !== 1) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
    }
  }
} else {
  isPrime = false;
}

if (isPrime) {
  console.log("Es primo");
} else {
  console.log("No es primo");
}
