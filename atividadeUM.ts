/*
4 - Converta a temperatura x (entrada manual) FAHRENHEIT
 para CELSIUS, Segue a formula 5/9 (°F - 32).

 Nome: thavine
 */

 let teclado = require (`prompt-sync`)();

 let fahrenheit: number = parseFloat(teclado(`Digite a temperatura F: `));
 
 let celsius: number = (5/9) * (fahrenheit - 32);
 
 console.log(`O valor da conversão: ${celsius}`);

 