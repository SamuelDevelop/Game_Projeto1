
if (!localStorage.getItem("dados")) {
  const dados = {
    nomeJogador: 'player',
    dias: 0,
    salario: 10,
    receita: 1000,
    forca: 0,
    perDesconto: 1,
    
    recursos: {
      madeira: 0,
      pedra: 0,
      cobre: 0,
      ferro: 0,
      vemelhita: 0,
      diamante: 0
    },

    qntEquipamentos: {
      espadaMadeira: 0,
      espadaPedra: 0,
      espadaCobre: 0,
      espadaFerro: 0,
      espadaVemelhita: 0,
      espadaDiamante: 0,

      escudoMadeira: 0,
      escudoPedra: 0,
      escudoCobre: 0,
      escudoFerro: 0,
      escudoVemelhita: 0,
      escudoDiamante: 0
    }
  };
  localStorage.setItem("dados", JSON.stringify(dados));
}

function resetarDados() {
  const dadosOriginais = {
    nomeJogador: 'player',
    dias: 0,
    salario: 10,
    receita: 1000,
    forca: 0,
    perDesconto: 1,
    
    recursos: {
      madeira: 0,
      pedra: 0,
      cobre: 0,
      ferro: 0,
      vemelhita: 0,
      diamante: 0
    },

    qntEquipamentos: {
      espadaMadeira: 0,
      espadaPedra: 0,
      espadaCobre: 0,
      espadaFerro: 0,
      espadaVemelhita: 0,
      espadaDiamante: 0,

      escudoMadeira: 0,
      escudoPedra: 0,
      escudoCobre: 0,
      escudoFerro: 0,
      escudoVemelhita: 0,
      escudoDiamante: 0
    }
  };

  
  localStorage.setItem("dados", JSON.stringify(dadosOriginais));
}
