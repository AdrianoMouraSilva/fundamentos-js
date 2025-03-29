let fullName = 'Adriano José do Santos'

let arrName = fullName.split(' ');

console.log("Arr: "+arrName);

let tamArrName = arrName.length;

let primerioName = arrName[0];

let ultimoName = arrName[tamArrName - 1];

console.log(`DE ${fullName} PARA: ${primerioName} ${ultimoName}`);

function handleSaudacao(fullName) {
    let arrName = fullName.split(' ');
    let firstName = arrName[0];
    let lastName = arrName[arrName.length - 1];

    let cont = 0;

    console.log('Remover antes = ' + arrName)

    arrName.forEach((name) => {

        if (name.length <= 2) {
            arrName.splice(cont,1)
        }
        cont++;
    });

    console.log('Remover = ' + arrName)

    return `Bem vindo, ${firstName} ${lastName}`
}

console.log(handleSaudacao(fullName))

const numeros = [1, 2, 3, 4, 5]

numeros.forEach(
    (num) => console.log(num * 10)
)

numeros.map((num) => console.log(num * 10)
)

let newNmeros = numeros.map((num) => num * 10)

console.log(newNmeros);
