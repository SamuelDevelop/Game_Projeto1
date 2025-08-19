const NAMES = [
  "Syliw Vryan",
  "Soltheris",
  "Aroveth",
  "Alyndra",
  "Kanion",
  "Klythera",
  "Zerathis",
  "Zysphera",
  "Yandora",
  "Yapon",
  "Phoros",
  "Pyrrath",
  "Ifaarland",
  "Isengard",
  "Von Harthen",
  "Vulcan",
  "Elsia",
  "Chronos",
  "Orion",
  "Ordena"
];

function sortearNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function falue(){
    let n = sortearNumero(0, 1);
    if(n == 0){
        return true;
    }
    else{
        return false;
    }
}

function gerarPlaneta(){
    const TAM_NAME = NAMES.length - 1;
    let nomePlaneta = NAMES[sortearNumero(0, TAM_NAME)];
    const ID = sortearNumero(1, 999);
    const STR_ID = ID.toString();
    nomePlaneta += "-" + STR_ID;
    console.log(nomePlaneta);
    const HABITAVEL = falue();
    const POPULACAO = HABITAVEL ? sortearNumero(10000, 999999999) : 0;
    console.log(POPULACAO)
}

gerarPlaneta()