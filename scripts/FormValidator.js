class FormValidator {
    constructor(config, element) {
        this._element = element;
        this._inputSelector = config.inputSelector;
        this._inputInvalidClass = config.inputInvalidClass;
    }

    _showError(input, errorMessage) {
        const nameError = this._element.querySelector(`#${input.id}-error`);
        nameError.textContent = errorMessage;
        input.classList.add(this._inputInvalidClass);
    }

    _hideError(input) {
        const nameError = this._element.querySelector(`#${input.id}-error`);
        nameError.textContent = '';
        input.classList.remove(this._inputInvalidClass);
    }

    _checkInputValidity(input) {
        if (!input.validity.valid) {
            this._showError(input, input.validationMessage);
        } else {
            this._hideError(input);
        }
    }

    _setEventListeners() {
        const inputsList = this._element.querySelectorAll(this._inputSelector);
        //const submitButton = form.querySelector(config.submitButtonSelector);
    
        inputsList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                //setButtonState(submitButton, form.checkValidity(), config);
            });
        });
    }

    enableValidation() {
        this._element.addEventListener('submit', (evt) => {
            evt.preventDefault();
            //setButtonState(submitButton, false, config);
        });
        this._setEventListeners();
    }
}


export default FormValidator;