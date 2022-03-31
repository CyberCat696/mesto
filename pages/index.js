// ==========================================================  Массивы  =========================================================

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

// ==========================================================  Переменные  =========================================================

// Pop-up

const popup = document.querySelector('#profile')
const addPopup = document.querySelector('#place')
const imagePopup = document.querySelector('#image')

// Pop-up open

const addPopupButton = document.querySelector('.profile__add-button')
const editPopupButton = document.querySelector('.profile__title-edit-button')

// Pop-up close

const popupCloseButton = popup.querySelector('.popup__close-icon')
const addPopupCloseButton = addPopup.querySelector('.popup__close-icon')
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-icon')

// Template

const template = document.querySelector('.item__template').content
const elements = document.querySelector('.elements')

// Добавление карточки

const formButton = document.querySelector('#addButton')

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

function renderCards(element) {
    const newItem = template.cloneNode(true)

    newItem.querySelector('.elements__main-text').textContent = element.name;
    newItem.querySelector('.elements__item-image').src = element.link;
    newItem.querySelector('.elements__item-image').alt = element.name;

    addListeners(newItem)
    elements.appendChild(newItem)
    
}

// Создание карточки

function addCard(evt) {
    evt.preventDefault()
    const newCard = template.cloneNode(true)
    newCard.querySelector('.elements__main-text').textContent = formInputName.value
    newCard.querySelector('.elements__item-image').src = formInputImage.value
    newCard.querySelector('.elements__item-image').alt = formInputName.value

    addListeners(newCard)
    elements.prepend(newCard)

    closeAddPopup()
}

render()

// Pop-up редактирования профиля

function openEditPopup() {
    popup.classList.add('popup_opened')

    nameInput.value = titleName.textContent
    jobInput.value = subtitleName.textContent
}

function closeEditPopup() {
    popup.classList.remove('popup_opened')
}

function formSubmitHandler(evt) {
    evt.preventDefault()

    titleName.textContent = nameInput.value
    subtitleName.textContent = jobInput.value

    closeEditPopup()
}

// Pop-up добавления карточки

function openAddPopup() {
    addPopup.classList.add('popup_opened')

}

function closeAddPopup() {
    addPopup.classList.remove('popup_opened')
}


// Pop-up картинки

function openImagePopup() {
    imagePopup.classList.add('popup_opened')

}

function closeImagePopup() {
    imagePopup.classList.remove('popup_opened')
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
    openImagePopup()
    document.querySelector('.popup__item-image').src = el.target.src
    document.querySelector('.popup__item-image').alt = el.target.alt
    document.querySelector('.popup__item-text').textContent = el.target.alt
}

// ==========================================================  Слушаки  =========================================================

// Pop-up open

editPopupButton.addEventListener('click', openEditPopup)
addPopupButton.addEventListener('click', openAddPopup)
imagePopupCloseButton.addEventListener('click', closeImagePopup)

// Pop-up close
popupCloseButton.addEventListener('click', closeEditPopup)
addPopupCloseButton.addEventListener('click', closeAddPopup)
// popup.addEventListener('click', function(event) {
//     if(event.target === event.currentTarget) {
//         closeEditPopup()
//     }
// })

// Pop-up формы

formElement.addEventListener('submit', formSubmitHandler)

// Добавление карточки

formButton.addEventListener('click', addCard) 
