const teclado = require (`prompt-sync`)();

let idade: number = 0;
let salario: number = 0;
let totpessoasNaCondicao: number = 0;
let pessoasContabilizadas: number =0;

while (pessoasContabilizadas <=4){

idade = parseInt(teclado(`digite a idade do funcionario: `));
salario = parseFloat(teclado(`digite o salario dos funcionarios: `));

if (idade < 30 && salario > 3000){
    totpessoasNaCondicao++; 
    pessoasContabilizadas++;
}
else{
    pessoasContabilizadas++;
}
}
console.log(``);
console.log (`o total de pessoas que atendeu a condição é ${totpessoasNaCondicao}`);

