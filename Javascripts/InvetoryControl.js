const SECAO_UM = document.getElementById("sec1");
const SECAO_DOIS = document.getElementById("sec2");
const SECAO_COMPRA = document.getElementById("sec5");
const SECAO_CONSTRUCAO = document.getElementById("sec6");

function preencherInventario(dadosJogador, secao){
    if(secao == 0){
        precEquipamentos(dadosJogador);
    }
    else if(secao == 1){
        precRecursos(dadosJogador);
    }
    else if(secao == 4){
        precLoja(dadosJogador);
    }
    else if(secao == 5){
        precConstruir(dadosJogador);
    }
    
}

function precLoja(dadosJogador){
    let htmlString = `  <h1>Compras</h1>
                        <h2>Recursos</h2>
                        <div class="inventario">`;
    
    for (let chave of Object.keys(dadosJogador.recursos || {})) { 
        let sprite = getSprites(chave);
        let preco = getPreco(chave) * dadosJogador.perDesconto;
        htmlString += ` <div class="carta">
                            <h3>${chave}</h3>
                            <img src="${sprite}" h="64px" height="64px">
                            <h3>$${preco}</h3>
                            <h3>100 unidades</h3>
                            <button onclick="comprar('${chave}', ${preco})">Comprar</button>
                        </div>`;
    }
    
    htmlString += "</div>";
    SECAO_COMPRA.innerHTML = htmlString;
}

function precConstruir(dadosJogador){
    let htmlString = `  <h1>Construir Equipamentos</h1>
                        <h2>Receitas</h2>
                        <div class="inventario">`;
    
    for (let chave of Object.keys(dadosJogador.qntEquipamentos || {})) { 
        let sprite = getSpritesEquipamentos(chave);

        htmlString += ` <div class="carta">
                            <h3>${chave}</h3>
                            <img src="${sprite}" h="64px" height="64px">
                            <h3>Uma Unidade</h3>
                            <button>Construir</button>
                        </div>`;
    }
    
    htmlString += "</div>";
    SECAO_CONSTRUCAO.innerHTML = htmlString;
}

function precRecursos(dadosJogador){
    let htmlString = `  <h1>Recursos</h1>
                        <h2>Seu Estoque</h2>
                        <div class="inventario">`;
    let estaVazio = true;
    for (let [chave, valor] of Object.entries(dadosJogador.recursos || {})) {
        
        if(valor > 0){
            estaVazio = false;
            let sprite = getSprites(chave);
            htmlString += ` <div class="carta">
                                <h3>${chave}</h3>
                                <img src="${sprite}" h="64px" height="64px">
                                <h3>${valor}</h3>
                            </div>`
        }
    }
    if(estaVazio){
        htmlString += ` <div class="carta">
                                <h3>Você ainda não possui recursos!</h3>
                        </div>`
    }

    htmlString += "</div>";
    SECAO_DOIS.innerHTML = htmlString;
}

function precEquipamentos(dadosJogador){
    let htmlString = `  <h1>Equipamentos</h1>
                        <h2>Seus Equipamentos</h2>
                        <div class="inventario">`;
    let estaVazio = true;
    for (let [chave, valor] of Object.entries(dadosJogador.qntEquipamentos || {})) {
        
        if(valor > 0){
            estaVazio = false;
            let sprite = getSpritesEquipamentos(chave);
            htmlString += ` <div class="carta">
                                <h3>${chave}</h3>
                                <img src="${sprite}" h="64px" height="64px">
                                <h3>${valor}</h3>
                            </div>`
        }
    }
    if(estaVazio){
        htmlString += ` <div class="carta">
                                <h3>Você ainda não criou nenhum Equipamento!</h3>
                        </div>`
    }

    htmlString += `     <button onclick="mostrarSecao(5, SECOES)">Construir Equipamentos</button>
                    </div>`;
    SECAO_UM.innerHTML = htmlString;
}