var teclado = require("prompt-sync")();
var idade = 0;
var salario = 0;
var totpessoasNaCondicao = 0;
var pessoasContabilizadas = 0;
while (pessoasContabilizadas <= 4) {
    idade = parseInt(teclado("digite a idade do funcionario: "));
    salario = parseFloat(teclado("digite o salario dos funcionarios: "));
    if (idade < 30 && salario > 3000) {
        totpessoasNaCondicao++;
        pessoasContabilizadas++;
    }
    else {
        pessoasContabilizadas++;
    }
}
console.log("");
console.log("o total de pessoas que atendeu a condi\u00E7\u00E3o \u00E9 ".concat(totpessoasNaCondicao));
