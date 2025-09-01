
const SENHA = "bC-56,h07x'l";
const SECAO_DEV = document.getElementById("sec-Dev-Tools");

function VmUXv9h4I6Rk(){
    const SENHA_DIGITADA = document.getElementById("dev-pass").value;
    if(SENHA_DIGITADA == SENHA){
        window.alert("Seja bem vindo Samuel");
        SECAO_DEV.innerHTML = `
        <button onclick="resetarDados()">Resetar</button>
        <button onclick="quebrarDados()">Quebrar o Jogo</button>"`;
    }
}

const BOTAO_ACAO = document.getElementById("acao");
let pausar = true;

BOTAO_ACAO.addEventListener("click", ()=>{
    if(pausar){
        pausar = false;
        BOTAO_ACAO.innerHTML = `
        <button onclick="ativarPassagemTempo()">
            <img src="Sprites/IU/play.png" width="54px" height="54px">
        </button> 
        `
    }
    else{
        pausar = true;
        BOTAO_ACAO.innerHTML = `
            <button onclick="pararPassagemTempo()" >
                <img src="Sprites/IU/pause.png" width="54px" height="54px">
            </button>
        `
    }
})