const SECAO_UM = document.getElementById("sec1");
const SECAO_DOIS = document.getElementById("sec2");
const SECAO_EXPLORA = document.getElementById("sec3");
const SECAO_COMPRA = document.getElementById("sec5");
const SECAO_CONSTRUCAO = document.getElementById("sec6");

function preencherInventario(dadosJogador, secao){
    if(secao == 0){
        precEquipamentos(dadosJogador);
    }
    if(secao == 1){
        precRecursos(dadosJogador);
    }
    else if(secao == 2){
        precExploracao();
    }
    else if(secao == 3){
        precPesquisas();
    }
    else if(secao == 4){
        precLoja(dadosJogador);
    }
    else if(secao == 5){
        precConstruir(dadosJogador);
    }
    else if(secao == 6){
        precTasks();
    }
    else if(secao == 7){
        precContratos();
    }
    else if(secao == 8){
        precConquistas();
    }
    else if(secao == 9){
        precAdministracao();
    }
    
}

function precExploracao(){
    let dadosJogador = carregarDados();
    let htmlString = `  <h1>Exploração Espacial:</h1>
                        <button onclick="buscarPlaneta()">EXPLORAR</button>
                        `;

    htmlString += "</div>";

    if(dadosJogador.planetasConquistados.length > 0){
        htmlString += `<h1>${dadosJogador.planetasConquistados.length} Planeta(s) Conquistados: </h1>
        <div class="inventario">`;

        dadosJogador.planetasConquistados.forEach(planeta => {
            let nome = planeta.nome;
            let sprite = planeta.sprite;
            let bonus = planeta.bonus;

            htmlString += ` <div class="carta">
                                <img src="${sprite}" h="64px" height="64px">
                                <h3>${nome}</h3>
                                <div class="custo">
                                    <img src="Sprites/IU/coin.png" class="iconStatus">
                                    <p class="green-atributo">+${bonus}/por Dia</p>
                                </div>
                        </div>`;
        });
    }
    htmlString += "</div>";
    SECAO_EXPLORA.innerHTML = htmlString;
}

function precLoja(dadosJogador){
    let htmlString = `  <h1>Compras:</h1>
                        <div class="inventario">`;
    
    for (let chave of Object.keys(dadosJogador.recursos || {})) { 
        let nome = getNome(chave)
        let sprite = getSprites(chave);
        let preco = Math.floor(getPreco(chave) * dadosJogador.perDesconto);
        htmlString += ` <div class="carta">
                            <h3>${nome}</h3>
                            <img src="${sprite}" h="64px" height="64px">
                            <div class="quebra-Custo">
                                <div class="custo">
                                    <img src="Sprites/IU/coin.png" class="redIconStatus">
                                    <p class="red-atributo">- $${preco}</p>
                                </div>
                                <div class="custo">
                                    <img src="${sprite}" h="42px" height="42px" class="greenIconStatus">
                                    <p class="green-atributo">+100</p>
                                </div>
                            </div>
                                                          

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
        let nome = getNome(chave);
        let forca = Math.floor(getForca(chave) * dadosJogador.aumentoForca);

        htmlString += ` <div class="carta">
                            <h3>${nome}</h3>
                            <img src="${sprite}" h="64px" height="64px">
                            <h3>Uma Unidade</h3>
                            <div class="custo">
                                <img src="Sprites/IU/forca.png" class="iconStatus">
                                <p class="green-atributo">+ ${forca}</p>
                            </div>
                            <button onclick="construirItem('${chave}')">Construir</button>
                        </div>`;
    }
    
    htmlString += `</div>
                <button onclick="mostrarSecao(0, SECOES)" class="botaoSecao">Voltar</button>`;
    SECAO_CONSTRUCAO.innerHTML = htmlString;
}

function precRecursos(dadosJogador){
    let htmlString = `  <h1>Seu Estoque:</h1>
                        <button onclick="mostrarSecao(4, SECOES)">COMPRAR</button>
                        <div class="inventario">`;
    let estaVazio = true;
    for (let [chave, valor] of Object.entries(dadosJogador.recursos || {})) {
        
        if(valor > 0){
            estaVazio = false;
            let sprite = getSprites(chave);
            let nome = getNome(chave);
    
            htmlString += ` <div class="carta">
                                <h3>${nome}</h3>
                                <img src="${sprite}" h="64px" height="64px">
                                <h3>${valor}</h3>
                                
                            </div>`
        }
    }
    if(estaVazio){
        htmlString += ` <div class="carta">
                                <h3>Você ainda não possui recursos! Pode compra-los na Seção de Loja</h3>
                        </div>`
    }

    htmlString += "</div>";
    SECAO_DOIS.innerHTML = htmlString;
}

function precEquipamentos(dadosJogador){
    let htmlString = `  <h1>Seus Equipamentos:</h1>
                        <button onclick="mostrarSecao(5, SECOES)">CONSTRUIR</button>
                        <div class="inventario">`;
    let estaVazio = true;
    for (let [chave, valor] of Object.entries(dadosJogador.qntEquipamentos || {})) {
        
        if(valor > 0){
            estaVazio = false;
            let sprite = getSpritesEquipamentos(chave);
            let nome = getNome(chave)
            let forca = Math.floor(getForca(chave) * dadosJogador.aumentoForca);
            htmlString += ` <div class="carta">
                                <h3>${nome}</h3>
                                <img src="${sprite}" h="64px" height="64px">
                                <div class="custo">
                                    <img src="${sprite}" h="42px" height="42px" class="iconStatus">
                                    <p class="atributo">${valor}</p>
                                </div>  
                                <div class="custo">
                                    <img src="Sprites/IU/forca.png" class="iconStatus">
                                    <p class="atributo">${forca}</p>
                                </div>
                            </div>`
        }
    }
    if(estaVazio){
        htmlString += ` <div class="carta">
                                <h3>Você ainda não criou nenhum Equipamento!</h3>
                        </div>`
    }

    htmlString += `</div>`;
    SECAO_UM.innerHTML = htmlString;
}