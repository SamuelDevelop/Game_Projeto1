const PRECOS_TABELADOS = {
    madeira: 120,
    pedra: 240,
    tungstenio: 360,
    ferro: 540,
    vermelhita: 630,
    diamante: 810
}
const FORCA_EQUIPAMENTOS = {
    shipWar: 100,
    shipTravel: 0,
    shipSpy: 20,
    shipDestroyer: 2500,
    shipBus: 0,
    shipAngular: 10000,
}

const NOMES_COISAS = {
    madeira: "Madeira Refinada",
    pedra: "Pedra Espacial",
    tungstenio: "Tungstênio",
    ferro: "Ferro Espacial",
    vermelhita: "Vermelhita",
    diamante: "Diamante",

    shipWar: "Nave De Guerra",
    shipTravel: "Nave Rápida",
    shipSpy: "Nave Espiã",
    shipDestroyer: "Destruidora de Mundos",
    shipBus: "Ônibus Espacial",
    shipAngular: "Nave Ângular",

    sith: "Agente Sith",
    sayajin: "Guerreiro Sayajin",
    yoda: "Agente Jedi",
    special: "Caçadores Especiais",

    perDesconto: "Desconto em Produtos",
    tempTrabalho: "Tempo de Construção/Trabalho",
    aumentoForca: "Força das tropas",
}

const FORCA_AGENTES = {
    sith: 750,
    sayajin: 1000,
    yoda: 2000,
    special: 150,
}
const PRECO_CONTRATO = {
    sith: 10000,
    sayajin: 20000,
    yoda: 40000,
    special: 1000,
}

function getForca(valor){
    return FORCA_EQUIPAMENTOS[valor]
}

function getForcaAgentes(valor){
    return FORCA_AGENTES[valor]
}
function getPrecoAgentes(valor){
    return PRECO_CONTRATO[valor]
}

function getNome(valor){
    return NOMES_COISAS[valor] || (
        window.alert(`Erro ao Capturar Nome de ${valor}! error in constValues.js`),
        null
    );
}

function getPreco(valor){
    return PRECOS_TABELADOS[valor] || (
        window.alert(`Erro ao Capturar Preço de ${valor}! error in constValues.js`),
        null
    );
}

function getConquistaClass(id){
    let dadosJogador = carregarDados();
    let conquistas = dadosJogador.conquistas;
    if(conquistas[id] === false){
        return "conquista-cinza"; 
    }
    else{
        return "conquista-golden";
    }
}
