const SAVES = document.getElementById("saves");
if (localStorage.getItem("dados")) {
    let dadosJogador = carregarDados();
    SAVES.innerHTML = `
        <div id="quadrado">
            <h1>Seu Save: ${dadosJogador.nomeJogador}</h1>
            <div class="status">
                <img src="Sprites/IU/calendar.png" class="iconStatus">
                <p id="dias" class="atributo">${dadosJogador.dias}</p>
            </div>
            <div class="status">
                <img src="Sprites/IU/coin.png" class="iconStatus">
                <p id="valor" class="atributo">$ ${dadosJogador.receita}</p>
            </div>
            <div class="status">
                <img src="Sprites/planets/planet_1.png" class="iconStatus">
                <p id="forca" class="atributo">${dadosJogador.planetasConquistados.length}</p>
            </div>
        </div>
        <button onclick="window.location.href='game.html'" class="main-Button"> Jogar</button>
        <button onclick="deletarDados()" class="main-Button"> Deletar Save</button>
    `;
}
else{
    SAVES.innerHTML = `
        <button onclick="window.location.href='criarJogo.html'" class="main-Button"> Novo Jogo</button>
    `;
}