let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let title = document.querySelector('.profile__title');
let subTitle = document.querySelector('.profile__subtitle');
let form = document.querySelector('.popup__form');
let nameField = document.querySelector('.popup__field_type_name');
let titleField = document.querySelector('.popup__field_type_title');

function showPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', closePopup);

function submitForm(event) {
    event.preventDefault();
    title.textContent = nameField.value;
    subTitle.textContent = titleField.value;
}

form.addEventListener('submit', submitForm);