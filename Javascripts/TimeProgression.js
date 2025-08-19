
const PAINEL_STATUS_El = document.getElementById("Painel-Status");

function atualizarStatus(elemento, dias) {
  let dados = carregarDados();

  if(dias == 1){ /*Se passou de dia*/ 
    dados.receita += dados.salario;
    dados.dias += 1;
  }
  
  salvarDados(dados);

  elemento.innerHTML = `
    <h1>Status:</h1>
    <div id="status">
        <p id="nome">${dados.nomeJogador}</p>
        <p id="dias" class="atributo">Dias Jogados: ${dados.dias}</p>
        <p id="valor" class="atributo">Receita: $${dados.receita}</p>
        <p id="forca" class="atributo">Força = ${dados.forca}</p>
    </div>
  `;
}

function atualizarPainel(){
    setInterval(() => {
        atualizarStatus(PAINEL_STATUS_El, 0);
    }, 250);
}

function ativarPassagemTempo(){
    setInterval(() => {
        atualizarStatus(PAINEL_STATUS_El, 1);
    }, 5000);
}

atualizarPainel()
ativarPassagemTempo()
