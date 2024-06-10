/*
Ejercicio 5: Cálculo del Descuento
Descripción: Calcula el precio final de un producto aplicando un descuento basado en su precio inicial.
*/
console.log("--------- Ejercicio 5 ---------");
const price = 70;
let discount = 0;
if (price >= 50 && price <= 100) {
  discount = 0.05;
} else if (price > 100) {
  discount = 0.1;
}

console.log("Descuento del " + discount * 100 + "%");
console.log("Precio final: $" + (price - price * discount));

console.log("-------------------------------");
