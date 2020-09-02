//alert('ola mundo!!'); // isto é um comentario

//document.write('<h1>teste</h1>');

//Exercicio 1 parte 1
//var numero = prompt('Digite um numero para validação:');

//numero = parseFloat(numero);

//if(numero > 10){
  //  alert(numero + ' é maior que 10');
//}else if(numero < 10){
  //  alert( numero + ' é menor que 10');
//}else{
  //  alert(numero + ' é igual a 10');
//}

//Exercicio 1 parte 2
//var soma1 = prompt('digite o primeiro numero: ');

//var soma2 = prompt('digite o segundo numero: ');

//var final = parseInt(soma1) + parseInt(soma2)
//alert('valor da soma: ' +  final);

// Exercicio 1 parte 3
var valor1= prompt('Digite um numero: ');

var operacao= prompt('Digite a  operação desejada: *, /, -, + ');

var valor2= prompt('Digite segundo numero: ');

switch (operacao) {
    case '+': operacao = parseInt(valor1) + parseInt(valor2);
       alert('valor da soma: ' +  operacao);
   break;

    case '-': operacao = parseInt(valor1) - parseInt(valor2);
        alert('valor da subtração: ' +  operacao) 
    break;

    case '*': operacao = parseInt(valor1) * parseInt(valor2);
        alert('valor da multiplicação: ' +  operacao)
    break;

   case '/': operacao =  parseInt(valor1) / parseInt(valor2);
        alert('valor da divisão: ' +  operacao)
  break

   default:
       break;
} 

//Exercicio 1 parte 4
var nome= prompt('escreva seu nome: ');

var n= prompt('quantas vezes deve repitir: ');

for (let i = 1; i <= + n;  i++) {
   alert(nome);

} 

