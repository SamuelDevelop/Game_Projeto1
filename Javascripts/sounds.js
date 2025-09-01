const BOTAO_SOM = document.getElementById("som");
const PLAYER = document.getElementById("player");
let ligado = false;
let musicas = [
    "musicas/Majoras Mask Astral Observatory Music.mp3",
    "musicas/Sonic CD Ost (Menu Theme).mp3"
];
let indice = 0;

function ativarMusica(){
    PLAYER.play();
}
function desativarMusica(){
    PLAYER.pause();
}
function trocarMusica(){
    indice = (indice + 1) % musicas.length;
    PLAYER.src = musicas[indice];
    if(ligado) PLAYER.play();
}

BOTAO_SOM.addEventListener("click", ()=>{
    if(!ligado){
        ligado = true;
        ativarMusica();
        BOTAO_SOM.innerHTML = `<button>
        <img src="Sprites/IU/som.png" width="54px" height="54px">
        </button>`;
    } else {
        ligado = false;
        desativarMusica();
        BOTAO_SOM.innerHTML = `<button>
        <img src="Sprites/IU/semSom.png" width="54px" height="54px">
        </button>`;
    }
});