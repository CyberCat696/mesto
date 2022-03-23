const initialCards = [
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
        link: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Денали',
        link: 'https://images.unsplash.com/photo-1624469600761-6acd071481d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'Маттерхорн',
        link: 'https://images.unsplash.com/photo-1585951619576-6e961950cb60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Монблан',
        link: 'https://images.unsplash.com/flagged/photo-1579168169191-efd70a2cd05d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
    }
];

const editPopupButton = document.querySelector('.profile__title-edit-button')
const popup = document.querySelector('#profile')
const popupCloseButton = popup.querySelector('.popup__close-icon')
const addPopupButton = document.querySelector('.profile__add-button')
const addPopup = document.querySelector('#place')
const addPopupCloseButton = addPopup.querySelector('.popup__close-icon')
const likeButton = document.querySelectorAll('.elements__main-heart-logo')

const template = document.querySelector('.item__template').content
const elements = document.querySelector('.elements')
// const elementsImage = document.querySelector('.elements__item-image')
// const elementsText = document.querySelector('.elements__main-text')

const formInputText = document.querySelector('#place')
// const formInputImage = document.querySelector('#src')
const formButton = document.querySelector('#addButton')

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

function openAddPopup() {
    addPopup.classList.add('popup_opened')

}

function closeAddPopup() {
    addPopup.classList.remove('popup_opened')
}


function formSubmitHandler(evt) {
    evt.preventDefault()

    titleName.textContent = nameInput.value
    subtitleName.textContent = jobInput.value

    closePopup()
}


editPopupButton.addEventListener('click', openPopup)
popupCloseButton.addEventListener('click', closePopup)

addPopupButton.addEventListener('click', openAddPopup)
addPopupCloseButton.addEventListener('click', closeAddPopup)

formElement.addEventListener('submit', formSubmitHandler)


likeButton.forEach(function (el) {
    el.addEventListener('click', function (event) {
        event.target.classList.toggle('elements__main-heart-logo_active')
    })
})

function render() {
    initialCards.forEach(renderInitialCard)
}

function renderInitialCard(element) {
    const newItem = template.cloneNode(true)
    // newItem.querySelector('.elements__main-text').innerText = text

    newItem.querySelector('.elements__main-text').textContent = element.name;
    newItem.querySelector('.elements__item-image').src = element.link;
    newItem.querySelector('.elements__item-image').alt = element.name;

    elements.appendChild(newItem)
}

function addInitialCard(event) {
    renderInitialCard(formInputText.value)
}

formButton.addEventListener('click', addInitialCard)

render()


// popup.addEventListener('click', function(event) {
//     if(event.target === event.currentTarget) {
//         closePopup()
//     }
// })
