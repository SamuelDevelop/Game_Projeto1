let dadosCopia = carregarDados();
console.log(dadosCopia);

function alterarPropriedade(caminho, novoValor) {
    let partes = caminho.split(".");
    let obj = dadosCopia;

    for (let i = 0; i < partes.length - 1; i++) {
        if (!obj[partes[i]]) obj[partes[i]] = {}; 
        obj = obj[partes[i]];
    }

    obj[partes[partes.length - 1]] = novoValor;
}


setInterval(()=>{
    salvarDados(dadosCopia);
}, 100);

