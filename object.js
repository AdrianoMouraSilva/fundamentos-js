const webSite = {
    name: 'code trouble',
    since: 2024,
    description: 'Site de dev para dev.'
}

// console.log(webSite.name, '\n', webSite.since);
// console.log(webSite.since);
// console.log(webSite.description);

const webSiteArr = [{
    name: 'code trouble',
    since: 2024,
    description: 'Site de dev para dev.'
},
{
    name: 'Meu site',
    since: 2019,
    description: 'Site local.'
}]

// webSiteArr.forEach(element => {
//     console.log(webSiteArr.name);
// });

// console.log(webSiteArr[1].name);


const clinet = {
    name: 'Adriano',
    cpf: 32663810843,
    plone: 11998507816,
    age: 39
}



// console.log(clinet.plone);

clinet.plone = '1141427744'

// console.log(clinet.plone)

clinet.email = 'adr@mail.com'

// console.log(clinet.email)

const client = {
    name: 'Adriano',
    cpf: 32663810843,
    plone: 11998507816,
    age: 39,
    dateBirthday: '07/10/1985',
    dtBirthday: 1985
}

function saudacao(name) {
    return (name);
}

function idadePorNascimento(dataNascimento) {
    const dataAtual = new Date();
    const dataNascimentoObj = new Date(dataNascimento);

    // Calcula a diferença em milissegundos
    const diferencaEmMilissegundos = dataAtual.getTime() - dataNascimentoObj.getTime();

    // Converte para anos
    const idade = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 365.25));

    return idade;
}

const handleCorrectAge = (name, dtBirthday) => {
    let dt = new Date();
    let result = dt.getFullYear() - dtBirthday;
    return (`Olá, ${name}, você está com ${result} anos de idade`)
}

console.log(handleCorrectAge(clinet.name, clinet.dtBirthday));

function handleCorrectAge_2(params) {

}

console.log('Nome do cliente :', saudacao(client.name));

console.log("Sua idade é :", idadePorNascimento(client.dateBirthday));

// ANTIGO
setTimeout(function () {
    console.log('Estou aqui!!!')
}, 2000);

// NOVO
setTimeout(() => {
    console.log('Estou aqui')
}, 3000);


console.log(new Date);

const today = new Date;

console.log(today.getDate());

console.log(today.getTime());

const product = {
    name: 'Tv Samsung 42',
    category: 'eletronic',
    price: 1669.99,
    feedback: [
        {
            clientName: 'Marilsa',
            message: 'Entrega rápida e funcional.'

        },
        {
            clientName: 'Paulo Silva',
            message: 'Pessimo produto, num compensa.'
        }
    ]
}


// DESERTRUTURAÇÃO
const { price,feedback } = product;

console.log(product.price,'Manipulação de obj simples');
console.log(price,'Manipulação de obj em desestruturação');

console.log(feedback[1].clientName);
console.log(product.feedback[1].clientName);