class FormValidator {
    constructor(config, element) {
        this._element = element;
        this._inputSelector = config.inputSelector;
        this._inputInvalidClass = config.inputInvalidClass;
        this._submitButtonSelector = config.submitButtonSelector;
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

    _setButtonState(submitButtonSelector, isActive) {
        if (isActive) {
            submitButtonSelector.classList.remove('popup__submit_invalid');
            submitButtonSelector.disabled = false;
        } else {
            submitButtonSelector.classList.add('popup__submit_invalid');
            submitButtonSelector.disabled = true;
        }
    } 
    
    _setEventListeners() {
        const inputsList = Array.from(this._element.querySelectorAll(this._inputSelector));
        const submitButton = this._element.querySelector(this._submitButtonSelector);
    
        inputsList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._setButtonState(submitButton, this._element.checkValidity());
            });
        });
    };

    enableValidation() {
        const submitButton = this._element.querySelector(this._submitButtonSelector);

        this._element.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._setButtonState(submitButton, false);
        });
        this._setEventListeners();
        this._setButtonState(submitButton, this._element.checkValidity());
    }
}


    export default FormValidator;