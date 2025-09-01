function getConquistas(){
    let dadosJogador = carregarDados();
    return dadosJogador.conquistas;
}

function updateConquistas(id){
    let dadosJogador = carregarDados();
    let conquistas = dadosJogador.conquistas;
    if(conquistas[id] === false){
        conquistas[id] = true;
        mostrarPopUp("Sprites/IU/trofeu.png", "Conquista Concluída!");
        precConquistas();
    }
    alterarPropriedade("conquistas", conquistas);
}


function specialConquistas(){
    let dadosJogador = carregarDados();
    let algumFalso = false;

    for (let valor of Object.values(dadosJogador.recursos)) {
        if (valor <= 0) {
            algumFalso = true;
            break;
        }
    }

    if (!algumFalso) {
        updateConquistas(1);
    }

    let semFalsos = true;

    for (let valor of Object.values(dadosJogador.qntEquipamentos)) {
        if (valor <= 0) {
            semFalsos = false;
            break;
        }
    }

    if (semFalsos) {
        updateConquistas(3);
    }

    if(dadosJogador.levelPesquisaForca > 1 && dadosJogador.levelPesquisaTrabalho > 1 && dadosJogador.levelPesquisaDesconto > 1){
        updateConquistas(10);
    }

    if(dadosJogador.planetasConquistados.length >= 100){
        updateConquistas(11);
    }

    if(dadosJogador.agentes.special >= 100){
        updateConquistas(12);
    }
}

setInterval(specialConquistas, 1000);