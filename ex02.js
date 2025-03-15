let compra = 400
let descontoPorc = 20
let regraDesconta = 500
let precoFinal = 0;
let precoFinal2 = 0;

let valorDesconto = ((descontoPorc / 100) * compra);

// IF/ELSE--INICIO
if (compra > regraDesconta) {
    precoFinal = (compra - valorDesconto);
} else {
    valorDesconto = 0;
    precoFinal = compra;
}
console.log("IF: Preço Início : ", compra, ' Preço final: ', precoFinal, ' Desconto aplicado: ', valorDesconto);
// IF/ELSE--FIM

// TERNARIO--INICIO
precoFinal2 = compra > regraDesconta ? (compra - valorDesconto) : compra;

console.log("TERNARIO: Preço Início : ", compra, ' Preço final: ', precoFinal, ' Desconto aplicado: ', valorDesconto);
// TERNARIO--FIM

switch (compra > regraDesconta) {
    case true:
        precoFinal = (compra - valorDesconto);

        console.log("CASE: Preço Início : ", compra, ' Preço final: ', precoFinal, ' Desconto aplicado: ', valorDesconto);
        break;
    case false:
        valorDesconto = 0;
        precoFinal = compra;

        console.log("CASE: Preço Início : ", compra, ' Preço final: ', precoFinal, ' Desconto aplicado: ', valorDesconto);
}

// CORREÇÃO
let compraP = 600.00;
let compraMinimaP = 500.00;
let descontoP = 20 / 100 || 0.20

let elegivelP = compraMinimaP < compraP
let elegivelAoContrarioP = compraMinimaP < compraP

console.log(elegivelP);

// CONDIÇÃO IF/ELSE
if (compraMinimaP <= compraP) {
    // return console.log('Você é elegivel ao desconto!',(compraP * descontoP), ' Valor da compra com desconto: ',compraP - (compraP * descontoP));
    return console.log('Você vai ganhar de desconto: ',(compraP * descontoP), ' Valor da compra com desconto: ',compraP - (compraP * descontoP));
} else {
    return console.log('Para ganhar o desconto falta ', compraMinimaP - compraP);
    // return console.log('Você não é elegivel ao desconto! Gaste mais!!! ', compraMinimaP - compraP);
}

//TERNÁRIO
compraP >= compraMinimaP ? console.log('Você vai ganhar de desconto: ',(compraP * descontoP), ' Valor da compra com desconto: ',compraP - (compraP * descontoP))
: console.log('Para ganhar o desconto falta ', compraMinimaP - compraP)

//Sonar Qube











