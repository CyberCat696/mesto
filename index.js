const editPopupButton = document.querySelector('.item__edit-button')
const popup = document.querySelector('.pop-up')
const popupCloseButton = document.querySelector('.pop-up__close-icon')

function openPopup() {
    popup.classList.add('pop-up__opened')
}

function closePopup() {
    popup.classList.remove('pop-up__opened')
}


editPopupButton.addEventListener('click', openPopup)
popupCloseButton.addEventListener('click', closePopup)

popup.addEventListener('click', function(event) {
    if(event.target === event.currentTarget) {
        closePopup()
    }
})


let formElement = document.querySelector('.pop-up__form')
let nameInput = document.querySelector('.form__input_name')
let jobInput = document.querySelector('.form__input_job')


function formSubmitHandler (evt) {
    evt.preventDefault();

    let nameInput = document.querySelector('.form__input_name').value 
    document.querySelector('.item__name').textContent = nameInput

    let jobInput = document.querySelector('.form__input_job').value 
    document.querySelector('.item__subtitle').textContent = jobInput
    popup.classList.remove('pop-up__opened')
}

formElement.addEventListener('submit', formSubmitHandler);