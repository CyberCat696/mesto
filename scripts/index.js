// ==========================================================  Переменные  =========================================================

// Pop-up

const editPopup = document.querySelector('#profile')
const addPopup = document.querySelector('#place')
const imagePopup = document.querySelector('#image')
const popups = document.querySelectorAll('.popup')

// Pop-up open

const addPopupButton = document.querySelector('.profile__add-button')
const editPopupButton = document.querySelector('.profile__title-edit-button')

// Pop-up close

const editPopupCloseButton = editPopup.querySelector('.popup__close-icon')
const addPopupCloseButton = addPopup.querySelector('.popup__close-icon')
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-icon')

// Pop-up Image

const imageItem = document.querySelector('.popup__item-image')
const imageTextItem = document.querySelector('.popup__item-text')

// Template

const template = document.querySelector('.item__template').content
const elements = document.querySelector('.elements')

// Добавление карточки

const formSubmit = document.querySelector('#formPlace')

// Форма редактирования

const titleName = document.querySelector('.profile__title-name')
const subtitleName = document.querySelector('.profile__subtitle')
const formElement = document.querySelector('.form')
const nameInput = document.querySelector('#name')
const jobInput = document.querySelector('#job')

// Форма добавления

const formInputName = document.querySelector('.form__title-input_name')
const formInputImage = document.querySelector('.form__title-input_image')
const formAddBtn = document.querySelector('#addButton')

// ==========================================================  Функции  =========================================================

// Создание и рендер карточек

function createCard(item) {
    const newCard = template.cloneNode(true)

    newCard.querySelector('.elements__main-text').textContent = item.name
    newCard.querySelector('.elements__item-image').src = item.link
    newCard.querySelector('.elements__item-image').alt = item.name

    addListeners(newCard)

    return newCard
}

function renderCards(item) {
    const cards = createCard(item)

    elements.prepend(cards)
}

function render() {
    cards.forEach(renderCards)
}

render()

// Pop-up

const openPopup = function (popup) {
    popup.classList.add('popup_opened')
    formAddBtn.disabled = true
    formAddBtn.classList.add('form__title-button-submit_disable')
    document.addEventListener('keydown', closeEscapeBtn)
}

const closePopup = function (popup) {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', closeEscapeBtn)
}

function closeEscapeBtn(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened')
        closePopup(openedPopup)
    }
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
    imageItem.src = el.target.src
    imageItem.alt = el.target.alt
    imageTextItem.textContent = el.target.alt
}

// ==========================================================  Слушаки  =========================================================

// Pop-up open

editPopupButton.addEventListener('click', function () {
    inputProfileValue()
    openPopup(editPopup)
})

addPopupButton.addEventListener('click', function () {
    inputNewCardValue()
    openPopup(addPopup)
})

// Pop-up close 

popups.forEach(function (item) {
    item.querySelector('.popup__close-icon').addEventListener('mousedown', function () {
        closePopup(item)
    })
    item.addEventListener('mousedown', function (evt) {
        if (evt.currentTarget === evt.target)
            closePopup(item)
    })
})

// Pop-up формы

formElement.addEventListener('submit', submitEditProfile)

// Добавление карточки

formSubmit.addEventListener('submit', submitNewCard) 
