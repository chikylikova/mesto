import { popupImage, popupImagePhoto, popupImageTitle, showPopup} from "./index.js";

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export { initialCards };

class Card {
    constructor(data, cardSelector) {
        this._image = data.link;
        this._title = data.name;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element__card')
        .cloneNode(true);

        return cardElement;
    }

    createCard() {
    this._element = this._getTemplate();

    this._setEventListeners();

    const image = this._element.querySelector('.element__image');

    this._element.querySelector('.element__title').textContent = this._title;

    image.src = this._image;
    image.alt = this._title;

    return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.element__button-like').addEventListener('click', () => {
            this._buttonLikeClick();
        });
        this._element.querySelector('.element__button-delete').addEventListener('click', () => {
            this._cardDeleteClick();
        });
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._showImagePopup();
            })
    }

    _buttonLikeClick() {
        this._element.querySelector('.element__button-like').classList.toggle('element__button-like_active');
    }

    _cardDeleteClick() {
        this._element.closest('.element__card').remove();
    }

    _showImagePopup() {
        popupImagePhoto.src = this._image;
        popupImageTitle.textContent = this._title;
        popupImagePhoto.alt = this._title;
        showPopup(popupImage);
        } 
    }

export { Card };