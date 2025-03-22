let totCompra = 201
let desconto = 0;
let totCompraDesconto = 0;

let descontoPorc = 0;

function frmBr(val) {
    return val.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function valorDesconto(valDesconto) {
    totCompraDesconto = ((valDesconto / 100) * totCompra);
    totValPago = frmBr(totCompra - totCompraDesconto);
    return console.log('Desconto de ', valDesconto, '%, e o valor do desconto é ', totCompraDesconto, ', Valor ser pago é : ', totValPago)
}

if (totCompra > 1000) {
    descontoPorc = 30;

    valorDesconto(descontoPorc)
    // totCompraDesconto = ((descontoPorc / 100) * totCompra);
    // totValPago = frmBr(totCompra - totCompraDesconto);
    // return console.log ('Desconto de ',descontoPorc, '%, e o valor do desconto é ',totCompraDesconto, ', Valor ser pago é : ',totValPago)
} else if (totCompra >= 500) {
    descontoPorc = 20;
    valorDesconto(descontoPorc)
    // totCompraDesconto = ((descontoPorc / 100) * totCompra);
    // totValPago = frmBr(totCompra - totCompraDesconto);
    // return console.log ('Desconto de ',descontoPorc, '%, e o valor do desconto é R$',totCompraDesconto, ', Valor ser pago é : R$',totValPago)
} else if (totCompra > 200) {
    descontoPorc = 10;
    valorDesconto(descontoPorc);
    // totCompraDesconto = ((descontoPorc / 100) * totCompra);
    // totValPago = frmBr(totCompra - totCompraDesconto);
    // return console.log ('Desconto de ',descontoPorc, '%, e o valor do desconto é R$',totCompraDesconto, ', Valor ser pago é : R$',totValPago)
} else {
    descontoPorc = 0;
    valorDesconto(descontoPorc)
    // totCompraDesconto = ((descontoPorc / 100) * totCompra);
    // totValPago = frmBr(totCompra - totCompraDesconto);
    // return console.log ('Desconto de ',descontoPorc, '%, e o valor do desconto é R$',totCompraDesconto, ', Valor ser pago é : R$',totValPago)
}




switch (totCompra) {
    case totCompra > 1000:
        descontoPorc = 30;
        valorDesconto(descontoPorc)
        break;
    case totCompra >= 500:
        descontoPorc = 20;
        valorDesconto(descontoPorc)
        break;
    case totCompra > 200:
        descontoPorc = 10;
        valorDesconto(descontoPorc)
        break;
    default:
        valorDesconto(descontoPorc)
        break;
}

