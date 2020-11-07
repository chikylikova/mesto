let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let title = document.querySelector('.profile__info-name');
let subTitle = document.querySelector('.profile__info-work');
let form = document.querySelector('.popup__form');
let nameField = document.querySelector('.popup__field_type_name');
let titleField = document.querySelector('.popup__field_type_title');
let submitClose = document.querySelector('.popup__submit');

function closePopup() {
    popup.classList.remove('popup_opened');
}

function submitForm(event) {
    event.preventDefault();
    title.textContent = nameField.value;
    subTitle.textContent = titleField.value;
    closePopup();
}

form.addEventListener('submit', submitForm);

function showPopup() {
    popup.classList.add('popup_opened');
    nameField.value = title.textContent;
    titleField.value = subTitle.textContent;
}

editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', closePopup);
