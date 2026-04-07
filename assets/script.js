function mostrar(id) {
  document.querySelectorAll('.tela').forEach(tela => {
    tela.classList.remove('ativa')
  })

  document.getElementById(id).classList.add('ativa')
}
