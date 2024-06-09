/* 
Ejercicio 1: Conversión de Temperaturas
Descripción: Convierte una temperatura dada en grados Celsius a grados Fahrenheit y determina si la temperatura en Fahrenheit es alta, baja o moderada.
*/
const celsius = 30;
const celsiusToFarenheit = celsius * 1.8 + 32;

if (celsiusToFarenheit > 85) {
  console.log("Temperatura ALTA");
} else if (celsiusToFarenheit < 32) {
  console.log("Temperatura BAJA");
} else {
  console.log("Temperatura MODERADA");
}
