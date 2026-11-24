let pontosJogador = 0;
let pontosComputador = 0;


function jogar(jogador) {


    let escolhas = [
        "pedra",
        "papel",
        "tesoura"
    ];


    let numero = Math.floor(
        Math.random() * 3
    );


    let computador = escolhas[numero];


    let resultado = "";


    if (jogador === computador) {
        resultado = "Empate!";
    }


    else if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
    ) {
        resultado = "Você ganhou!";
        pontosJogador++;
    }


    else {
        resultado = "Você perdeu!";
        pontosComputador++;
    }


    document.getElementById("resultado").innerHTML =
        "Você escolheu: " + jogador +
        "<br>Computador escolheu: " + computador +
        "<br>" + resultado;


    document.getElementById("placar").innerHTML =
        "Você: " + pontosJogador +
        " | Computador: " + pontosComputador;
}


function reiniciar() {


    pontosJogador = 0;
    pontosComputador = 0;


    document.getElementById("resultado").innerHTML =
        "Boa sorte!";


    document.getElementById("placar").innerHTML =
        "Você: 0 | Computador: 0";
}
