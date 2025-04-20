// INICIALIZAÇÃO
// Aguarda o carregamento completo do DOM antes de executar o código
// Isso evita erros ao tentar manipular elementos que ainda não foram carregados
document.addEventListener("DOMContentLoaded", function () {
  // CARROSSEL PRINCIPAL (BANNER)
  // Inicializa o Swiper para o banner principal com as seguintes configurações:
  const heroSwiper = new Swiper(".hero-swiper", {
    loop: true, // Permite rolagem infinita (volta ao primeiro slide após o último)
    effect: "fade", // Efeito de transição entre slides (fade = desvanecimento)
    speed: 1000, // Velocidade da transição em milissegundos
    autoplay: {
      delay: 5000, // Tempo entre cada slide (5 segundos)
      disableOnInteraction: false, // Continua o autoplay mesmo após interação do usuário
    },
    pagination: {
      el: ".swiper-pagination", // Elemento que contém os pontos de navegação
      clickable: true, // Permite clicar nos pontos para navegar
    },
    navigation: {
      nextEl: ".swiper-button-next", // Botão para próximo slide
      prevEl: ".swiper-button-prev", // Botão para slide anterior
    },
    fadeEffect: {
      crossFade: true, // Ensures proper fading between slides
    },
  });

  // CARROSSEL DE PRODUTOS
  // Inicializa o Swiper para a seção de produtos com configurações responsivas
  const productsSwiper = new Swiper(".products-swiper", {
    slidesPerView: 1, // Número de slides visíveis por vez
    spaceBetween: 30, // Espaço entre os slides em pixels
    loop: true, // Permite rolagem infinita
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // Configurações responsivas para diferentes tamanhos de tela
      640: { slidesPerView: 2 }, // Em telas >= 640px, mostra 2 slides
      768: { slidesPerView: 3 }, // Em telas >= 768px, mostra 3 slides
      1024: { slidesPerView: 4 }, // Em telas >= 1024px, mostra 4 slides
    },
  });

  // FUNCIONALIDADE DE BUSCA
  // Seleciona os elementos necessários para a busca
  const searchInput = document.getElementById("search-input"); // Campo de input
  const searchButton = document.getElementById("search-button"); // Botão de busca
  const searchResult = document.getElementById("search-result"); // Área de resultados

  // Função que executa a busca
  function performSearch() {
    const searchTerm = searchInput.value.trim(); // Remove espaços em branco
    if (searchTerm) {
      // Se houver termo de busca
      searchResult.textContent = `Você buscou por: '${searchTerm}'`; // Mostra o resultado
      searchResult.style.display = "block"; // Exibe a área de resultados
    } else {
      searchResult.textContent = "Por favor, insira um termo para buscar."; // Mensagem de erro
      searchResult.style.display = "block"; // Exibe a área de resultados
    }
  }

  // EVENT LISTENERS PARA BUSCA
  // Adiciona eventos para executar a busca
  searchButton.addEventListener("click", performSearch); // Ao clicar no botão
  searchInput.addEventListener("keydown", (event) => {
    // Ao pressionar Enter no campo de busca
    if (event.key === "Enter") {
      event.preventDefault(); // Evita o comportamento padrão do Enter
      performSearch();
    }
  });

  // EFEITOS DE HOVER NOS CARDS
  // Adiciona efeito de elevação ao passar o mouse sobre os cards
  const courseCards = document.querySelectorAll(".course-card");
  courseCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)"; // Move o card para cima
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"; // Retorna o card à posição original
    });
  });

  // EFEITOS DE CLIQUE NOS BOTÕES
  // Adiciona efeito de escala ao clicar nos botões
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.style.transform = "scale(0.95)"; // Reduz o tamanho do botão
      setTimeout(() => {
        this.style.transform = "scale(1)"; // Retorna ao tamanho original após 200ms
      }, 200);
    });
  });

  // Product navigation
  const prevArrow = document.querySelector(".prev-arrow");
  const nextArrow = document.querySelector(".next-arrow");
  const productsGrid = document.querySelector(".products-grid");

  if (prevArrow && nextArrow && productsGrid) {
    let scrollAmount = 0;
    const scrollStep = 300;

    nextArrow.addEventListener("click", () => {
      scrollAmount += scrollStep;
      if (scrollAmount > productsGrid.scrollWidth - productsGrid.clientWidth) {
        scrollAmount = productsGrid.scrollWidth - productsGrid.clientWidth;
      }
      productsGrid.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    });

    prevArrow.addEventListener("click", () => {
      scrollAmount -= scrollStep;
      if (scrollAmount < 0) {
        scrollAmount = 0;
      }
      productsGrid.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    });
  }
});
