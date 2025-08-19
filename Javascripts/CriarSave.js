function validar() {
            const nome = document.getElementById("nome").value.trim();
            if (nome === "") {
                alert("Por favor, preencha o campo!");
                return;
            }
            else{
                salvarDadosSave(nome);
                window.location.replace("game.html");
            }
}

function salvarDadosSave(nome){
    let dadosJogador = carregarDados() || {};
    dadosJogador.nomeJogador = nome;
    salvarDados(dadosJogador);
}