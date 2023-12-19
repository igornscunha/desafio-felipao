// Desafio Classificador de nivel de heroi

// declarando variaveis
let nameHero = "John Smith"
let experience = 9999
let nivel = ""

// estrutura de controle, atritui um nivel a variavel
if(experience < 1000){
    nivel = "Ferro"
}else if((experience >= 1001) && (experience <= 2000)){
    nivel = "Bronze"
}else if((experience >= 2001) && (experience <= 5000)){
    nivel = "Prata"
}else if((experience >= 6001) && (experience <= 7000)){
    nivel = "Ouro"
}else if((experience >= 7001) && (experience <= 8000)){
    nivel = "Platina"
}else if((experience >= 8001) && (experience <= 9000)){
    nivel= "Ascendente"
}else if((experience >= 9001) && (experience <= 10000)){
    nivel = "Imortal"
}else if(experience >= 10001){
    nivel = "Radiante"
}

// print
console.log("O herói de nome " + nameHero + " está no nível de " + nivel)