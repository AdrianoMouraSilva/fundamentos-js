function contagem(limite) {
    let somaPares = 0;
    let somaImpares = 0;


    for (let i = limite; i >= 0; i--) {
        let resto = i % 2;

        if (resto === 0) {
            somaPares += i;
            console.log("Número ", i, " é par : ");
        } else {
            somaImpares += i;
        }
        // console.log("Número ", i, " é par : "); 
    } return `A Soma de pares é ${somaPares}, e as dos ímpares ${somaImpares}`

    //     console.log("Soma dos numero par :",soma);
    //     console.log("Soma dos numero impar :",soma);
}

console.log(contagem(20));