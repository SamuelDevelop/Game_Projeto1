function verificacaoDiaria() {
    let dadosJogador = carregarDados();
    if(dadosJogador.listaAfazeres.length > 0){
        for (let i = dadosJogador.listaAfazeres.length - 1; i >= 0; i--) {
            let tarefa = dadosJogador.listaAfazeres[i];
            if(tarefa.chave == null){
                dadosJogador.listaAfazeres.splice(i, 1);
                alterarPropriedade("listaAfazeres", dadosJogador.listaAfazeres);
            }

            if (tarefa.data == dadosJogador.dias) {
                
                let chave = tarefa.chave;

                if (dadosJogador.qntEquipamentos.hasOwnProperty(chave)) {
                    dadosJogador.qntEquipamentos[chave] += 1;
                    dadosJogador.listaAfazeres.splice(i, 1);
                    alterarPropriedade(`qntEquipamentos.${chave}`, dadosJogador.qntEquipamentos[chave]);
                    let img = getSpritesEquipamentos(chave)
                    mostrarPopUp(img, "Item Construido!");
                    TarefaConcluida(tarefa);

                } else if (dadosJogador.agentes.hasOwnProperty(chave)) {
                    dadosJogador.agentes[chave] += 1;
                    dadosJogador.listaAfazeres.splice(i, 1);
                    alterarPropriedade(`agentes.${chave}`, dadosJogador.agentes[chave]);
                    let img = getSpritesAgentes(chave);
                    mostrarPopUp(img, "Um Agente Chegou!");
                    TarefaConcluida(tarefa);

                } else if(dadosJogador.hasOwnProperty(chave)){
                    dadosJogador.listaAfazeres.splice(i, 1);
                    console.log(chave);
                    evoluir(chave);
                    TarefaConcluida(tarefa);
                } 
                alterarPropriedade("listaAfazeres", dadosJogador.listaAfazeres);
                precTasks();
                precContratos();
                precConstruir(dadosJogador);
            }
        }
    }
    else{
        precTasks();
    } 
}

setInterval(() => {
    verificacaoDiaria()
}, 400);

