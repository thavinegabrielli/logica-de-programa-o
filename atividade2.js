/*
2-Faça a média de 10 número (entrada via teclado) e exiba o resultado.
nome: Ludmila
*/
var teclado = require("prompt-sync")();
var nUm = parseFloat(teclado("Digite o primeiro número:"));
var nDois = parseFloat(teclado("Digite o segundo número:"));
var nTres = parseFloat(teclado("Digite o terceiro número:"));
var nQuatro = parseFloat(teclado("Digite o quarto número:"));
var nCinco = parseFloat(teclado("Digite o quinto número:"));
var nSeis = parseFloat(teclado("Digite o Sexto número:"));
var nSete = parseFloat(teclado("Digite o setimo número:"));
var nOito = parseFloat(teclado("Digite o oitavo número:"));
var nNove = parseFloat(teclado("Digite o nono número:"));
var nDez = parseFloat(teclado("Digite o decimo número:"));
var media = (nUm + nDois + nTres + nQuatro + nCinco + nSeis + nSete + nOito + nNove + nDez) / 10;
console.log("Média é ${media}");
