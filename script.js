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
    "assets/img0.jpg",
    "assets/img1.jpg",
    "assets/img2.jpg",
    "assets/img3.jpg",
    "assets/img4.jpg",
  ],
  2: [
    "assets/img5.jpg",
    "assets/img6.jpg",
    "assets/img7.jpg",
    "assets/img8.jpg",
    "assets/img9.jpg",
  ],
  3: [
    "assets/img10.jpg",
    "assets/img11.jpg",
    "assets/img12.jpg",
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