(function(){
  emailjs.init("ZTSfEI8gDAk6ts5pd");
})();

const leadForm = document.getElementById("lead-form");

leadForm.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_a17wkvo",
    "template_vhl2ep9",
    this
  ).then(function() {
      alert("Mensagem enviada com sucesso! Entraremos em contacto brevemente.");
      leadForm.reset();
      formOverlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll");
  }, function(error) {
      alert("Ocorreu um erro. Tente novamente.");
      console.log(error);
  });
});

function showMore(){
  document.querySelectorAll('.hidden').forEach(el => {
    el.classList.remove('hidden');
  });
  document.getElementById('fade').style.display = "none";
}

const images = document.querySelectorAll('.photo img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

function showImage(index) {
  currentIndex = index;
  lightboxImg.src = images[index].src;
  lightbox.classList.add('active');
}

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    showImage(index);
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

/* Fechar ao clicar fora */
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});

/* Navegação por teclado */
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;

  if (e.key === 'ArrowRight') nextBtn.click();
  if (e.key === 'ArrowLeft') prevBtn.click();
  if (e.key === 'Escape') lightbox.classList.remove('active');
});







const projects = document.querySelectorAll(".project");
const projectView = document.getElementById("project-view");
const projectContent = document.getElementById("project-content");
const closeProject = document.querySelector(".close-project");

/* IMAGENS DE CADA PROJETO */
const projectImages = {
  1: [
    "assets/web Ramiro Domingos/01_Cozinha-01_web.webp",
    "assets/web Ramiro Domingos/01_Cozinha-02_web.webp",
    "assets/web Ramiro Domingos/02_Sala-01_web.webp",
    "assets/web Ramiro Domingos/02_Sala-02_web.webp",
    "assets/web Ramiro Domingos/03_Quarto1-01_web.webp",
    "assets/web Ramiro Domingos/03_Quarto1-02_web.webp",
    "assets/web Ramiro Domingos/04_Quarto2-01_web.webp",
    "assets/web Ramiro Domingos/04_Quarto2-021_web.webp",
    "assets/web Ramiro Domingos/05_Banho-01_web.webp",
    "assets/web Ramiro Domingos/05_Banho-02_web.webp",
    "assets/web Ramiro Domingos/06_Entrada-01_web.webp",
    "assets/web Ramiro Domingos/07_Patamar-01_web.webp",
    "assets/web Ramiro Domingos/08_Escadas-01_web.webp",
    "assets/web Ramiro Domingos/09_EntradaPrédio-01_web.webp",
    "assets/web Ramiro Domingos/11_Exterior-01_web.webp",
  ],
  2: [
    "assets/web Cláudia Silva/01_Cozinha_1_web.webp",
    "assets/web Cláudia Silva/01_Cozinha_2_web.webp",
    "assets/web Cláudia Silva/02_Sala_1_web.webp",
    "assets/web Cláudia Silva/02_Sala_2_web.webp",
    "assets/web Cláudia Silva/02_Sala_3_web.webp",
    "assets/web Cláudia Silva/03_Corredor_1_web.webp",
    "assets/web Cláudia Silva/04_Quarto1_1_web.webp",
    "assets/web Cláudia Silva/04_Quarto1_2_web.webp",
    "assets/web Cláudia Silva/05_Quarto2_1_web.webp",
    "assets/web Cláudia Silva/05_Quarto2_2_web.webp",
    "assets/web Cláudia Silva/06_Banho_1_web.webp",
    "assets/web Cláudia Silva/06_Banho_2_web.webp",
    "assets/web Cláudia Silva/07_Patamar_1_web.webp",
    "assets/web Cláudia Silva/08_Entrada_1_web.webp",
    "assets/web Cláudia Silva/09_Prédio_1_web.webp",
  ],
  3: [
    "assets/web António Viana/01_SalaCozinha_1_web.webp",
    "assets/web António Viana/02_Cozinha_1_web.webp",
    "assets/web António Viana/03_Sala_1_web.webp",
    "assets/web António Viana/04_Suite_1_web.webp",
    "assets/web António Viana/04_Suite_2_web.webp",
    "assets/web António Viana/05_SuiteBanho_1_web.webp",
    "assets/web António Viana/05_SuiteBanho_2_web.webp",
    "assets/web António Viana/05_SuiteBanho_3_web.webp",
    "assets/web António Viana/06_Quarto1_1_web.webp",
    "assets/web António Viana/06_Quarto1_2_web.webp",
    "assets/web António Viana/06_Quarto1_3_web.webp",
    "assets/web António Viana/07_Quarto2_1_web.webp",
    "assets/web António Viana/07_Quarto2_2_web.webp",
    "assets/web António Viana/08_Banho_1_web.webp",
    "assets/web António Viana/08_Banho_2_web.webp",
    "assets/web António Viana/09_Corredor_1_web.webp",
    "assets/web António Viana/09_Corredor_2_web.webp",
    "assets/web António Viana/10_Patamar_1_web.webp",
    "assets/web António Viana/11_Entrada_1_web.webp",
    "assets/web António Viana/12_Prédio_1_web.webp",
  ],
  4: [
    "assets/img13.jpg",
    "assets/img14.jpg"
  ]
};

projects.forEach(project => {
  project.addEventListener("click", () => {
    const id = project.dataset.project;
    const images = projectImages[id];

    projectContent.innerHTML = "";

    images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      projectContent.appendChild(img);
    });

    projectView.classList.add("active");
    document.body.classList.add("no-scroll");
document.documentElement.classList.add("no-scroll");
  });
});

closeProject.addEventListener("click", () => {
  projectView.classList.remove("active");
  document.body.classList.remove("no-scroll");
document.documentElement.classList.remove("no-scroll");
});






const openForm = document.getElementById("open-form");
const formOverlay = document.getElementById("contact-form-overlay");
const closeContact = document.querySelector(".close-contact");

openForm.addEventListener("click", () => {
  formOverlay.classList.add("active");
  document.body.classList.add("no-scroll");
  document.documentElement.classList.add("no-scroll");
});

closeContact.addEventListener("click", () => {
  formOverlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
  document.documentElement.classList.remove("no-scroll");
});