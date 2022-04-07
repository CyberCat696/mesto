// Error open

function openError(formElement, inputElement, errorMessage, selector) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)

  inputElement.classList.add(selector.inputErrorClass)
  errorElement.textContent = errorMessage
  errorElement.classList.add(selector.errorClass)
}

// Error close

function closeError(formElement, inputElement, selector) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)

  inputElement.classList.remove(selector.inputErrorClass)
  errorElement.classList.remove(selector.errorClass)
  errorElement.textContent = ''
}

// Обработка валидации

function isValid(formElement, inputElement, selector) {

  if (!inputElement.validity.valid) {

    openError(formElement, inputElement, inputElement.validationMessage, selector)
  } else {

    closeError(formElement, inputElement, selector)
  }
}

// Слушаки

function setEventListeners(formElement, selector) {
  const inputList = Array.from(formElement.querySelectorAll(selector.inputSelector))
  const buttonElement = formElement.querySelector(selector.submitButtonSelector)

  toggleButtonState(inputList, buttonElement, selector)

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, selector)
      toggleButtonState(inputList, buttonElement, selector)
    })
  })
}

// Валидация

function enableValidation(selector) {
  const formList = Array.from(document.querySelectorAll(selector.formSelector))

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
    })

    setEventListeners(formElement, selector)
  })
}

// Массив валидации

function hasInvalidInput(inputList) {

  return inputList.some((inputElement) => {


    return !inputElement.validity.valid
  })
}

// Переключение кнопки

function toggleButtonState(inputList, buttonElement, selector) {
  if (hasInvalidInput(inputList)) {

    buttonElement.classList.add(selector.inactiveButtonClass)
    buttonElement.disabled = true
  } else {

    buttonElement.classList.remove(selector.inactiveButtonClass)
    buttonElement.disabled = false
  }
}

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__title-input',
  submitButtonSelector: '.form__title-button-submit',
  inactiveButtonClass: 'form__title-button-submit_disable',
  inputErrorClass: 'form__title-input_error',
  errorClass: 'form__title-input_text-error-active'
})