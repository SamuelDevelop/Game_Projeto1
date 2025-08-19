const RECEITAS = {
    espadaMadeira: {
      madeira: 100,
      pedra: 50,
      cobre: 0,
      ferro: 0,
      vemelhita: 0,
      diamante: 0
    },
    espadaPedra: {
      madeira: 100,
      pedra: 200,
      cobre: 0,
      ferro: 0,
      vemelhita: 0,
      diamante: 0
    },
    espadaCobre: {
      madeira: 200,
      pedra: 50,
      cobre: 200,
      ferro: 0,
      vemelhita: 0,
      diamante: 0
    },
    espadaFerro: {
      madeira: 200,
      pedra: 50,
      cobre: 20,
      ferro: 200,
      vemelhita: 0,
      diamante: 0
    },
    espadaVemelhita: {
      madeira: 200,
      pedra: 100,
      cobre: 50,
      ferro: 50,
      vemelhita: 200,
      diamante: 0
    },
    espadaDiamante: {
      madeira: 400,
      pedra: 200,
      cobre: 100,
      ferro: 100,
      vemelhita: 100,
      diamante: 250
    },

    /*Escudos*/
    escudoMadeira: {
      madeira: 500,
      pedra: 0,
      cobre: 0,
      ferro: 50,
      vemelhita: 0,
      diamante: 0
    },
    escudoPedra: {
      madeira: 500,
      pedra: 500,
      cobre: 0,
      ferro: 50,
      vemelhita: 0,
      diamante: 0
    },
    escudoCobre: {
      madeira: 400,
      pedra: 100,
      cobre: 500,
      ferro: 50,
      vemelhita: 0,
      diamante: 0
    },
    escudoFerro: {
      madeira: 400,
      pedra: 100,
      cobre: 50,
      ferro: 1000,
      vemelhita: 0,
      diamante: 0
    },
    escudoVemelhita: {
      madeira: 500,
      pedra: 50,
      cobre: 50,
      ferro: 500,
      vemelhita: 500,
      diamante: 0
    },
    escudoDiamante: {
      madeira: 500,
      pedra: 500,
      cobre: 250,
      ferro: 500,
      vemelhita: 25,
      diamante: 1200
    }
}


function getReceitaItem(item){
    return RECEITAS[item] || null;
}