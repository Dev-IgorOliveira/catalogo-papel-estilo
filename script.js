document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu ul");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
});

function expandPhoto(button) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-img");
  var photo = button.parentNode.querySelector(".photo-img");
  modalImg.src = photo.src;
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Função para expandir a foto
function expandPhoto(button) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-img");
  var photo = button.parentNode.querySelector(".photo-img");
  modalImg.src = photo.src;
  modal.style.display = "block";

  // Adicionando event listener para fechar o modal ao pressionar a tecla ESC
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  // Adicionando event listener para fechar o modal ao clicar em qualquer lugar da tela
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
}

// Função para fechar o modal
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Função para as Fontes
function applyUserText() {
  var userText = document.getElementById("user-text").value;
  var fontExamples = document.querySelectorAll(".font-example");
  fontExamples.forEach(function (example) {
    example.textContent = userText;
  });
}
