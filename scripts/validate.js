



function setButtonState(button, isActive, config) {
    if (isActive) {
        button.classList.remove(config.submitInvalidClass);
        button.disabled = false;
    } else {
        button.classList.add(config.submitInvalidClass);
        button.disabled = true;
    }
}





/*function enablevalidation(config) {
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

enablevalidation(validationConfig);*/

