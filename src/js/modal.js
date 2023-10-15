let modal = document.querySelector('.modal')
let modalClose = document.querySelector('.modal__close')
let buttons = document.querySelectorAll('.aside__button')
let modalButton = document.querySelector('.modal__button')


let inputMask = document.querySelector('#phone')
let maskOptions = {
mask: '(000) 000-00-00',
lazy: true,
placeholderChar: '9' 
}
let mask = new IMask(inputMask, maskOptions)

modalClose.addEventListener('click', () => {
  modal.style.opacity = 0
  modal.style.visibility = 'hidden'
})

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.visibility = 'visible'
    modal.style.opacity = 1
  })
})
inputMask.addEventListener('input', () => {
if(inputMask.value.length === 15){
    modalButton.disabled = false
    modalButton.style.cursor = 'pointer'
  }else{
    modalButton.disabled = true
    modalButton.style.cursor = 'default'
  }
})
modalButton.addEventListener("click", (e) => {
  e.preventDefault()
  location.reload()
})