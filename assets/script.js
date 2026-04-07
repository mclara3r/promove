function toggleSubmenu(id) {
  const submenu = document.getElementById("submenu-" + id);
  submenu.classList.toggle("open");
}

function toggleSubSubmenu(id) {
  const subsubmenu = document.getElementById("subsubmenu-" + id);
  subsubmenu.classList.toggle("open");
}

function mostrar(id) {
  // esconde todas as telas
  const telas = document.querySelectorAll(".tela");
  telas.forEach(t => t.classList.remove("ativa"));

  // mostra a tela selecionada
  const tela = document.getElementById(id);
  if (tela) {
    tela.classList.add("ativa");
  }
}
