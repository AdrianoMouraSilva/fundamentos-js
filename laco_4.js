function contagemRegressiva(value) {
    for (let index = value; index >= 0 ; index--) {
       
        if(index === 0){
            return console.log('Feliz ano novo!!!',index) 
        }else{
            console.log(index) 
        }
    }
}

contagemRegressiva(10)