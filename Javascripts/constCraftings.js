const RECEITAS = {
    shipWar: {
      madeira: 120,
      pedra: 240,
      tungstenio: 240,
      ferro: 240,
      vermelhita: 50,
      diamante: 10
    },

    shipTravel: {
      madeira: 1000,
      pedra: 500,
      tungstenio: 275,
      ferro: 300,
      vermelhita: 100,
      diamante: 50
    },

    shipSpy: {
      madeira: 1500,
      pedra: 0,
      tungstenio: 2440,
      ferro: 3000,
      vermelhita: 200,
      diamante: 20
    },

    shipDestroyer: {
      madeira: 6300,
      pedra: 5400,
      tungstenio: 3600,
      ferro: 3600,
      vermelhita: 250,
      diamante: 200
    },

    shipBus: {
      madeira: 800,
      pedra: 250,
      tungstenio: 300,
      ferro: 400,
      vermelhita: 200,
      diamante: 10
    },

    shipAngular: {
      madeira: 10000,
      pedra: 5000,
      tungstenio: 1500,
      ferro: 1500,
      vermelhita: 1000,
      diamante: 700
    }
}


function getReceitaItem(item){
    return RECEITAS[item] || null;
}