function carregarDados() {
  return JSON.parse(localStorage.getItem("dados"));
}

function salvarDados(dados) {
  localStorage.setItem("dados", JSON.stringify(dados));
}
