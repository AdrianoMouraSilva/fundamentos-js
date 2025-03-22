
function somarNumeros(num_1, num_2){

    return num_1 + num_2;
}

function multiplicarNumeros(num_1, num_2){

    return num_1 * num_2;
}

function retornaPorcentagem(num){
    return num / 100 ;
}


let somar = somarNumeros(1,2)
let multiplicarNumero = multiplicarNumeros(1,2)
let porcentagem = retornaPorcentagem(10)

console.log("Soma ",somar)
console.log("Multiplicar ",multiplicarNumero)
console.log("Porcentagem ",porcentagem)