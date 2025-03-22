// for (let i = 1; i <= 10; i++) {
//     for (let y = 0; y <= 10; y++) {

//         let tot =  i * y

//         console.log(i,' X ',y,'=',tot);
//     }
// }

function tabuada(numero) {
    for (let index = 1; index <= 10; index++) {
        console.log(`${numero} X ${index} = ${numero * index}` ) 
    }
}

tabuada(7)