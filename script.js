const resultado = document.querySelector(".resutado")
const humanoScore=document.querySelector('#meu-score')
const maqunaScore=document.querySelector('#score-maquina')

let scoreHumano = 0
let scoreMaquina = 0 

const playHumano = (escolha) => {
    
    phayMaquina()

    playNoJogo(escolha, phayMaquina())
}
const phayMaquina = () => {
    const opcoes = ['pedra', 'papel', 'tesoura']
    const rodadaNumero = Math.floor(Math.random() * 3)
    return opcoes[rodadaNumero]
}
const playNoJogo = (humano, maquina) => {

    
    if (humano === maquina) {
        resultado.innerHTML = 'Deu empate'
    }
    else if ((humano === 'tesoura' && maquina === 'papel')
        ||(humano === 'pedra' && maquina === 'tesoura'
        ||(humano ==='papel' && maquina === 'pedra'))) {
        resultado.innerHTML = 'voçê ganhou'
        
        scoreHumano ++
        humanoScore.innerHTML = scoreHumano
    }
    
        else {
        resultado.innerHTML = 'a maquina ganhou'
        scoreMaquina ++
        maqunaScore.innerHTML = scoreMaquina
    }

}






