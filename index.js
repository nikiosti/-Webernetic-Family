const button = document.getElementById('modal-button')
const modal = document.getElementById('modal')
const closeButton = document.getElementById('close-button')

button.addEventListener('click', () => {
  modal.style.display = 'block'
})

closeButton.addEventListener('click', () => {
  modal.style.display = 'none'
})
