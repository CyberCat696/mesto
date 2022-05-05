import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'

// ==========================================================  Функции  =========================================================

// Создание и рендер карточек

function createCard(cardInfo) {
    const card = new Card(cardInfo, template)
    const cardElement = card.createCard()

    return cardElement
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

export const openPopup = function (popup) {
    popup.classList.add('popup_opened')
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
    addValidationProfile.resetTextError()
}

function submitEditProfile(evt) {
    evt.preventDefault()

    titleName.textContent = nameInput.value
    subtitleName.textContent = jobInput.value

    closePopup(editPopup)
}

const addValidationProfile = new FormValidator(settings, formProfile)

// Значения и отправка новой карточки

function inputNewCardValue() {
    formInputName.value = null
    formInputImage.value = null
    formAddBtn.disabled = true
    formAddBtn.classList.add('form__title-button-submit_disable')
    addValidationPlace.resetTextError()
    addValidationPlace.disableButton()
}

function submitNewCard(evt) {
    evt.preventDefault()

    renderCards({ name: formInputName.value, link: formInputImage.value })

    closePopup(addPopup)
}

const addValidationPlace = new FormValidator(settings, formPlace)

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

formPlace.addEventListener('submit', submitNewCard)

addValidationProfile.enableValidation()
addValidationPlace.enableValidation()