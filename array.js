const fruits = ['maça', 'uva', 'laranja'];


console.log(fruits);// [ 'maça', 'uva', 'laranja', 'pera' ]

console.table(fruits);
// ┌─────────┬───────────┐
// │ (index) │ Values    │
// ├─────────┼───────────┤
// │ 0       │ 'maça'    │
// │ 1       │ 'uva'     │
// │ 2       │ 'laranja' │
// └─────────┴───────────┘

console.log(fruits.length);

console.log(fruits[0].length);

console.log("Index 0 = ", fruits[0]);
console.log("Index 1 = ", fruits[2]);
console.log("Index 2 = ", fruits[0]);

fruits[3] = 'pera';

// O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
fruits.push('Banana');

console.log(fruits);

// O método pop() remove o último elemento de um array e retorna aquele elemento.
fruits.pop('Banana');

//O método reverse() inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
fruits.reverse();
fruits.reverse();

//O método shift() remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array.
fruits.shift();

console.log(fruits);






console.log("Index = ", fruits);

console.log("Ultimo item do array = ",fruits[fruits.length - 1])

// Criar um array de numeros 0 a 10
const numeros = [1,2,3,4,5,6,7,8,9,10]

// 
console.log('\n');

const fullName = 'Maria Jose dos Santos'

let totFullName = fullName.length //Metodo string - conta caracter

let arrFullName = fullName.split(' ');//Método string fatia pelo espaço vazio

console.log(arrFullName);//Criado um array a partir do nome
console.log(arrFullName[0]);//Primero nome
console.log(arrFullName.length);//Quandtidade de itens
console.log(arrFullName[arrFullName.length - 1]);//Ultimo nome

console.log(`Primeiro nome: ${arrFullName[0]}, ultimo nome: ${arrFullName[arrFullName.length - 1]}`);


// console.log(arrFullName.keys());

console.log(arrFullName.slice(1,2));
console.log(arrFullName.slice(-1));
