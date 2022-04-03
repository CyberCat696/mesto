// ==========================================================  Переменные  =========================================================

// Pop-up

const editPopup = document.querySelector('#profile')
const addPopup = document.querySelector('#place')
const imagePopup = document.querySelector('#image')

// Pop-up open

const addPopupButton = document.querySelector('.profile__add-button')
const editPopupButton = document.querySelector('.profile__title-edit-button')

// Pop-up close

const editPopupCloseButton = editPopup.querySelector('.popup__close-icon')
const addPopupCloseButton = addPopup.querySelector('.popup__close-icon')
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-icon')

// Template

const template = document.querySelector('.item__template').content
const elements = document.querySelector('.elements')

// Добавление карточки

const formButton = document.querySelector('#addButton')

// Форма редактирования

let titleName = document.querySelector('.profile__title-name')
let subtitleName = document.querySelector('.profile__subtitle')
let formElement = document.querySelector('.form')
let nameInput = document.querySelector('#name')
let jobInput = document.querySelector('#job')

// Форма добавления

let formInputName = document.querySelector('.form__title-input_name')
let formInputImage = document.querySelector('.form__title-input_image')

// ==========================================================  Функции  =========================================================

// Рендер карточек

function render() {
    cards.forEach(renderCards)
}

function renderCards(card) {
    
    const newItem = template.cloneNode(true)


    newItem.querySelector('.elements__main-text').textContent = card.name;
    newItem.querySelector('.elements__item-image').src = card.link;
    newItem.querySelector('.elements__item-image').alt = card.name;


    addListeners(newItem)
    elements.appendChild(newItem)


}

render()

// Создание карточки

function addCard() {
    const newCard = template.cloneNode(true)

    newCard.querySelector('.elements__main-text').textContent = formInputName.value
    newCard.querySelector('.elements__item-image').src = formInputImage.value
    newCard.querySelector('.elements__item-image').alt = formInputName.value

    addListeners(newCard)
    elements.prepend(newCard)

}

// Pop-up

const openPopup = function(popup) {
    popup.classList.toggle('popup_opened')
}

// Значения и отправка профиля

function inputProfileValue() {
    nameInput.value = titleName.textContent
    jobInput.value = subtitleName.textContent
}

function formSubmitHandler(evt) {
    evt.preventDefault()

    titleName.textContent = nameInput.value
    subtitleName.textContent = jobInput.value

    openPopup(editPopup)
}

// Значения и отправка новой карточки

function inputNewCardValue() {
    formInputName.value = null
    formInputImage.value = null
}

function submitNewCard(evt) {
   evt.preventDefault()

   addCard()

  openPopup(addPopup)
}

// Удаление карточки, лайк и просмотр картинки

function addListeners(el) {
    el.querySelector('.element__item-trash-icon').addEventListener('click', deleteCard)
    el.querySelector('.elements__main-heart-logo').addEventListener('click', likeButton)
    el.querySelector('.elements__item-image').addEventListener('click', viewImage)
    
}

function deleteCard(event) {
    event.target.closest('.elements__item').remove()
}


function likeButton(event) {
    event.target.classList.toggle('elements__main-heart-logo_active')
}

function viewImage(el) {
    openPopup(imagePopup)
    document.querySelector('.popup__item-image').src = el.target.src
    document.querySelector('.popup__item-image').alt = el.target.alt
    document.querySelector('.popup__item-text').textContent = el.target.alt
}

// ==========================================================  Слушаки  =========================================================

// Pop-up open

editPopupButton.addEventListener('click', function() {
    inputProfileValue()
    openPopup(editPopup)
})

addPopupButton.addEventListener('click', function() {
    inputNewCardValue()
    openPopup(addPopup)
})



// Pop-up close

editPopupCloseButton.addEventListener('click', function() {
    openPopup(editPopup)
})

// editPopup.addEventListener('click', function(event) {
//     if(event.target === event.currentTarget) {
//         openPopup(editPopup)
//     }
// })

addPopupCloseButton.addEventListener('click', function() {
    openPopup(addPopup)
})

// addPopup.addEventListener('click', function(event) {
//     if(event.target === event.currentTarget) {
//         openPopup(addPopup)
//     }
// })

imagePopupCloseButton.addEventListener('click', function() {
    openPopup(imagePopup)
})

// imagePopup.addEventListener('click', function(event) {
//     if(event.target === event.currentTarget) {
//         openPopup(imagePopup)
//     }
// })

// Pop-up формы

formElement.addEventListener('submit', formSubmitHandler)

// Добавление карточки

formButton.addEventListener('click', submitNewCard) 
