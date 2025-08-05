/* Setup de Atributos */

const SECOES = document.querySelectorAll("section");
console.log(SECOES);

/* Setup de Funções*/

function mostrarSecao(i, vetor){
    if(i < vetor.length){

        vetor.forEach(secao => {
            if(secao.style.display != "none"){
                setTimeout(()=>{
                    secao.style.opacity = 0;
                }, 200);
                setTimeout(()=>{
                    secao.style.display = "none";
                }, 500);
            }
        });
        setTimeout(()=>{
            vetor[i].style.display = "flex";
        }, 900);
        setTimeout(()=>{
            vetor[i].style.opacity = 1;
        }, 1200);
        
    }
    else{
        let ultimo = vetor.length - 1;
        vetor[ultimo].style.display = "flex";
    }
}



mostrarSecao(0, SECOES)
