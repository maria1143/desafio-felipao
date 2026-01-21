
function classificarXP(nome, xp) {
    

    let nivel = "";

    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp > 1000 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp > 2000 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp > 5000 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp > 7000 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp > 8000 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp > 9000 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    return "O Herói de nome " + nome + " está no nível de " + nivel;
}

//Laço de Repetição (for) para testar
//O herói vai ganhar 1000 de XP a cada rodada até chegar a 11.000
let heroiNome = "Maria";
let heroiXP = 0;

for (let i = 0; i <= 11; i++) {
   
    console.log(classificarXP(heroiNome, heroiXP));
    
    // A cada volta do laço, vai se somar 1000 de XP 
    heroiXP += 1000; 
}
//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante



