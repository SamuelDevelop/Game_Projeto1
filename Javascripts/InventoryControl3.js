const SEC_ADMIN = document.getElementById("sec10");

function precAdministracao(){
    let dadosJogador = carregarDados();

    let htmlString = `
      <h1>Adiministração:</h1>
      <img id="bandeira-show" src="${dadosJogador.bandeira}">
      <h3>Bem vindo ${dadosJogador.nomeJogador}, o império: "${dadosJogador.nomeImperio}" está a suas ordens!
        ${dadosJogador.nomeImperio} nunca esteve em mãos melhores! Após uma melhora na economia no governo de seu pai: 
        "Imperador: ${dadosJogador.nomeJogador} Primeiro", a população está confiante e paga seus impostos diariamente!
        Agora o foco está na Expansão Espacial!
      </h3>
      <h2>Dados:</h2>
      <div id="Painel-Status">
        <div class="status">
            <img src="Sprites/IU/coin.png" class="greenIconStatus">
            <p id="valor" class="green-atributo">Receita Diária: $${dadosJogador.salario}</p>
        </div>
        <div class="status">
            <img src="Sprites/IU/forca.png" class="greenIconStatus">
            <p id="valor" class="green-atributo">Taxa de Força: ${Math.floor(dadosJogador.aumentoForca * 100)}%</p>
        </div>
        <div class="status">
            <img src="Sprites/IU/calendar.png" class="greenIconStatus">
            <p id="valor" class="green-atributo">Pesquisa: ${dadosJogador.tempPesquisa} dias</p>
        </div>
        <div class="status">
            <img src="Sprites/IU/coin.png" class="redIconStatus">
            <p id="valor" class="red-atributo" title="Pesquisar Fica mais caro a cada nova pesquisa!">Custo de Pesquisa Atual: $${dadosJogador.custoPesquisa}</p>
        </div>
        <div class="status">
            <img src="Sprites/IU/calendar.png" class="greenIconStatus">
            <p id="valor" class="green-atributo" title="dias que levam para contratar agentes ou construção">Trabalhos: ${dadosJogador.tempTrabalho} dias</p>
        </div>
      </div>
    `;

    SEC_ADMIN.innerHTML = htmlString;
}

const SEC_CONQUISTA = document.getElementById("sec9");

function precConquistas(){

    let dadosJogador = carregarDados();
    let htmlString = `<h1>(${dadosJogador.numConquistas}/12) Conquistas:</h1>
                    <div class="inventario">
                          <div class="${getConquistaClass(0)}">
                              <h2>Cliente De Primeira Viagem!</h2>
                              <h3>Faça Sua Primeira Compra</h3>
                          </div>
                          <div class="${getConquistaClass(1)}">
                              <h2>De tudo Um Pouco!</h2>
                              <h3>Compre um recurso de cada, madeira, pedra...</h3>
                          </div>
                          <div class="${getConquistaClass(2)}">
                              <h2>Construtor</h2>
                              <h3>Construa algum equipamento!</h3>
                          </div>
                          <div class="${getConquistaClass(3)}">
                              <h2>Bob o Construtor!</h2>
                              <h3>Construa um equipamento de cada, nave de guerra, onibus espacial...</h3>
                          </div>
                          <div class="${getConquistaClass(4)}">
                              <h2>Maldito Colono!</h2>
                              <h3>Colonize algum planeta</h3>
                          </div>
                          <div class="${getConquistaClass(5)}">
                              <h2>Nasce um Império!</h2>
                              <h3>Vença uma batalha e anexe um planeta!</h3>
                          </div>
                          <div class="${getConquistaClass(6)}">
                              <h2>Onde os fracos não tem vez?</h2>
                              <h3>Perca uma batalha. Haja humilhação...</h3>
                          </div>
                          <div class="${getConquistaClass(7)}">
                              <h2>Bom Contratante!</h2>
                              <h3>Contrate um agente</h3>
                          </div>
                          <div class="${getConquistaClass(8)}">
                              <h2>Mestre Grande é!</h2>
                              <h3>Contrate um agente da raça dos Jedi</h3>
                          </div>
                          <div class="${getConquistaClass(9)}">
                              <h2>Cienceiro!</h2>
                              <h3>Faça Ciência! Pesquise alguma coisa</h3>
                          </div>
                          <div class="${getConquistaClass(10)}">
                              <h2>Evolução!</h2>
                              <h3>Faça uma pesquisa de cada</h3>
                          </div>
                          <div class="${getConquistaClass(11)}">
                              <h2>Colosso Impérial!</h2>
                              <h3>Colonize/Anexe 100 planetas. Haja trabalho...</h3>
                          </div>
                          <div class="${getConquistaClass(12)}">
                              <h2>São os Anbu!</h2>
                              <h3>Contrate 100 caçadores especiais</h3>
                          </div>
                    </div> 
  `;


  SEC_CONQUISTA.innerHTML = htmlString;
}