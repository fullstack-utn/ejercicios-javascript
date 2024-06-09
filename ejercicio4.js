/*
Ejercicio 4: Operaciones Aritméticas Básicas
Descripción: Realiza operaciones aritméticas básicas y muestra el mayor resultado.
*/

const number1 = 5;
const number2 = 9;
const number3 = 2;

const addition = number1 + number2 + number3;
const subtraction = number1 - number2 - number3;
const multiplication = number1 * number2 * number3;

if (addition > subtraction && addition > multiplication) {
  console.log("El mayor es la suma: " + addition);
}

if (subtraction > addition && subtraction > multiplication) {
  console.log("El mayor es la resta: " + subtraction);
}

if (multiplication > addition && multiplication > subtraction) {
  console.log("El mayor es el producto: " + multiplication);
}
