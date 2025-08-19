const PRECOS_TABELADOS = {
    madeira: 100,
    pedra: 200,
    cobre: 300,
    ferro: 400,
    vemelhita: 500,
    diamante: 600
}

function getPreco(valor){

    if(valor == "madeira"){
        return PRECOS_TABELADOS.madeira;
    }
    if(valor == "pedra"){
        return PRECOS_TABELADOS.pedra;
    }
    if(valor == "cobre"){
        return PRECOS_TABELADOS.cobre;
    }
    if(valor == "ferro"){
        return PRECOS_TABELADOS.ferro;
    }
    if(valor == "vemelhita"){
        return PRECOS_TABELADOS.vemelhita;
    }
    if(valor == "diamante"){
        return PRECOS_TABELADOS.diamante;
    }
    else{
        window.alert("Erro ao Capturar Preco! error in constValues.js");
    }
}