// this is a js file
// Gabriel Barros

//1. 
//*  a. false
//*  b. false
//*  c. true
//*  d. boolean

//2. resposta
//* falta chamar o método number
//* vai ser impresso os dois numeros um ao lado do outro.

// 3. resposta
let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Number(prompt("Digite outro numero!"));
const soma = primeiroNumero + segundoNumero;
console.log(soma)


//B 1.
let usuario = Number(prompt("Qual a sua idade?"));
let melhorAmigo = Number(prompt("Qual a idade do seu melhor amigo?"));
console.log("Sua idade é maior do que a do seu melhor amigo?", (usuario > melhorAmigo));
console.log(usuario - melhorAmigo);

//B 2.
let numero = Number(prompt("Digite um numero par"));
console.log(numero % 2);

//B 3.

let idade = Number(prompt("Qual a sua idade?"));
let idadeMeses = idade * 12;
let idadeDias = idadeMeses * 30;
let idadeHoras = idadeDias * 24;
console.log(idadeMeses, idadeDias, idadeHoras);
//--------------------------
console.log(idadeMeses);
console.log(idadeDias);
console.log(idadeHoras);

//B 4.
let numeroUm = Number(prompt("Digite um numero"));
let numeroDois = Number(prompt("Digite outro numero"));

console.log("O primeiro numero é maior que segundo?", 
(numeroUm > numeroDois));
console.log("O primeiro numero é igual ao segundo?", 
(numeroUm === numeroDois));
console.log("O primeiro numero é igual ao segundo?", 
Boolean(numeroUm % numeroDois));
console.log("O primeiro numero é igual ao segundo?", 
Boolean(numeroDois % numeroUm));
