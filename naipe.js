let cartas =  parseInt(prompt("Digite o numero de cartas desejadas: "))

for( let i = 0; i < cartas; i++ ){

    let naipe = Math.round( Math.random() * 3 ) 
    if(naipe == 0){
       naipe = "Copas"
    }else if(naipe == 1){
       naipe = "Paus"
    }else if (naipe == 2){
        naipe = "Espadas"
    }else if (naipe == 3){
        naipe = "Ouros"
    }

    let num 
    num = Math.round(Math.random() * 9 + 1) 

    console.log(` A carta ${i} é : ${num} ${naipe}  `)


}