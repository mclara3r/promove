function mostrar(id) {
  document.querySelectorAll('.tela').forEach(tela => {
    tela.classList.remove('ativa')
  })

  document.getElementById(id).classList.add('ativa')
}

function toggleSubmenu(nome) {
  const submenu = document.getElementById('submenu-' + nome)
  const botao = submenu.previousElementSibling

  submenu.classList.toggle('aberto')
  botao.classList.toggle('aberto')
}
