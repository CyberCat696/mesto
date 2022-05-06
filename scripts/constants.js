const cards = [
    {
        name: 'Эверест',
        link: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'К2',
        link: 'https://images.unsplash.com/photo-1627896157734-4d7d4388f28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
        name: 'Аннапурна',
        link: 'https://images.unsplash.com/photo-1589800463007-3be49fe18b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'Денали',
        link: 'https://images.unsplash.com/photo-1624469600761-6acd071481d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'Маттерхорн',
        link: 'https://images.unsplash.com/photo-1581010124530-f3c49901215f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'Дель Кампо',
        link: 'https://images.unsplash.com/photo-1606278483460-25d13da45337?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1525&q=80'
    }
];

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

const template = document.querySelector('.item__template')
const elements = document.querySelector('.elements')

// Добавление карточки

const formPlace = document.querySelector('#formPlace')
const formProfile = document.querySelector('#formProfile')

// Форма редактирования

const titleName = document.querySelector('.profile__title-name')
const subtitleName = document.querySelector('.profile__subtitle')
const nameInput = document.querySelector('#name')
const jobInput = document.querySelector('#job')

// Форма добавления

const formInputName = document.querySelector('.form__title-input_name')
const formInputImage = document.querySelector('.form__title-input_image')
const formAddBtn = document.querySelector('#addButton')

// Валидация

const settings = {
    formSelector: '.form',
    inputSelector: '.form__title-input',
    submitButtonSelector: '.form__title-button-submit',
    inactiveButtonClass: 'form__title-button-submit_disable',
    inputErrorClass: 'form__title-input_error',
    errorClass: 'form__title-input_text-error-active'
}