function carregarDados() {
    return JSON.parse(localStorage.getItem("dados"));
}

function salvarDados(dados) {
    localStorage.setItem("dados", JSON.stringify(dados));
}

function formatarNumero(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


function ultimaCasaComZeros(num) {
    const str = num.toString();
    const primeiro = str[0];                  
    const zeros = "0".repeat(str.length - 1);
    return parseInt(primeiro + zeros);
}

if(document.getElementById("logo")){
  const LOGO = document.getElementById("logo");
  LOGO.addEventListener("click", ()=>{
      window.location.href='index.html';
  })
}

const BOTOES_SECAO = document.querySelectorAll(".botaoSecao")
BOTOES_SECAO.forEach(botao => {
    
    botao.dataset.corOriginal = getComputedStyle(botao).backgroundColor;

    botao.addEventListener("click", () => {
        
        BOTOES_SECAO.forEach(b => {
            b.style.backgroundImage = "linear-gradient(rgb(33, 110, 255) ,rgb(9, 95, 255),rgb(0, 61, 175))";
        });

        botao.style.backgroundImage = "linear-gradient(transparent, transparent)";
        botao.style.backgroundColor = "white";
    });
});

function piscarBotao(id){
    let botao = BOTOES_SECAO[id];
    botao.dataset.corOriginal = getComputedStyle(botao).backgroundColor;

    setTimeout(()=>{
        BOTOES_SECAO[id].style.backgroundColor = "red";
    }, 500)

    setTimeout(()=>{
        BOTOES_SECAO[id].style.backgroundColor = botao.dataset.corOriginal;
    }, 2000)
}

let devToolsOn = false;
const FERRAMENTAS = document.getElementById("ferramentas");
const FERRAMENTAS_Log = document.getElementById("sec-Dev-Tools");

function ativarDev(){
    if(devToolsOn){
        devToolsOn = false;
        FERRAMENTAS.style.display = "none";
        FERRAMENTAS_Log.style.display = "none";
    }
    else if(!devToolsOn){
        devToolsOn = true;
        FERRAMENTAS.style.display = "block";
        FERRAMENTAS_Log.style.display = "block";
    }
}