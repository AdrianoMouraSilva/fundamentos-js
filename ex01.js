let produto = 250.00
let descontoPorc = 15
let precoFinal = 0;
let precoFinal2 = 0;

precoFinal =  produto - (produto * 0.15);

console.log("Preço final 1: ", precoFinal);

precoFinal2 = (produto - ((descontoPorc/100) * produto));
console.log("Preço final 2: ", precoFinal2);

// CORREÇÃO
let precoInicialP = 250.00
let descontoP = 15 / 100 || 0.15

console.log("descontoP = ",descontoP);

// 250 * 0.15
let valorDescontoP = precoInicialP *  descontoP

console.log("valorDescontoP = ",valorDescontoP)

let precoFinalP = precoInicialP - valorDescontoP

console.log("Valor da compra R$ ",valorDescontoP, ' com desconto')










