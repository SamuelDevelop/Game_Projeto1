const TELA_DE_MENSAGEM = document.getElementById("mensagem");

function mostrarMensagem(id){
    let stringHtml = `  <h1>Mensagem de Erro</h1>
                        <p>Não foi possivel mostrar a mensagem o id: em MensagerControl.js está errado!</p>
                        <button onclick="fecharMensagem()">Fechar</button>`;

    if(id == 0){
        stringHtml = `  <h1>Dinheiro Insuficiente!</h1>
                        <p>Você não possui dinheiro para comprar este item, você pode conseguir mais dinheiro aumentando sua receita diária ou vendendo itens</p>
                        <button onclick="fecharMensagem()">Fechar</button>`;
    }

    TELA_DE_MENSAGEM.innerHTML = stringHtml;
    TELA_DE_MENSAGEM.style.display = "flex";
}

function fecharMensagem(){
    TELA_DE_MENSAGEM.style.display = "none";
}