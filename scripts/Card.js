import { openPopup } from './index.js'

export class Card {
    constructor(cardInfo, cardSelector) {
        this._name = cardInfo.name,
            this._link = cardInfo.link,
            this._cardSelector = cardSelector
    }

    _getTemplate() {
        const cardElement = this._cardSelector.content.querySelector('.elements__item').cloneNode(true)

        return cardElement
    }

    createCard() {
        this._card = this._getTemplate()
        this._cardImage = this._card.querySelector('.elements__item-image')
        this._setListeners()
        this._card.querySelector('.elements__main-text').textContent = this._name
        this._cardImage.src = this._link
        this._cardImage.alt = this._name

        return this._card
    }

    _handleRemoveCard() {
        this._card.remove()
    }

    _handleLikeButton(evt) {
        evt.target.classList.toggle('elements__main-heart-logo_active')
    }

    _viewImage() {
        openPopup(imagePopup)
        imageItem.src = this._link
        imageItem.alt = this._name
        imageTextItem.textContent = this._name
    }

    _setListeners() {
        this._card.querySelector('.element__item-trash-icon').addEventListener('click', () => {
            this._handleRemoveCard()
        })
        this._card.querySelector('.elements__main-heart-logo').addEventListener('click', this._handleLikeButton)
        this._card.querySelector('.elements__item-image').addEventListener('click', () => {
            this._viewImage()
        })
    }
}