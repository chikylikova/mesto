import FormValidator from "./FormValidator.js";
import { initialCards, Card } from "././Card.js";

const cardSection = document.querySelector('.element');
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCards = document.querySelector('.popup_type_add-card');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeEditUserProfileButton = document.querySelector('.popup__close_edit_profile');
const closeAddButton = document.querySelector('.popup__close_add-button');

const title = document.querySelector('.profile__info-name');
const subTitle = document.querySelector('.profile__info-work');

const editUserForm = document.querySelector('.popup__form_edit-profile');
const addUserForm = document.querySelector('.popup__form_card');

const nameField = document.querySelector('.popup__field_type_name');
const titleField = document.querySelector('.popup__field_type_title');

export const popupImage = document.querySelector('.popup_type_image');
export const popupImagePhoto = document.querySelector('.popup__image');
export const popupImageTitle = document.querySelector('.popup__title_image_name'); 
const popupImageClose = document.querySelector('.popup__close_image'); 

const addCardForm = document.querySelector('.popup__form_card');
const cardTitle = addCardForm.querySelector('.popup__field_place_name');
const cardImage = addCardForm.querySelector('.popup__field_type_place');

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__submit',
    inputInvalidClass: 'popup__field_type_invalid',
    submitInvalidClass: 'popup__submit_invalid'
};

const formEditValidation = new FormValidator(validationConfig, editUserForm);
const formAddValidation = new FormValidator(validationConfig, addUserForm);

formEditValidation.enableValidation();
formAddValidation.enableValidation();

initialCards.forEach(item => renderCard(item));

function renderCard(item) {
	const card = new Card(item, '.template-card');
	const cardElement = card.createCard();

	cardSection.prepend(cardElement);
}

function closePopup(popup) { 
    popup.classList.remove('popup_opened'); 
    document.removeEventListener('keyup', closePopupEsc);
    document.removeEventListener('mousedown', closePopupOverlay);
}


export function showPopup(popup) {
    popup.classList.add('popup_opened'); 
    document.addEventListener('keyup', closePopupEsc);
    document.addEventListener('mousedown', closePopupOverlay);
}

const closePopupEsc = (evt) => {
    if (evt.key === 'Escape') {
        const popupActive = document.querySelector('.popup_opened');
        closePopup(popupActive);
    }
}

const closePopupOverlay = (evt) => {
    if (evt.target.classList.contains('popup')) {
        const popupActive = document.querySelector('.popup_opened');
        closePopup(popupActive);
    }
}

function submitEditUserProfileForm(event) { 
    event.preventDefault(); 
    title.textContent = nameField.value; 
    subTitle.textContent = titleField.value; 
    closePopup(popupEditProfile); 
}  

function showEditProfilePopup() { 
    nameField.value = title.textContent; 
    titleField.value = subTitle.textContent;  
    showPopup(popupEditProfile);
} 

addCardForm.addEventListener('submit', event => {
    event.preventDefault();

    renderCard({
        name: cardTitle.value,
        link: cardImage.value,
    });

    addCardForm.reset();
    closePopup(popupAddCards);
});

editUserForm.addEventListener('submit', submitEditUserProfileForm);
editButton.addEventListener('click', () => showEditProfilePopup()); 
closeEditUserProfileButton.addEventListener('click', () => closePopup(popupEditProfile)); 

addButton.addEventListener('click', () => showPopup(popupAddCards));
closeAddButton.addEventListener('click', () => {
    closePopup(popupAddCards);
});

popupImageClose.addEventListener('click', () => closePopup(popupImage));




