// Menu no Header
const navLinks = document.querySelectorAll("header nav a");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

const activePage = () => {
  const header = document.querySelector("header");
  const barsBox = document.querySelector(".bars-box");

  header.classList.remove("active");
  setTimeout(() => {
    header.classList.add("active");
  }, 1100);

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  barsBox.classList.remove("active");
  setTimeout(() => {
    barsBox.classList.add("active");
  }, 1100);

  sections.forEach((section) => {
    section.classList.remove("active");
  });

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

navLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("active")) {
      activePage();

      link.classList.add("active");

      setTimeout(() => {
        sections[idx].classList.add("active");
      }, 1100);
    }
  });
});

// Fim Menu no Header

// Pega todos os botões que têm a classe .resume-btn
const resumeBtns = document.querySelectorAll(".resume-btn");

// Para cada botão...
resumeBtns.forEach((btn, idx) => {
  // Quando clicar no botão...
  btn.addEventListener("click", () => {
    // Pega todos os conteúdos (detalhes) que têm a classe .resume-detail
    const resumeDetails = document.querySelectorAll(".resume-detail");

    // Remove a classe "active" de todos os botões (tira o destaque)
    resumeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Adiciona "active" só no botão clicado (dá o destaque)
    btn.classList.add("active");

    // Esconde todos os conteúdos
    resumeDetails.forEach((detail) => {
      detail.classList.remove("active");
    });

    // Mostra só o conteúdo que corresponde ao botão clicado
    resumeDetails[idx].classList.add("active");
  });
});

// CAROUSEL PROJETOS
const arrowRight = document.querySelector(
  ".portfolio-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portfolio-box .navigation .arrow-left"
);

let index = 0;

const activePortfolio = () => {
  const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
  const portfolioDetails = document.querySelectorAll(".portfolio-detail");

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;

  portfolioDetails.forEach((detail, i) => {
    detail.classList.toggle("active", i === index);
  });
};

arrowRight.addEventListener("click", () => {
  const maxIndex = document.querySelectorAll(".portfolio-detail").length - 1;
  if (index < maxIndex) {
    index++;
    arrowLeft.classList.remove("disabled");
  }
  if (index === maxIndex) {
    arrowRight.classList.add("disabled");
  }
  activePortfolio();
});

arrowLeft.addEventListener("click", () => {
  if (index > 0) {
    index--;
    arrowRight.classList.remove("disabled");
  }
  if (index === 0) {
    arrowLeft.classList.add("disabled");
  }
  activePortfolio();
});
