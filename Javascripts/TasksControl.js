let Tasks = [];

function adicionarTarefa(chave, nome, dataAtual, dataConclusao){
    let dadosJogador = carregarDados();
    const OBJETO = {
        chave: chave,
        data: dataConclusao,
        descricao: nome,
        inicio: `Dia de Início: <b>${dataAtual}</b>`,
        conclusao: `Conclusão no dia: <b>${dataConclusao}</b>`,
    }
    
    dadosJogador.listaAfazeres.push(OBJETO);
    alterarPropriedade("listaAfazeres", dadosJogador.listaAfazeres);
    
    piscarBotao(5);
}

function TarefaConcluida(tarefa){
    Tasks.push(tarefa);
}

function getTarefas(){
    return Tasks;
}

function clearTarefas(){
    Tasks.splice(0, Tasks.length);
}