function showError(form, input, config) {
    const nameError = form.querySelector(`#${input.id}-error`);
    nameError.textContent = input.validationMessage;
    input.classList.add(config.inputInvalidClass);
}

function hideError(form, input, config) {
    const nameError = form.querySelector(`#${input.id}-error`);
    nameError.textContent = '';
    input.classList.remove(config.inputInvalidClass);
}

function checkInputValidity(form, input, config) {
    if (!input.validity.valid) {
        showError(form, input, config);
    } else {
        hideError(form, input, config)
    }
}

function setButtonState(button, isActive, config) {
    if (isActive) {
        button.classList.remove(config.submitInvalidClass);
        button.disabled = false;
    } else {
        button.classList.add(config.submitInvalidClass);
        button.disabled = true;
    }
}

function setEventListeners(form, config) {
    const inputsList = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);

    inputsList.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity(form, input, config);
            setButtonState(submitButton, form.checkValidity(), config);
        });
    });
}



function enablevalidation(config) {
    const forms = document.querySelectorAll(config.formSelector);

    forms.forEach((form) => {
        setEventListeners(form, config);

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            setButtonState(submitButton, false, config);
        });
        const submitButton = form.querySelector(config.submitButtonSelector);
        setButtonState(submitButton, form.checkValidity(), config);
    });
}

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__submit',
    inputInvalidClass: 'popup__field_type_invalid',
    submitInvalidClass: 'popup__submit_invalid'
}

enablevalidation(validationConfig);
