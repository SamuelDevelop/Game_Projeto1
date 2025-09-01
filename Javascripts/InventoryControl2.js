const SECAO_TASKS = document.getElementById("sec7");
const SECAO_CONTRATO = document.getElementById("sec8");
const SECAO_PESQUISA = document.getElementById("sec4");

function precPesquisas(){
    let dadosJogador = carregarDados();
    let htmlString = `
        <h1>Pesquisas:</h1>
        <h3>Os cientistas do ${dadosJogador.nomeImperio} levam ${dadosJogador.tempPesquisa} dias para concluir uma pesquisa, 
        além de que o custo para uma pesquisa atualmente é de $${dadosJogador.custoPesquisa}</h3>
        
        <h2>Pesquisas Disponiveis:</h2>
        <div class="Inventario">
            <div class="carta">
                <h3>Trabalho</h3>
                <p>Essas pesquisas encontram formas para diminuir o tempo de construção e contrato de agentes</p>
                <div class="custo">
                    <img src="Sprites/IU/level.png" class="greenIconStatus">
                    <p class="green-atributo"> Level: ${dadosJogador.levelPesquisaTrabalho}</p>
                </div>`

    if(dadosJogador.pesquisaEmAndamento){
        htmlString += `<h3>Já à uma pesquisa em andamento, seus cientistas estão sobrecarregados, não há o que se possa fazer!</h3>`
    }
    else{
        htmlString += `<button onclick="pesquisar(0)">Pesquisar</button>`;
    }           
    
    htmlString +=     
        `</div>
            <div class="carta">
                <h3>Negocios</h3>
                <p>Os comerciantes de ${dadosJogador.nomeImperio} encontraram descontos e os preços dos produtos ficaram mais baratos</p>
                <div class="custo">
                    <img src="Sprites/IU/level.png" class="greenIconStatus">
                    <p class="green-atributo"> Level: ${dadosJogador.levelPesquisaDesconto}</p>
                </div>`

    if(dadosJogador.pesquisaEmAndamento){
        htmlString += `<h3>Já à uma pesquisa em andamento, seus cientistas estão sobrecarregados, não há o que se possa fazer!</h3>`
    }
    else{
        htmlString += `<button onclick="pesquisar(1)">Pesquisar</button>`;
    } 
        
    htmlString += 
    `</div>
        <div class="carta">
            <h3>Militar</h3>
            <p>Essas pesquisas ajudaram a aumentar a força dos seus equipamentos e agentes</p>
            <div class="custo">
                <img src="Sprites/IU/level.png" class="greenIconStatus">
                <p class="green-atributo"> Level: ${dadosJogador.levelPesquisaForca}</p>
            </div>`
    if(dadosJogador.pesquisaEmAndamento){
        htmlString += `<h3>Já à uma pesquisa em andamento, seus cientistas estão sobrecarregados, não há o que se possa fazer!</h3>`
    }
    else{
        htmlString += `<button onclick="pesquisar(2)">Pesquisar</button>`;
    }             
                
    htmlString += `</div></div> `;

    SECAO_PESQUISA.innerHTML = htmlString;
}

function precTasks(){
    let tarefas = getTarefas();
    let dadosJogador = carregarDados();
    let andamento = dadosJogador.listaAfazeres;
    let htmlString = `<h1>Em andamento:</h1>
                    <div class="inventario">`;

    if(andamento.length == 0){
        htmlString += ` <h3>Você não possui tarefas sendo Realizadas!</h3>`;
    }
    else {
        andamento.reverse().forEach(tarefa => {
        htmlString += `
            <div class="carta">
                <h3>${tarefa.descricao}</h3>
                <p>${tarefa.inicio} e ${tarefa.conclusao}</p>
            </div>
        `;
        });
    }

    htmlString += `
        </div><h1>Tarefas Recentes Concluidas:</h1>
        <p>Atualizar a página ou sair, deletam essas Tarefas:</p>
        <div class="inventario">
    `;
    
    if(tarefas.length == 0){
        htmlString += ` <h3>Você não possui tarefas para Realizar ou já Realizadas!</h3>`;
    }
    else {
        tarefas.slice(-10).reverse().forEach(tarefa => {
        htmlString += `
            <div class="carta">
                <h3>${tarefa.descricao}</h3>
                <p>${tarefa.conclusao}</p>
            </div>
        `;
        });
    }

    htmlString += "</div>";
    htmlString += `<button onclick="clearTarefas()">Limpar Tarefas</button>`;
    SECAO_TASKS.innerHTML = htmlString;
}

function precContratos(){
    let dadosJogador = carregarDados();
    let htmlString = `
        <h1>Agentes Disponiveis:</h1>
        <h3>Os agentes se juntam a você após ${dadosJogador.tempTrabalho} dias de assinar o contrato, eles precisam viajar até chegar em seu planeta ;). Para ver quando um agente contratado chega, cheque a lista de tarefas:</h3>
        <button onclick="mostrarSecao(6, SECOES)">Tarefas</button>
        <div class="inventario">
    `;

    for (let chave of Object.keys(dadosJogador.agentes || {})) {
        let nome = getNome(chave);
        let sprite = getSpritesAgentes(chave);
        let preco = Math.floor(getPrecoAgentes(chave) * dadosJogador.perDesconto);
        let forca = Math.floor(getForcaAgentes(chave) * dadosJogador.aumentoForca);
        htmlString += ` <div class="carta">
                            <h3>${nome}</h3>
                            <img src="${sprite}" h="64px" height="64px">
                            <div class="quebra-Custo">
                                <div class="custo">
                                    <img src="Sprites/IU/coin.png" class="redIconStatus">
                                    <p class="red-atributo"> - $${formatarNumero(preco)}</p>
                                </div>
                                <div class="custo">
                                    <img src="Sprites/IU/forca.png" class="iconStatus">
                                    <p class="green-atributo">+ ${forca}</p>
                                </div>
                            </div>
                            <button onclick="contratarAgente('${chave}', ${preco})">Contratar</button>
                        </div>`;
    }
    htmlString += `</div>
            <h1>Agentes Contratados:</h1>
            <div class="inventario">`;
    
    for (let chave of Object.keys(dadosJogador.agentes || {})) {
        let valor = dadosJogador.agentes[chave];
        if(valor > 0){
            let nome = getNome(chave);
            let sprite = getSpritesAgentes(chave);
            let forca = Math.floor(getForcaAgentes(chave) * dadosJogador.aumentoForca) * valor;
            htmlString += ` <div class="carta">
                            <h3>${nome}</h3>
                            <img src="${sprite}" h="64px" height="64px">
                            <div class="quebra-Custo">
                                <div class="custo">
                                    <img src="${sprite}" h="64px" height="64px" class="iconStatus">
                                    <p class="atributo">${valor}</p>
                                </div>
                                <div class="custo">
                                    <img src="Sprites/IU/forca.png" class="iconStatus">
                                    <p class="atributo">${forca}</p>
                                </div>
                            </div>
                        </div>`;
        }    
    }
    

    htmlString += "</div>";
    SECAO_CONTRATO.innerHTML = htmlString;
}
