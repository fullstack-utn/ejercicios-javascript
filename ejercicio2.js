/*
Ejercicio 2: Calculo del IMC
Descripción: Calcula el Índice de Masa Corporal (IMC) de una persona y clasifica el resultado.
*/

const height = 1.75;
const weight = 80;

const imc = weight / Math.pow(height, 2);
if (imc < 18.5) {
  console.log("bajo peso");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("normal");
} else if (imc >= 25 && imc <= 29.9) {
  console.log("sobrepeso");
} else if (imc >= 30) {
  console.log("obesidad");
}
