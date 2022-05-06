export class FormValidator {
    constructor(settings, form) {
        this._formSelector = settings.formSelector
        this._inputSelector = settings.inputSelector
        this._submitButtonSelector = settings.submitButtonSelector
        this._inactiveButtonClass = settings.inactiveButtonClass
        this._inputErrorClass = settings.inputErrorClass
        this._errorClass = settings.errorClass
        this._popupForm = form
        this._inputList = Array.from(this._popupForm.querySelectorAll(this._inputSelector))
        this._saveBtn = this._popupForm.querySelector(this._submitButtonSelector)
    }

    // Обработка валидации

    _isValid(input) {
        if (!input.validity.valid) {
            this._showInputError(input);
        } else {
            this._hideInputError(input);
        }
    }

    // Error open

    _showInputError(input) {
        const formError = this._popupForm.querySelector(`.${input.id}-error`)

        formError.textContent = input.validationMessage
        formError.classList.add(this._errorClass)
        input.classList.add(this._inputErrorClass)
    }

    // Error close

    _hideInputError(input) {
        const formError = this._popupForm.querySelector(`.${input.id}-error`)

        formError.classList.remove(this._errorClass)
        formError.textContent = ''
        input.classList.remove(this._inputErrorClass)
    }

    // Слушаки

    _setEventListeners() {

        this._toggleButtonState()

        this._inputList.forEach((input) => {

            input.addEventListener('input', () => {
                this._isValid(input)
                this._toggleButtonState()
            })
        })
    }

    // Валидация

    enableValidation() {

        const formList = Array.from(document.querySelectorAll(this._formSelector))

        formList.forEach((input) => {
            this._setEventListeners(input)
        })
    }

    // Переключение кнопки

    disableButton() {
        this._saveBtn.classList.add(this._inactiveButtonClass)

        this._saveBtn.disabled = true
    }

    _enableButton() {
        this._saveBtn.classList.remove(this._inactiveButtonClass)

        this._saveBtn.disabled = false
    }

    _toggleButtonState() {
        const formValid = this._hasInputsValid()
        if (formValid) {
            this.disableButton()
        } else {
            this._enableButton()
        }
    }

    // Массив валидации

    _hasInputsValid() {
        return this._inputList.some((input) => {
            return !input.validity.valid
        })
    }

    resetTextError() {
        this._inputList.forEach(item => {
            this._hideInputError(item)
        })
    }
}