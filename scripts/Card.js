/*class Card {
    constructor(data, cardElement) {
        this._photo = data.photo;
        this._title = data.title;
        this._cardElement = cardElement;
    }
    _getTemplate() {
        const cardTemplate = document.querySelector('#template-card').content.querySelector('.element__card');

        return cardTemplate;
    }
    createCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__image').src = this._photo;
    this._element.querySelector('.element__title').textContent = this._title;

    return this._element;
    }
}

initialCards.forEach((item) => {
	const card = new Card(item, cardTemplate);
	const cardElement = card.createCard();

	this._cardsList.prepend(createCard(this._cardElement));
});



/*class Card {
    constructor(cardsList, cardTemplate) {
        this._cardsList = cardsList;
        this._cardTemplate = cardTemplate;
        this._cardElement = this._cardTemplate.cloneNode(true);
    }
    _createCard() {
        //const cardElement = this._cardTemplate.cloneNode(true);
        const photo = this._element.querySelector('.element__image');
        const title = this._element.querySelector('.element__title');
    
        this._photo.src = this._element.link;
        this._photo.alt = this._element.name;
        this._title.textContent = this._element.name;
    
        this._cardElement.querySelector('.element__button-delete').addEventListener('click', event => {
            const element = event.target.closest('.element__card');
    
            if(element) {
                element.remove();
            }
        });
    
        this._cardElement.querySelector('.element__button-like').addEventListener('click', event => {
            event.target.classList.toggle('element__button-like_active');
        });
    
        this._photo.addEventListener('click', event => {
            popupImagePhoto.src = event.target.src;
            popupImageTitle.textContent = event.target.alt;
            popupImagePhoto.alt = popupImageTitle.textContent;
            showPopup(popupImage);
        })
    
        return this._cardElement;
    }
    renderCard() {
        this._cardsList.prepend(createCard());
    }
}*/

//export default Card;