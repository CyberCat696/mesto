const editPopupButton = document.querySelector('.profile__title-edit-button')
const popup = document.querySelector('.popup')
const popupCloseButton = document.querySelector('.popup__container-close-icon')

function openPopup() {
    popup.classList.add('popup__opened')
}

function closePopup() {
    popup.classList.remove('popup__opened')
}


editPopupButton.addEventListener('click', openPopup)
popupCloseButton.addEventListener('click', closePopup)

popup.addEventListener('click', function(event) {
    if(event.target === event.currentTarget) {
        closePopup()
    }
})


let formElement = document.querySelector('.form')
let nameInput = document.querySelector('.form__title-input-name')
let jobInput = document.querySelector('.form__title-input-job')


function formSubmitHandler (evt) {
    evt.preventDefault();

    let nameInput = document.querySelector('.form__title-input-name').value 
    document.querySelector('.profile__title-name').textContent = nameInput

    let jobInput = document.querySelector('.form__title-input-job').value 
    document.querySelector('.profile__subtitle').textContent = jobInput
    popup.classList.remove('popup__opened')
}

formElement.addEventListener('submit', formSubmitHandler);