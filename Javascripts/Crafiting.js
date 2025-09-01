function construirItem(item){
    const RECEITA = getReceitaItem(item);
    let sHtml = `<div class="inventario">`;
    let dadosJogador;

    setTimeout(()=>{
        dadosJogador = carregarDados();
        for (let chave of Object.keys(RECEITA)) { 
        let nome = getNome(chave)
        let sprite = getSprites(chave);
        let preco = RECEITA[chave];
        let estoque = dadosJogador.recursos[chave]
        sHtml += ` <div class="carta">
                            <div class="custo">
                                <img src="${sprite}" class="redIconStatus">
                                <p class="red-atributo">Custo: ${preco}</p>
                            </div>
                            <div class="custo">
                                <img src="${sprite}" class="iconStatus">
                                <p class="atributo">Estoque: ${estoque}</p>
                            </div>
                    </div>`;
    }
    let tempo = dadosJogador.tempTrabalho

    sHtml += `</div>
              <h3> Tempo necessário: ${tempo} dias</h3>`;
    mostrarMensagem(1, sHtml, item)
    }, 150);    
}

function verificaConstrucao(item){
    const RECEITA = getReceitaItem(item);
    let dadosJogador;
    setTimeout(()=>{
         dadosJogador = carregarDados() || {};
        let valido = true;
        if (!RECEITA) {
            console.error("Receita não encontrada para:", item);
        }
        for (let chave of Object.keys(RECEITA)) { 
            if(dadosJogador.recursos[chave] < RECEITA[chave]){
                valido = false;
                construcaoInvalida();
            }
        }
        if(valido){
            construir(item);
            construirItem(item);
        }
    }, 150);    
}

function construcaoInvalida(){
    mostrarMensagem(2)
}

function construir(item){
    const RECEITA = getReceitaItem(item);
    let dadosJogador = carregarDados();

    for (let chave of Object.keys(RECEITA)) {  
        alterarPropriedade(`recursos.${chave}`, dadosJogador.recursos[chave] - RECEITA[chave]);           
    }

    let chave = item;
    let descricao = `Construção de ${getNome(item)}`;
    let dataConclusao = dadosJogador.dias + dadosJogador.tempTrabalho;
    updateConquistas(2);
    adicionarTarefa(chave, descricao, dadosJogador.dias, dataConclusao);
}