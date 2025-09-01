
function criarDados(nome, nomeImp, spriteFlag="Sprites/flags/5.png", classe = CABECA){
  const dados = {
    nomeJogador: nome,
    nomeImperio: nomeImp,
    bandeira: spriteFlag,
    dias: 0,
    salario: classe.salario,
    receita: classe.receita,
    forca: classe.forca,
    aumentoCustosPesquisa: classe.aumentoCustosPesquisa,
    custoPesquisa: classe.custoPesquisa,
    perDesconto: classe.perDesconto,
    tempTrabalho: classe.tempTrabalho,
    tempPesquisa: classe.tempPesquisa,
    aumentoForca: classe.aumentoForca,
    levelPesquisaForca: 1,
    levelPesquisaTrabalho: 1,
    levelPesquisaDesconto: 1,
    pesquisaEmAndamento: false,


    recursos: {
      madeira: 0,
      pedra: 0,
      tungstenio: 0,
      ferro: 0,
      vermelhita: 0,
      diamante: 0
    },

    qntEquipamentos: {
      shipWar: 0,
      shipTravel: 0,
      shipSpy: 0,
      shipDestroyer: 0,
      shipBus: 0,
      shipAngular: 0
    },

    agentes: {
      sith: 0,
      sayajin: 0,
      yoda: 0,
      special: 0,
    },

    listaAfazeres: [],
    planetaAlvo: null,
    planetasConquistados: [],
    vitorias: [],
    conquistas: [false, false, false, false,false,false,false,false,false,false,false,false,false],
    numConquistas: 0,
  };
  localStorage.setItem("dados", JSON.stringify(dados));
}

function deletarDados(){
  localStorage.removeItem("dados");
  location.reload();
}
