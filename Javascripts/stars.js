(function () {
  const SKY_ID = "sky";
  const MAX_STARS = 220;       // limite total na tela
  const INITIAL_STARS = 160;   // quantas criar na largada
  const ADD_EVERY_MS = 1200;   // intervalo para adicionar novas
  const REMOVE_PROB = 0.25;    // chance de remover uma antiga quando lotado

  // cria o contêiner se não existir
  let sky = document.getElementById(SKY_ID);
  if (!sky) {
    sky = document.createElement("div");
    sky.id = SKY_ID;
    document.body.appendChild(sky);
  }

  const rand = (min, max) => Math.random() * (max - min) + min;

  function createStar({ enter = false } = {}) {
    const star = document.createElement("span");
    star.className = "star" + (enter ? " enter" : "");

    // tamanho: mais pequenas são mais realistas; às vezes uma maior para dar variedade
    const size = Math.random() < 0.85 ? rand(1, 2.2) : rand(2.4, 3.6);
    const dur = rand(2.2, 5.5);      // duração do "piscar"
    const delay = rand(0, 3.5);      // atraso inicial

    // posicionamento
    const { clientWidth: W, clientHeight: H } = sky;
    const left = rand(0, W);
    const top = rand(0, H);

    star.style.setProperty("--size", `${size}px`);
    star.style.setProperty("--dur", `${dur}s`);
    star.style.setProperty("--delay", `${delay}s`);
    star.style.left = `${left}px`;
    star.style.top = `${top}px`;

    // densidade: mais estrelas no topo (parece um céu mais profundo)
    // (opcional) podemos ajustar a opacidade base conforme a altura
    const depthFade = 0.6 + 0.4 * (1 - top / H); // 1.0 no topo, 0.6 embaixo
    star.style.opacity = depthFade;

    sky.appendChild(star);

    // remove a classe enter depois da animação de entrada
    if (enter) {
      setTimeout(() => star.classList.remove("enter"), 650);
    }

    return star;
  }

  function seed() {
    for (let i = 0; i < INITIAL_STARS; i++) {
      createStar();
    }
  }

  function addLoop() {
    setInterval(() => {
      const current = sky.querySelectorAll(".star").length;

      if (current < MAX_STARS) {
        // adiciona 1–3 estrelas novas
        const toAdd = Math.floor(rand(1, 4));
        for (let i = 0; i < toAdd && sky.querySelectorAll(".star").length < MAX_STARS; i++) {
          createStar({ enter: true });
        }
      } else if (Math.random() < REMOVE_PROB) {
        // remove uma aleatória para dar “vida”
        const stars = sky.querySelectorAll(".star");
        if (stars.length) {
          const idx = Math.floor(rand(0, stars.length));
          stars[idx].remove();
        }
      }
    }, ADD_EVERY_MS);
  }

  // reajusta posições ao redimensionar (opcional, simples: limpar e reseed)
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      sky.innerHTML = "";
      seed();
    }, 200);
  });

  seed();
  addLoop();
})();


/* Gera uma estrela cadente única e aleatória (vai para a esquerda)
   Cada estrela é removida depois de executar a animação 1 vez. */
function spawnShootingStar() {
  const s = document.createElement('div');
  s.className = 'shooting-star single';
  const top = 5 + Math.random() * 30;            // posição vertical inicial (5% a 35%)
  const left = 70 + Math.random() * 30;          // começa pra direita (70% a 100%)
  const dur = 0.9 + Math.random() * 1.6;         // duração aleatória
  const delay = Math.random() * 6;               // delay aleatório

  s.style.top = top + '%';
  s.style.left = left + '%';
  s.style.setProperty('--dur', dur + 's');
  s.style.setProperty('--delay', delay + 's');

  document.getElementById('sky').appendChild(s);

  // remove o elemento após terminar (duração + delay + margem)
  setTimeout(() => s.remove(), (dur + delay) * 1000 + 500);
}

// exemplo: cria uma estrela a cada 2.5s
setInterval(spawnShootingStar, 2500);
