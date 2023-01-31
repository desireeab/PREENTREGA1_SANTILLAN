//Presentación//
let nameUser= prompt(`Decinos tu nombre`)

//Pedido de información de la mascota//
let nameCat= prompt (`Hola ${nameUser}, ¿Cómo se llama tu michi?`)

let ageCat= prompt (`¿Cuántos meses tiene ${nameCat}?`)
    while (isNaN(ageCat)){
        alert ("Ingresá un valor numérico.")
        ageCat= prompt (`¿Cuántos meses tiene ${nameCat}?`)
    }

//Cálculo para determinar si puede acceder al servicio//
if (ageCat >= 4){
    alert (`Genial ${nameUser}, ${nameCat} puede castrarse!`)
} else{
    alert (`Lo lamentamos ${nameUser}, ${nameCat} todavía no puede castrarse.`)
    Esc;
}

//Pedido de más información de la mascota//
let genderCat= prompt (`¿${nameCat} es macho o hembra?`)

//Cálculo para determinar cuánto sale la castración acorde al sexo de la mascota//
if (genderCat == "hembra"){
    genderCat = 2;
    (genderCat)
} else if (genderCat == "macho"){
    genderCat = 1.5;
} 
else {
    alert (`Palabras válidas: macho/hembra`);
    Esc;
}

//Determino costo base//
const cost= 1000

//Pedido de más información de la mascota para sumar al costo final acorde al peso de la mascota//
let weightCat= parseInt (prompt (`¿Cuántos kilos pesa ${nameCat}?`))
while (isNaN(weightCat)){
    alert ("Ingresá un valor numérico.")
    weightCat= prompt (`¿Cuántos kilos pesa ${nameCat}?`)
}

//Chequeo de información completa de la mascota//
alert (`Ya tenemos toda la información!\nNombre del michi: ${nameCat}\nEdad de ${nameCat}: ${ageCat} meses\nPeso de ${nameCat}: ${weightCat}kgs\nSi la información es correcta, presioná 'Aceptar'`)

alert (`Estamos calculando el valor de la castración de ${nameCat}`)

if (weightCat <= 3){
    weightCat = 200;
    (weightCat)
} else if (weightCat >3 && weightCat <5 ){
    weightCat = 350;
    (weightCat)
} else {
    weightCat = 500;
    (weightCat)
}

//Ingreso función para hacer el cálculo final//
let totalCost = (a,b,c) => {return (a*b)+c};

//Informo al usuario el costo final// 
alert ("El costo de la castración es de $" + totalCost(cost,genderCat,weightCat))

