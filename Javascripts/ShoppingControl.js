function acrescentarRecurso(dados, recurso, unidades) {
  if (dados.recursos.hasOwnProperty(recurso)) {
    dados.recursos[recurso] += unidades;
  }
}

function comprar(produto, valor){
    let dadosJogador = carregarDados() || {};
    if(dadosJogador.receita < valor){
        mostrarMensagem(0);
    }
    else{
        dadosJogador.receita -= valor;
        acrescentarRecurso(dadosJogador, produto, 100);
        salvarDados(dadosJogador);
    }
}