let pessoas = 1800
let ingresso = 150
let lucro = pessoas*ingresso - 1000
let lucroanterior = 0

while( lucro > lucroanterior ){
    lucroanterior = lucro
    ingresso = ingresso - 10 
    pessoas = pessoas + 50
    lucro = pessoas*ingresso - 1000  
}
console.log(`O melhor preço é: ${ingresso}`)