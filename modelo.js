let fullName = 'Adriano José do Santos'

function handleSaudacaoNew(fullName) {
    let arrName = fullName.split(' ');

    let correctArray =  arrName.filter((name)=> name.length > 3)
    

    console.log("Remove:", correctArray);
}

handleSaudacaoNew(fullName)