const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCards = document.querySelector('.popup_type_add-card');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeEditUserProfileButton = document.querySelector('.popup__close_edit_profile');
const closeAddButton = document.querySelector('.popup__close_add-button');

const title = document.querySelector('.profile__info-name');
const subTitle = document.querySelector('.profile__info-work');
const elementTitle = document.querySelector('.element__title');

const editUserForm = document.querySelector('.popup__form_edit-profile');

const nameField = document.querySelector('.popup__field_type_name');
const titleField = document.querySelector('.popup__field_type_title');
const placeField = document.querySelector('.popup__field_type_place');
const placeNameField = document.querySelector('.popup__field_place_name');


const popupImage = document.querySelector('.popup_type_image');
const popupImagePhoto = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__title_image_name');
const popupImageClose = document.querySelector('.popup__close_image');

function closePopup(popup) { 
    popup.classList.remove('popup_opened'); 
} 

function showPopup(popup) {
    popup.classList.add('popup_opened'); 
}

function submitEditUserProfileForm(event) { 
    event.preventDefault(); 
    title.textContent = nameField.value; 
    subTitle.textContent = titleField.value; 
    closePopup(popupEditProfile); 
} 

editUserForm.addEventListener('submit', submitEditUserProfileForm); 

function showEditProfilePopup() { 
    nameField.value = title.textContent; 
    titleField.value = subTitle.textContent;  

    showPopup(popupEditProfile);
} 

editButton.addEventListener('click', () => showEditProfilePopup()); 
closeEditUserProfileButton.addEventListener('click', () => closePopup(popupEditProfile)); 
addButton.addEventListener('click', () => showPopup(popupAddCards));
closeAddButton.addEventListener('click', () => closePopup(popupAddCards));
popupImageClose.addEventListener('click', () => closePopup(popupImage));


const cardsList = document.querySelector('.element');
const cardTemplate = document.querySelector('#template-card').content.querySelector('.element__card');

function createCard(cardData) {
    const cardElement = cardTemplate.cloneNode(true);
    const photo = cardElement.querySelector('.element__image');
    const title = cardElement.querySelector('.element__title');

    photo.src = cardData.link;
    photo.alt = cardData.name;
    title.textContent = cardData.name;

    cardElement.querySelector('.element__button-delete').addEventListener('click', event => {
        const element = event.target.closest('.element__card');

        if(element) {
            element.remove();
        }
    });

    cardElement.querySelector('.element__button-like').addEventListener('click', event => {
        event.target.classList.toggle('element__button-like_active');
    });

    photo.addEventListener('click', event => {
        popupImagePhoto.src = event.target.src;
        popupImageTitle.textContent = event.target.alt;
        popupImagePhoto.alt = popupImageTitle.textContent;
        showPopup(popupImage);
    })

    cardsList.prepend(cardElement);
}

initialCards.forEach(createCard);

const addCardForm = document.querySelector('.popup__form_card');

addCardForm.addEventListener('submit', event => {
    event.preventDefault();
    const cardTitle = addCardForm.querySelector('.popup__field_place_name').value;
    const cardImage = addCardForm.querySelector('.popup__field_type_place').value;

    createCard({
        name: cardTitle,
        link: cardImage
    });
    closePopup(popupAddCards);

})
