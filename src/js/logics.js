let presentDirect = document.querySelector('.present__directroom')
let furnitureList = document.querySelector('.aside__price__list')
let swiperSlide = document.querySelectorAll('.swiper-slide')

let flag = true
window.addEventListener('DOMContentLoaded', () => {
  fetch('https://6529c43d55b137ddc83f22c7.mockapi.io/api/v1/furniture')
  .then(response => response.json())
  .then(data => renderFurniture(data))
  .catch((err) => {
    alert("Ошибка загрузки данных", err)
  })
  
})
function renderFurniture(items){
  
    items.forEach(item => {
      presentDirect.innerHTML += `
            <div id="itemInfo" class="present__photo__item-${item.id}">
              <p class="present__photo__item__number ">${item.id}</p>
              <div class="present__photo__item__info">
                <p>${item.title}</p>
                <p>от ${item.price} руб</p>
              </div>
            </div>
      `
      swiperSlide[0].innerHTML += `
      <div id="itemInfo" class="present__photo__item-${item.id}">
              <p class="present__photo__item__number ">${item.id}</p>
              <div class="present__photo__item__info">
                <p>${item.title}</p>
                <p>от ${item.price} руб</p>
              </div>
            </div>
      `
      furnitureList.innerHTML += `
      <li class="aside__price__item item__info">
      <div class="item__info-flex">
        <p class="item__info__index">${item.id}</p>
        <p class="item__info__text">${item.title} </p>
      </div>
      <div class="item__info__current-block">
        <p class="item__info__current-price">от <span id="item-price">${item.price}</span> руб</p>
        <div class="item__info__current-info">
          <input step="1" max="10" min="0" class="item__info__current__input" readonly type="number" value="0" />
          <div class="item__info__current-buttons">
            <button class="item__info__current-up"><img src="./assets/buttonArrow.svg" alt="arrow up"></button>
            <button disabled class="item__info__current-down"><img src="./assets/buttonArrow.svg" alt="arrow down"></button>
          </div>
        </div>
      </div> 
    </li>
      `
    });

    changeInputValue()
    if(document.documentElement.clientWidth >= 400){
      openModalOfDirectRoom()
    }
    
}

function changeInputValue(){
  let buttonUp = document.querySelectorAll('.item__info__current-up')
  let buttonDown = document.querySelectorAll('.item__info__current-down')
  let currentInput = document.querySelectorAll('.item__info__current__input')

  
  buttonUp.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      let numberInput = +(currentInput[index].value)
      numberInput += 1
      currentInput[index].value = numberInput
      
      if(currentInput[index].value == 1){
        buttonDown[index].disabled = false
      } 

      if(currentInput[index].value >= 10){
        btn.disabled = true
      } else{
        btn.disabled=  false
      }

      countPrice(currentInput)
    })
  })
  buttonDown.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      let numberInput = +(currentInput[index].value)
      numberInput -= 1
      currentInput[index].value = numberInput


      if(currentInput[index].value == 0){
        btn.disabled = true
      } else{
        btn.disabled=  false
      }

      if(currentInput[index].value == 9){
        buttonUp[index].disabled = false
      }

      countPrice(currentInput)
    })
  })
}

function countPrice(inputArray){
  let finalyPriceBlock = document.querySelector('.aside__cost')
  let finalyPriseInfoBlock = document.querySelector('.aside__finaly__price')
  let finalyPrice =  document.querySelector('.aside__cost__info__final')
  let itemInfoCurrentPrice = document.querySelectorAll('#item-price')
  let finalyPriceNumber = 0;
let inputValueArr = []
  inputArray.forEach(input => {
    inputValueArr.push(input.value)
  })
if(inputValueArr.every(value => value == 0)){
  finalyPriseInfoBlock.style.display = 'flex'
finalyPriceBlock.style.display = 'none'
}else{
  finalyPriseInfoBlock.style.display = 'none'
  finalyPriceBlock.style.display = 'flex'
}


for(let n = 0; n < inputValueArr.length; n++){
  finalyPriceNumber += +inputValueArr[n] * +itemInfoCurrentPrice[n].textContent 
}
let array = [...finalyPriceNumber.toString()].map(Number);
if(array.length === 5){
  array.splice(2, 0, " ")
}else if(array.length === 6){
  array.splice(3, 0, " ")
}else if(array.length === 7){
  array.splice(4, 0, " ")
  array.splice(1, 0, " ")

}
finalyPriceNumber = array.join('')
finalyPrice.innerHTML = `${finalyPriceNumber} руб`
}

function openModalOfDirectRoom(){
  let modalInfoItems = document.querySelectorAll('.present__photo__item__info')
  let itemInfoIndex = document.querySelectorAll('.present__photo__item__number')
  let presentPhoto = document.querySelector('.present__photo')
  itemInfoIndex.forEach((item, index) => {
    item.addEventListener('click', () => {
      modalInfoItems.forEach(modal => {
        if(modal.classList.contains('item__info-active')){
          modal.classList.remove('item__info-active')
        }

        
      })
      modalInfoItems[index].classList.toggle('item__info-active')

    })
  })
window.addEventListener("click", (e) => {

if(e.target.classList.contains('present__photo') || e.target.id == 'itemInfo'){
  modalInfoItems.forEach(modal => {
    if(modal.classList.contains('item__info-active')){
      modal.classList.remove('item__info-active')
    }
    
    
  })
}
})
}
