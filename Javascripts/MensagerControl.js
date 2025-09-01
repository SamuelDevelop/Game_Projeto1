const TELA_DE_MENSAGEM = document.getElementById("mensagem");

function mostrarMensagem(id, sHtml = "<p></p>", chave = "none"){
    pararPassagemTempo();

    let stringHtml = `  <h1>Mensagem de Erro</h1>
                        <p>Não foi possivel mostrar a mensagem o id: em MensagerControl.js está errado!</p>
                        <button onclick="fecharMensagem()">Fechar</button>`;

    if(id == 0){
        stringHtml = `  <h1>Dinheiro Insuficiente!</h1>
                        <p>Você não possui dinheiro para comprar este item, você pode conseguir mais dinheiro aumentando sua receita diária ou vendendo itens</p>
                        <button onclick="fecharMensagem()">Fechar</button>`;
    }

    if(id == 1){
        stringHtml = `<h1>Construção:</h1>`;
        stringHtml += sHtml;
        stringHtml += `<button onclick="verificaConstrucao('${chave}')">Construir</button>`;
        stringHtml += `<button onclick="fecharMensagem()">Fechar</button>`;
    }

    if(id == 2){
        stringHtml = `  <h1>Recursos Insuficientes</h1>
                        <p>Você não possui os recursos totais para construir este equipamento, você pode conseguir recursos comprando na loja</p>
                        <button onclick="fecharMensagem()">Fechar</button>`;
    }

    if(id == 3){
        stringHtml = `<h1>Planeta Encontrado!</h1>`;
        stringHtml += sHtml;                
        stringHtml += `<button onclick="fecharMensagem(1)">Fechar</button>`;
    }

    if(id == 4){
        stringHtml = `<h1>Batalha!</h1>`;
        stringHtml += sHtml;                
        stringHtml += `<button onclick="fecharMensagem(1)">Desistir</button>`;
    }
    if(id == 5){
        stringHtml = sHtml;                
        stringHtml += `<button onclick="fecharMensagem(1)">Fechar</button>`;
    }
    if(id == 6){
        let dadosJogador = carregarDados();
        stringHtml = `  <h1>Agente Contratado!</h1>
                        <p>Ele pegará uma nave e chegará e após ${dadosJogador.tempTrabalho} dias. Para ver quando um agente contratado chega, cheque a lista de tarefas:</p>
                        <button onclick="fecharMensagem()">Fechar</button>`;
    }

    TELA_DE_MENSAGEM.innerHTML = stringHtml;
    TELA_DE_MENSAGEM.style.display = "flex";
}

function fecharMensagem(par = null){
    if(par == 1){
        let dadosJogador = carregarDados();
        dadosJogador.planetaAlvo = null;
        salvarDados(dadosJogador);
    }
    TELA_DE_MENSAGEM.style.display = "none";
    ativarPassagemTempo();
}

const POP_UP = document.getElementById("pop-Up");

function mostrarPopUp(img, texto){
    POP_UP.style.display = "flex";
    POP_UP.innerHTML = `
        <img src="${img}">
        <h3>${texto}</h3>
    `

    setTimeout(()=>{
        POP_UP.style.opacity = 0.5;
    }, 500);
    setTimeout(()=>{
        POP_UP.style.opacity = 1;
    }, 1000);

    setTimeout(fecharPopUp, 5000);
}

function fecharPopUp(){
    setTimeout(()=>{
        POP_UP.style.opacity = 0.5;
    }, 500);
    setTimeout(()=>{
        POP_UP.style.opacity = 0;
    }, 1000);
    setTimeout(()=>{
        POP_UP.style.display = "none";
    }, 1050);
}
