const NAMES = [
  "Syliw Vryan",
  "Sonic",
  "Marry",
  "Gerud",
  "Uranus",
  "Ceres",
  "Demeter",
  "Linskov",
  "Minus",
  "Jubileu",
  "Terra",
  "Knowhere",
  "Brazuca-171",
  "Dellinger",
  "StrawHat",
  "Medus",
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

const SPRITES_PLANETAS = [
    "Sprites/planets/planet_1.png",
    "Sprites/planets/planet_2.png",
    "Sprites/planets/planet_3.png",
    "Sprites/planets/planet_4.png",
    "Sprites/planets/planet_5.webp",
    "Sprites/planets/planet_6.png",
    "Sprites/planets/planet_7.png",
    "Sprites/planets/planet_8.webp",
    "Sprites/planets/planet_9.webp",
    "Sprites/planets/planet_10.png",
    "Sprites/planets/planet_11.webp",
    "Sprites/planets/planet_12.webp",
]

function sortearNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortearTaxa(min, max) {
    return (Math.random() * (max - min)) + min;
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
    let dadosJogador = carregarDados();

    const ID = sortearNumero(1, 999);
    const STR_ID = ID.toString();
    nomePlaneta += "-" + STR_ID;

    const TAM_IMAGENS = SPRITES_PLANETAS.length - 1;
    const SPRITE = SPRITES_PLANETAS[sortearNumero(0, TAM_IMAGENS)];

    const HABITAVEL = falue();
    const POPULACAO = HABITAVEL ? sortearNumero(10000, 999999) : 0;
    const FORCA = Math.floor(POPULACAO * sortearTaxa(0.04, 0.09) * (dadosJogador.aumentoForca * 0.75));
    const BONUS = HABITAVEL ? sortearNumero(1, 99) : sortearNumero(100, 999);
    const CUSTO = HABITAVEL ? Math.floor(ultimaCasaComZeros(FORCA) * dadosJogador.perDesconto) : Math.floor(BONUS * sortearNumero(1, 29) *  dadosJogador.perDesconto * 100);

    const RECURSOS = {
        madeira: ultimaCasaComZeros(sortearNumero(1, 9999)),
        pedra: ultimaCasaComZeros(sortearNumero(1, 9999)),
        tungstenio: sortearNumero(1, 1500),
        ferro: sortearNumero(1, 1500),
        vermelhita: ultimaCasaComZeros(sortearNumero(1, 999)),
        diamante: ultimaCasaComZeros(sortearNumero(1, 99))
    }
    const DADOS = {
        nome: nomePlaneta,
        sprite: SPRITE,
        populacao: POPULACAO,
        forca : FORCA,
        recursos: RECURSOS,
        bonus: BONUS,
        custo: CUSTO,
    }
    
    return DADOS;
}
