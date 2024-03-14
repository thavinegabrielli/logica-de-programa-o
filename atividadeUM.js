/*
4 - Converta a temperatura x (entrada manual) FAHRENHEIT
 para CELSIUS, Segue a formula 5/9 (°F - 32).

 Nome: thavine
 */
var teclado = require("prompt-sync")();
var fahrenheit = parseFloat(teclado("Digite a temperatura F: "));
var celsius = (5 / 9) * (fahrenheit - 32);
console.log("O valor da convers\u00E3o: ".concat(celsius));
