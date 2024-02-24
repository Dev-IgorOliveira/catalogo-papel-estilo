document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu ul");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
});

function expandPhoto(button) {
  var modal = document.getElementById("modal");
  var modalContent = document.getElementById("modal-content");
  var modalImg = document.getElementById("modal-img");
  var photo = button.parentNode.querySelector(".photo-img");
  modalImg.src = photo.src;
  modal.style.display =
    "flex"; /* Altera para "flex" para centralizar verticalmente */
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// // Função para expandir a foto
function expandPhoto(button) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-img");
  var photo = button.parentNode.querySelector(".photo-img");
  modalImg.src = photo.src;
  modal.style.display = "block";

  //   // Adicionando event listener para fechar o modal ao pressionar a tecla ESC
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

function applyUserText() {
  // Obtém o texto digitado pelo usuário no input
  var userText = document.getElementById("user-text").value;

  // Obtém todos os elementos com o ID "static-text"
  var staticTexts = document.querySelectorAll("#static-text");

  // Altera o texto de cada elemento "static-text" para o texto digitado pelo usuário
  staticTexts.forEach(function (staticText) {
    staticText.textContent = userText;
  });
}
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o campo de entrada pelo ID
  var userInput = document.getElementById("user-text");
  // Limpa o valor do campo de entrada
  userInput.value = "";
});
