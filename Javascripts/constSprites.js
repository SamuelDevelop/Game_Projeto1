const SPRITES_RECURSOS = {
    madeira: "Sprites/itens/Bars/bar_Madeira.svg",
    pedra: "Sprites/itens/Bars/bar_Pedra.svg",
    cobre: "Sprites/itens/Bars/bar_Cobre.svg",
    ferro: "Sprites/itens/Bars/bar_Ferro.svg",
    vemelhita: "Sprites/itens/Bars/bar_Red.svg",
    diamante: "Sprites/itens/Bars/bar_Dima.svg"
}

const SPRITES_EQUIPAMENTOS = {
    espadaMadeira: "Sprites/itens/sword_Dima.svg",
    espadaPedra: "Sprites/itens/sword_Dima.svg",
    espadaCobre: "Sprites/itens/sword_Dima.svg",
    espadaFerro: "Sprites/itens/sword_Dima.svg",
    espadaVemelhita: "Sprites/itens/sword_Dima.svg",
    espadaDiamante: "Sprites/itens/sword_Dima.svg",

    escudoMadeira: "Sprites/itens/sword_Dima.svg",
    escudoPedra: "Sprites/itens/sword_Dima.svg",
    escudoCobre: "Sprites/itens/sword_Dima.svg",
    escudoFerro: "Sprites/itens/sword_Dima.svg",
    escudoVemelhita: "Sprites/itens/sword_Dima.svg",
    escudoDiamante: "Sprites/itens/sword_Dima.svg"
}

function getSprites(valor){
    
    if(valor == "madeira"){
        return SPRITES_RECURSOS.madeira;
    }
    if(valor == "pedra"){
        return SPRITES_RECURSOS.pedra;
    }
    if(valor == "cobre"){
        return SPRITES_RECURSOS.cobre;
    }
    if(valor == "ferro"){
        return SPRITES_RECURSOS.ferro;
    }
    if(valor == "vemelhita"){
        return SPRITES_RECURSOS.vemelhita;
    }
    if(valor == "diamante"){
        return SPRITES_RECURSOS.diamante;
    }
    else{
        window.alert("Erro ao Capturar Sprite! error in constSprites.js");
    }
}

function getSpritesEquipamentos(valor){
    return SPRITES_EQUIPAMENTOS[valor] || null;
}