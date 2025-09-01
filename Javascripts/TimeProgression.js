
const PAINEL_STATUS_El = document.getElementById("Painel-Status");
let pausado = false;

function atualizarStatus(elemento, dias) {
  let dados = carregarDados();
  
  if(dias == 1){ 
    dados.receita += dados.salario;
    dados.dias += 1;
    alterarPropriedade("dias", dados.dias);
    alterarPropriedade("receita", dados.receita);
  }
  let forcaTotal = 0;
  for (let chave of Object.keys(dados.qntEquipamentos)) {
      forcaTotal += Math.floor(getForca(chave) * dados.qntEquipamentos[chave] * dados.aumentoForca);
  }
  for (let chave of Object.keys(dados.agentes)) {
      forcaTotal += Math.floor(getForcaAgentes(chave) * dados.agentes[chave] * dados.aumentoForca);
  }
  alterarPropriedade("forca", forcaTotal);
   
  elemento.innerHTML = `
    <h2>Status:</h2>
    <div id="cabecalho">
        <h3 id="nome">@${dados.nomeJogador}</h3>
    </div>
    <div class="status">
        <img src="Sprites/IU/moon.webp" class="iconStatus" id="sun">
        <p id="dias" class="atributo">${formatarNumero(dados.dias)}</p>
    </div>
    <div class="status">
        <img src="Sprites/IU/coin.png" class="iconStatus">
        <p id="valor" class="atributo">$ ${formatarNumero(dados.receita)}</p>
        <p id="valor" class="green-atributo">+${dados.salario}</p>
    </div>
    <div class="status">
        <img src="Sprites/IU/forca.png" class="iconStatus">
        <p id="forca" class="atributo">${formatarNumero(dados.forca)}</p>
    </div>    
  `;
}

function atualizarPainel(){
    setInterval(() => {
        atualizarStatus(PAINEL_STATUS_El, 0);
    }, 100);
}

function passagemTempo(){
    setInterval(() => {
        if(!pausado){
          atualizarStatus(PAINEL_STATUS_El, 1);
        }
    }, 5000);
}

function pararPassagemTempo(){
    pausado = true;
}
function ativarPassagemTempo(){
    pausado = false;
}

atualizarPainel()
passagemTempo()
