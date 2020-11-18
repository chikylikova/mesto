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

const popup = document.querySelector('.popup');
const popupAddCards = document.querySelector('.popup_type_edit');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close');
const closeAddButton = document.querySelector('.popup__close_add-button');

const title = document.querySelector('.profile__info-name');
const subTitle = document.querySelector('.profile__info-work');
const elementTitle = document.querySelector('.element__title');

const form = document.querySelector('.popup__form');

const nameField = document.querySelector('.popup__field_type_name');
const titleField = document.querySelector('.popup__field_type_title');
const placeField = document.querySelector('.popup__field_type_place');
const placeNameField = document.querySelector('.popup__field_place_name');


const popupImage = document.querySelector('.popup_type_image');



function closePopup(popup) { 
    popup.classList.remove('popup_opened'); 
} 


function submitForm(event) { 
    event.preventDefault(); 
    title.textContent = nameField.value; 
    subTitle.textContent = titleField.value; 
    closePopup(popup); 
} 

form.addEventListener('submit', submitForm); 

function showPopup(popup) { 
    popup.classList.add('popup_opened'); 
    nameField.value = title.textContent; 
    titleField.value = subTitle.textContent; 
} 


editButton.addEventListener('click', () => showPopup(popup)); 
closeButton.addEventListener('click', () => closePopup(popup)); 
addButton.addEventListener('click', () => showPopup(popupAddCards));
closeAddButton.addEventListener('click', () => closePopup(popupAddCards));


const addCards = document.querySelector('.element');
const cardTemplate = document.querySelector('#template-card').content.querySelector('.element__card');

function createCard(card) {
    const cardElement = cardTemplate.cloneNode(true);
    const photo = cardElement.querySelector('.element__image');
    const title = cardElement.querySelector('.element__title');

    photo.src = card.link;
    photo.alt = card.name;
    title.textContent = card.name;

    cardElement.querySelector('.element__button-delete').addEventListener('click', event => {
        const element = event.target.closest('.element__card');

        if(element) {
            element.remove();
        }
    });

    addCards.prepend(cardElement);
}

initialCards.forEach(createCard);

const addCard = document.querySelector('.popup__form_card');

addCard.addEventListener('submit', event => {
    event.preventDefault();
    const cardTitle = addCard.querySelector('.popup__field_place_name').value;
    const cardImage = addCard.querySelector('.popup__field_type_place').value;

    createCard({
        name: cardTitle,
        link: cardImage
    });
    closePopup(popupAddCards);

})

