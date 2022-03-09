const editPopupButton = document.querySelector('.profile__title-edit-button')
const popup = document.querySelector('.popup')
const popupCloseButton = popup.querySelector('.popup__container-close-icon')

let titleName = document.querySelector('.profile__title-name')
let subtitleName = document.querySelector('.profile__subtitle')

let formElement = document.querySelector('.form')
let nameInput = document.querySelector('#name')
let jobInput = document.querySelector('#job')

function openPopup() {
    popup.classList.add('popup_opened')

    nameInput.value = titleName.textContent
    jobInput.value = subtitleName.textContent
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

function formSubmitHandler(evt) {
    evt.preventDefault()

    titleName.textContent = nameInput.value
    subtitleName.textContent = jobInput.value

    closePopup()
}


editPopupButton.addEventListener('click', openPopup)
popupCloseButton.addEventListener('click', closePopup)

formElement.addEventListener('submit', formSubmitHandler)

// popup.addEventListener('click', function(event) {
//     if(event.target === event.currentTarget) {
//         closePopup()
//     }
// })
