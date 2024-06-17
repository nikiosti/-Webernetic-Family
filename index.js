const button = document.getElementById('modal__button')
const modal = document.getElementById('modal')

button.addEventListener('click', () => {
  modal.style.display = 'block'
})

const closeButton = document.getElementById('closeButton')
closeButton.addEventListener('click', () => {
  modal.style.display = 'none'
})
