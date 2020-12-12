class FormValidator {
    constructor(config, element) {
        this._element = element;
        this._inputSelector = config.inputSelector;
        this._inputInvalidClass = config.inputInvalidClass;
        this._submitButtonSelector = config.submitButtonSelector;
        this._submitInvalidClass = config.submitInvalidClass;
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

    _setButtonState(button, isActive) {
        if (isActive) {
            button.classList.remove(this._submitInvalidClass);
            button.disabled = false;
        } else {
            button.classList.add(this._submitInvalidClass);
            button.disabled = true;
        }
    }
    
    _setEventListeners() {
        const inputsList = this._element.querySelectorAll(this._inputSelector);
        const submitButton = this._element.querySelector(this._submitButtonSelector);
    
        inputsList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._setButtonState(this._submitButton, this._element.checkValidity());
            });
        });
    }

    enableValidation() {
        this._element.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._setButtonState(this._submitButton, false);
        });
        this._setEventListeners();
    }
}


export default FormValidator;