const SPRITES_RECURSOS = {
    madeira: "Sprites/itens/Bars/bar_Madeira.png",
    pedra: "Sprites/itens/Bars/bar_Pedra.png",
    tungstenio: "Sprites/itens/Bars/bar_Tungstenio.png",
    ferro: "Sprites/itens/Bars/bar_Ferro.webp",
    vermelhita: "Sprites/itens/Bars/bar_Red.png",
    diamante: "Sprites/itens/Bars/bar_Dima.png"
}

const SPRITES_EQUIPAMENTOS = {
      shipWar: "Sprites/itens/Ships/ship_War.png",
      shipTravel: "Sprites/itens/Ships/ship_Travel.png",
      shipSpy: "Sprites/itens/Ships/ship_Spy.png",
      shipDestroyer: "Sprites/itens/Ships/ship_Destroyer.png",
      shipBus: "Sprites/itens/Ships/ship_bus.png",
      shipAngular: "Sprites/itens/Ships/ship_Angular.png"
}

const SPRITES_AGENTES = {
    sith: "Sprites/IU/sith.png",
    sayajin: "Sprites/IU/sayajin.ico",
    yoda: "Sprites/IU/yoda.png",
    special: "Sprites/IU/special.png",
}

function getSprites(valor){
    return SPRITES_RECURSOS[valor] || (
        window.alert("Erro ao Capturar Sprite! error in constSprites.js"),
        null
    );
}

function getSpritesAgentes(valor){
    return SPRITES_AGENTES[valor] || (
        window.alert("Erro ao Capturar Sprite! error in constSprites.js"),
        null
    );
}

function getSpritesEquipamentos(valor){
    return SPRITES_EQUIPAMENTOS[valor] || null;
}
