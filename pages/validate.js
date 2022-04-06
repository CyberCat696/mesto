// Error open

const openError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)

  inputElement.classList.add('form__title-input_error')
  errorElement.textContent = errorMessage
  errorElement.classList.add('form__title-input_text-error-active')
}

// Error close

const closeError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)

  inputElement.classList.remove('form__title-input_error')
  errorElement.classList.remove('form__title-input_text-error-active')
  errorElement.textContent = ''
}

// Обработка валидации

const isValid = (formElement, inputElement) => {

  if (!inputElement.validity.valid) {

    openError(formElement, inputElement, inputElement.validationMessage)
  } else {

    closeError(formElement, inputElement)
  }
}

// Слушаки

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__title-input'))
  const buttonElement = formElement.querySelector('.form__title-button-submit')

  // toggleButtonState(inputList, buttonElement)

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement)
      toggleButtonState(inputList, buttonElement)
    })
  })
}

// Валидация

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'))

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
    })

    setEventListeners(formElement)
  })
}

enableValidation()


const hasInvalidInput = (inputList) => {

  return inputList.some((inputElement) => {


    return !inputElement.validity.valid
  })
}

// Переключение кнопки

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {

    buttonElement.classList.add('form__title-button-submit_disable')
  } else {

    buttonElement.classList.remove('form__title-button-submit_disable')
  }
}


// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// })