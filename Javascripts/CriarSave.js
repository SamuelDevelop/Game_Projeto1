const bandeiras = [
    "Sprites/flags/1.png",
    "Sprites/flags/2.png",
    "Sprites/flags/3.png",
    "Sprites/flags/4.png",
    "Sprites/flags/5.png"
]
const BANDEIRA_MOSTRADA = document.getElementById("flag-choose");
let bandeira_Alvo = BANDEIRA_MOSTRADA.src;
console.log(bandeira_Alvo)
let index_flag = 0;
const seletorClasses = document.getElementById("classes");
const DESCRICAO_CLASSES = document.getElementById("descricao-classe");
let classe_Alvo = CABECA;

seletorClasses.addEventListener("change", () => {
    let classe = seletorClasses.value;
    if(classe == "a"){
        DESCRICAO_CLASSES.innerHTML = `Tempo de Pesquisa pequeno, preços menores, porém é ligeiramente mais fraco em outros quesitos`;
        classe_Alvo = CABECA;
    }
    else if(classe == "b"){
        DESCRICAO_CLASSES.innerHTML = `50% a mais de força militar e os trabalhos acabam mais rápido porém os preços são maiores e leva mais tempo pra pesquisar`;
        classe_Alvo = BRACO;
    }
    else if(classe == "c"){
        DESCRICAO_CLASSES.innerHTML = `Preços baixos, maior arrecadação de impostos, força e tempo de pesquisa medianos`;
        classe_Alvo = BOCA;
    }
    else if(classe == "d"){
        classe_Alvo = CONQUISTADOR;
        DESCRICAO_CLASSES.innerHTML = `3 vezes mais forte militarmente, porém em outros quesitos é fraco`;
    }
    else if(classe == "e"){
        classe_Alvo = CIENTISTA;
        DESCRICAO_CLASSES.innerHTML = `Muito inteligente as pesquisas são muito rápidas , porém em outros quesitos é fraco`;
    }
});

function trocarbandeira(){
    BANDEIRA_MOSTRADA.src = bandeiras[index_flag]
    bandeira_Alvo = bandeiras[index_flag];
    console.log(bandeira_Alvo)
    if(index_flag == bandeiras.length - 1){
        index_flag = 0;
    }
    else{
        index_flag ++;
    }
}

function validar() {
            const nome = document.getElementById("nome").value.trim();
            const nomeImperio = document.getElementById("impNome").value.trim();
            if (nome === "") {
                alert("Por favor coloque um nome!");
                return;
            }
            if(nomeImperio == ""){
                alert("Por favor, nomeie seu império!");
                return;
            }
            else{
                criarDados(nome, nomeImperio, bandeira_Alvo, classe_Alvo);
                window.location.replace("game.html");
            }
}


