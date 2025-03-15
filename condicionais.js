let nota = 10;

// if (nota === 10) {
//     return console.log('Excelente')
// } else if (nota >= 7) {
//     return console.log('Aprovado')
// } else if (nota >= 4) {
//     return console.log('Recuperação')
// } else {
//     return console.log('Reprovado')
// }


switch (nota) {
    case nota === 10:
        return console.log('Excelente!')
    // break;

    case nota >= 7:
        console.log('Aprova!')
        break;

    case nota >= 4:
        return console.log('Aprova!')
    // break;

    default:
        console.log('Reprovado!')

        break;
}