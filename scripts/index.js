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

const formSubmit = document.querySelector('#formPlace')

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

function renderCards(item) {
    const newItem = template.cloneNode(true)

    newItem.querySelector('.elements__main-text').textContent = item.name;
    newItem.querySelector('.elements__item-image').src = item.link;
    newItem.querySelector('.elements__item-image').alt = item.name;

    addListeners(newItem)
    elements.prepend(newItem)

}

render()

// Pop-up

const openPopup = function(popup) {
    popup.classList.add('popup_opened')
}

const closePopup = function(popup) {
    popup.classList.remove('popup_opened')
}

// Значения и отправка профиля

function inputProfileValue() {
    nameInput.value = titleName.textContent
    jobInput.value = subtitleName.textContent
}

function submitEditProfile(evt) {
    evt.preventDefault()

    titleName.textContent = nameInput.value
    subtitleName.textContent = jobInput.value

    closePopup(editPopup)
}

// Значения и отправка новой карточки

function inputNewCardValue() {
    formInputName.value = null
    formInputImage.value = null
}

function submitNewCard(evt) {
    evt.preventDefault()

   renderCards({ name: formInputName.value, link: formInputImage.value })

   closePopup(addPopup)
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
    closePopup(editPopup)
})

addPopupCloseButton.addEventListener('click', function() {
    closePopup(addPopup)
})

imagePopupCloseButton.addEventListener('click', function() {
    closePopup(imagePopup)
})

// Pop-up close around

editPopup.addEventListener('click', function(event) {
    if(event.target === event.currentTarget) {
        closePopup(editPopup)
    }
})

addPopup.addEventListener('click', function(event) {
    if(event.target === event.currentTarget) {
        closePopup(addPopup)
    }
})

imagePopup.addEventListener('click', function(event) {
    if(event.target === event.currentTarget) {
        closePopup(imagePopup)
    }
})

// Pop-up close ESC

document.addEventListener('keydown', function(event) {
    if(event.key === 'Escape') {
        closePopup(editPopup)
    }
})

document.addEventListener('keydown', function(event) {
    if(event.key === 'Escape') {
        closePopup(addPopup)
    }
})

document.addEventListener('keydown', function(event) {
    if(event.key === 'Escape') {
        closePopup(imagePopup)
    }
})

// Pop-up формы

formElement.addEventListener('submit', submitEditProfile)

// Добавление карточки

formSubmit.addEventListener('submit', submitNewCard) 
