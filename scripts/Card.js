class Card {
    constructor(data, cardSelector) {
        this._photo = data.photo;
        this._title = data.title;
        this._cardSelector = cardSelector;
    }
    _getTemplate() {
        const cardTemplate = document
        .querySelector(this._cardSelector)
        .content.querySelector('.element__card')
        .cloneNode(true);

        return cardTemplate;
    }
    createCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.element__image').src = this._photo;
    this._element.querySelector('.element__title').textContent = this._title;

    this._setEventListeners();

    return this._element;
    }
    _setEventListeners() {
        this._element.querySelector('.element__button-like').addEventListener('click', () => {
            this._buttonLikeClick();
        });
        this._element.querySelector('.element__button-delete').addEventListener('click', () => {
            this._cardDeleteClick();
        });
    }
    _buttonLikeClick() {
        this._element.querySelector('.element__button-like').classList.toggle('element__button-like_active');
    }
    _cardDeleteClick() {
        const element = this._element.closest('.element__card');
        if(element) {
            element.remove();
        }
    }
}

initialCards.forEach((item) => {
	const card = new Card(item, '.template-card');
	const cardTemplate = card.createCard();

	document.querySelector('.element').append(cardTemplate);
});



export default Card;