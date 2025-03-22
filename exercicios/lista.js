// # 30 exercícios sobre **Funções em JavaScript**

// **1-10: Funções Aritméticas**

// 1. **Calculadora Simples**

// Crie uma função chamada soma que recebe dois números como parâmetros e retorna a soma deles.
function soma(num_1, num_2) {
    return num_1 + num_2
}

let num_1 = 10
let num_2 = 10

console.log("Soma :", num_1, '+', num_2, '=', soma(num_1, num_2));

// 2. **Desconto do Produto**

// Uma loja quer aplicar descontos automaticamente. Crie uma função calcularDesconto que recebe o preço original de um produto e um percentual de desconto, retornando o preço final.

function calcularDesconto(precoOriginal, percentualDescconto) {
    let porDesconto = percentualDescconto / 100;
    let precoDesconto = precoOriginal * porDesconto;
    let precoFinal = precoOriginal - precoDesconto

    return precoFinal.toFixed(2);
}

let precoOriginal = 100
let percentualDescconto = 20

console.log("Valor sem desconto R$", precoOriginal.toFixed(2), ",com desconto R$", calcularDesconto(precoOriginal, percentualDescconto));

// 3. **Conversor de Temperatura**

// Crie duas funções:

// •	converterCelsiusParaFahrenheit(celsius): recebe um valor em Celsius e retorna o equivalente em Fahrenheit.


function converterCelsiusParaFahrenheit(valCelsius) {
    return (9 * valCelsius / 5) + 32;;
}

let valCelsius = 100;

let convFahrenheit = converterCelsiusParaFahrenheit(valCelsius);

console.log("Celsius :", valCelsius, " é igual Fahrenheit :", convFahrenheit)

// •	converterFahrenheitParaCelsius(fahrenheit): recebe um valor em Fahrenheit e retorna o equivalente em Celsius.


function converterFahrenheitParaCelsius(fahrenheit) {
    return 5 * (fahrenheit - 32) / 9;;
}

let valFahrenheit = 100;

let convCelsius = converterFahrenheitParaCelsius(valFahrenheit);

console.log("Fahrenheit :", valFahrenheit, " é igual Celsius :", convCelsius)


// 4. **Dobro e Metade**

// Crie duas funções:

// •	dobro(n): recebe um número e retorna o dobro dele.
function dobro(numDobro) {
    return numDobro * 2
}

let numDobro = 100;

console.log("Valor ", numDobro, " seu doblo é ", dobro(numDobro));

// •	metade(n): recebe um número e retorna a metade dele.
function metade(numMetade) {
    return numDobro / 2
}

let numMetade = 100;

console.log("Valor ", numMetade, " sua metade é ", metade(numMetade));

// 5. **Média de Notas**

// Crie uma função calcularMedia que recebe três notas de um aluno e retorna a média.
function calcularMedia(nota_1, nota_2, nota_3) {
    return ((nota_1 + nota_2 + nota_3) / 3).toFixed(2)
}

let nota_1 = 5;
let nota_2 = 3;
let nota_3 = 9;


console.log("Nota 1 ", nota_1, ", Nota 2 ", nota_2, ", Nota 3 ", nota_3, " a média ", calcularMedia(nota_1, nota_2, nota_3));

// 6. **Área de um Círculo**

// Crie uma função areaCirculo que recebe o raio de um círculo e retorna sua área. 

// Use a fórmula:

// Área = pi  * raio^2

function areaCirculo(raio) {
    let pi = 3.14;

    return pi * raio ^ 2
}

let raio = 100;

console.log("Área do circulo: ", areaCirculo(raio)), ", com raio ", raio;

// 1. **Verificação de Múltiplo**

// Crie uma função ehMultiplo(de, numero) que retorna true se o numero for múltiplo de de, e false caso contrário.
function ehMultiplo(de, numero) {
    retVal = numero % de

    return retVal == 1 ? 'Não' : 'Sim'
}

let de = 2
let numero = 3

console.log("O número ", numero, "  múltiplo ", ehMultiplo(de, numero));

// 1. **Par ou Ímpar**

// Crie uma função parOuImpar(n) que recebe um número e retorna "Par" se ele for par e "Ímpar" se for ímpar.

function parOuImpar(numero) {
    retVal = numero % de

    return retVal == 1 ? 'Não' : 'Sim'
}


function parOuImpar(numero) {
    retVal = numero % 2

    return retVal == 0 ? 'Par' : 'Ímpar'
}

let numparOuImpar = 3

console.log("O número: ",numero," é ", parOuImpar(numero));

// 9. **Conversor de Moeda**

// Crie uma função converterRealParaDolar(reais, taxa) que recebe um valor em reais e uma taxa de câmbio fixa e retorna o valor convertido para dólar.

function converterRealParaDolar(reais, taxa) {

    return reais * taxa
}

let reais = 3
let taxa = 6

console.log("o valor ",reais.toFixed(2)," convertido para dólar:", (converterRealParaDolar(reais, taxa)).toFixed(2));

// 10. **Valor Final com Taxa**

// Crie uma função calcularValorFinal(valor, taxa) que recebe um valor e uma taxa percentual de serviço e retorna o valor total com a taxa aplicada.

function calcularValorFinal(valor, taxa) {

    return valor + ((taxaPercentual / valor) * 100)
}

let valor = 3
let taxaPercentual  = 6




console.log("O valor ",valor," total com a taxa aplicada:", (calcularValorFinal(valor, taxa)).toFixed(2));

// ---

// **11-20: Funções Condicionais**

// 11. **Maior Número**

// Crie uma função maiorNumero(a, b) que recebe dois números e retorna o maior deles.

function maiorNmero(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function maiorNmeroTernario(a, b) {
    a > b ? a : b
}



// 1. **Idade para Votar**

// Crie uma função podeVotar(idade) que recebe uma idade e retorna "Pode votar" se for 18 anos ou mais, e "Não pode votar" caso contrário.

// 1. **Saudação Personalizada**

// Crie uma função saudacao(nome) que recebe um nome como parâmetro e retorna uma saudação "Olá, [nome]! Bem-vindo(a)!".

function saudacao(nome) {
    return `Olá, ${nome}! Bem-Vindo(a)!`;
}

let nome = "Adriano";
let saudacaoFinal = saudacao(nome);

console.log(saudacaoFinal);
// 1. **Verificador de Acesso**

// Crie uma função verificarLogin(usuario, senha) que verifica se o usuário e senha inseridos correspondem aos valores "admin" e "1234", retornando "Acesso permitido" ou "Acesso negado".

// 1. **Avaliador de Notas**

// Crie uma função verificarAprovacao(nota) que recebe a nota de um aluno e retorna "Aprovado" se for 7 ou mais, "Recuperação" se for entre 5 e 6, e "Reprovado" caso contrário.

// 1. **Calculador de Frete**

// Crie uma função calcularFrete(valorCompra) que verifica se uma compra tem frete grátis para valores acima de R$100.

// 1. **Classificação de Idade**

// Crie uma função classificarIdade(idade) que retorna se uma pessoa é "Criança" (até 12 anos), "Adolescente" (13 a 17 anos), "Adulto" (18 a 59 anos) ou "Idoso" (60 anos ou mais).

// 1. **Triângulo Válido**

// Crie uma função podeSerTriangulo(a, b, c) que recebe três lados e retorna "Forma um triângulo" se atender à condição matemática de existência de um triângulo.

// 1. **Sistema de Desconto Progressivo**

// Crie uma função calcularDescontoProgressivo(valor) que retorna o preço final com descontos:

// • 20% para valores a partir de R$500

// • 15% para valores entre R$300 e R$499

// • 10% para valores abaixo de R$300

// 1. **Verificação de Dias da Semana**

// Crie uma função diaUtil(dia) que recebe um dia da semana e retorna "Fim de semana" se for sábado ou domingo, e "Dia útil" caso contrário.

// ---

// **21-30: Operadores Aritméticos, Comparação e Lógicos**

// 21.	**Índice de Massa Corporal (IMC)**

// Crie uma função calcularIMC(peso, altura) que recebe peso e altura e retorna o índice de massa corporal (IMC).

// 22.	**Conversor de Tempo**

// Crie uma função converterHorasParaMinutos(horas) que recebe um número de horas e retorna o equivalente em minutos.

// 23.	**Conversor de Passos para Metros**

// Crie uma função converterPassosParaMetros(passos) que recebe um número de passos e retorna a distância percorrida em metros. Considere que cada passo tem 0.8 metros.

// 24.	**Cálculo de Tempo de Viagem**

// Crie uma função calcularTempoViagem(distancia, velocidade) que recebe a distância em km e a velocidade média e retorna o tempo estimado da viagem.

// 25.	**Verificação de Plano Fitness**

// Crie uma função verificarPlanoFitness(plano) que recebe um tipo de plano de academia e retorna "Acesso liberado" para "premium" e "vip", e "Acesso restrito" caso contrário.

// 26.	**Cálculo de Calorias Queimadas**

// Crie uma função calcularCalorias(tipoExercicio, tempo) que calcula calorias gastas com base no tipo de exercício:

// •	"corrida": 10 calorias por minuto

// •	"caminhada": 5 calorias por minuto

// •	"ciclismo": 8 calorias por minuto

// 27.	**Classificação de Números Positivos, Negativos ou Neutros**

// Crie uma função classificarNumero(n) que recebe um número e retorna se ele é "Positivo", "Negativo" ou "Neutro".

// 28.	**Cálculo de Preço por Unidade**

// Crie uma função calcularPrecoPorUnidade(precoTotal, quantidade) que recebe o preço total e a quantidade de itens e retorna o preço por unidade.

// 29.	**Verificador de Horário Comercial**

// Crie uma função verificarHorarioComercial(hora) que recebe um horário e retorna "Dentro do horário comercial" se estiver entre 9h e 18h, e "Fora do horário comercial" caso contrário.

// 30.	**Sistema de Recompensas**

// Crie uma função verificarRecompensa(treinosSemana) que recebe o número de treinos feitos na semana e retorna "Prêmio liberado" se for 4 ou mais, e "Continue treinando!" caso contrário.