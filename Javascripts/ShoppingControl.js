
function comprar(produto, valor){
  let dadosJogador = carregarDados() || {};
    if(dadosJogador.receita < valor){
      mostrarMensagem(0);
  }
  else{
      if (dadosJogador.recursos.hasOwnProperty(produto)) {
          dadosJogador.receita -= valor;
          dadosJogador.recursos[produto] += 100;
          alterarPropriedade(`recursos.${produto}`, dadosJogador.recursos[produto]);
          alterarPropriedade("receita", dadosJogador.receita);

          let texto = `Compra: +100 "${getNome(produto)}"`;
          let img = getSprites(produto);
          mostrarPopUp(img, texto);
          setTimeout(()=>{updateConquistas(0)}, 6000);
      }
      piscarBotao(0);
      precContratos();
  }
}

function acrescentarAgente(dadosJogador, agente){
  if (dadosJogador.agentes.hasOwnProperty(agente)) {
    let chave = agente;
    if(chave == "jedi"){
      updateConquistas(8);
    }
    let descricao = `Contrato  de um ${agente}`;
    let dataConclusao = dadosJogador.dias + dadosJogador.tempTrabalho;
    
    adicionarTarefa(chave, descricao, dadosJogador.dias, dataConclusao);
    updateConquistas(7);
    mostrarMensagem(6);
  }
}

function contratarAgente(agente, valor){
  let dadosJogador = carregarDados() || {};
    if(dadosJogador.receita < valor){
        mostrarMensagem(0);
    }
    else{
        dadosJogador.receita -= valor;
        alterarPropriedade("receita", dadosJogador.receita);
        acrescentarAgente(dadosJogador, agente);
    }
}