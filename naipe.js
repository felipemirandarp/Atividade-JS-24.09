let cartas =  parseInt(prompt("Digite o numero de cartas desejadas: "))

for( let i = 0; i < cartas; i++ ){

    let numeros = Math.random() * 10 //0,1,2,3 

    console.log(numeros)

    let naipe = Math.random() * 3 //0,1,2,3 

    if(naipe == 0){
       naipe = "copas"
    }else if(naipe == 1){
       naipe = "paus"
    }else if (naipe == 2){
        naipe == "Espadas"
    }else if (naipe == 3){
        naipe == "Ouros"
    }
    console.log(naipe)


}