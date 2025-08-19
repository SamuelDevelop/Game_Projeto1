/* Setup de Atributos */

const SECOES = document.querySelectorAll("section");
console.log(SECOES);

/* Setup de Funções*/

function mostrarSecao(i, vetor){
    
    let dadosJogador = carregarDados() || {};
    preencherInventario(dadosJogador, i);

    if(i < vetor.length){
        vetor.forEach(secao => {
            if(secao.style.display != "none"){
                    secao.style.display = "none";
            }
        });
        vetor[i].style.display = "flex";
    }

    else{
        let ultimo = vetor.length - 1;
        vetor[ultimo].style.display = "flex";
    }
}

