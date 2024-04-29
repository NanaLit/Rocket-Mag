const validate = (name, phone, email) => {
    const sendBtn = document.querySelector('#send');
    const inputName = document.querySelector(name);
    const inputPhone = document.querySelector(phone);
    const inputEmail = document.querySelector(email);
   
    const NAME_REGEXP = /[a-zA-Zа-яА-я]/g;
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    function isInputNameValid(value) {
        return (NAME_REGEXP.test(value) && value.length > 1);
    }
    function isInputEmailValid(value) {
        return (EMAIL_REGEXP.test(value) && value.length > 7);
    }
    function isInputTextValid(value) {
        return (value.length > 10 && value.length < 17);
    }

    function validateInputs(nameOfInput, validTest) {
        // function disableBtn() {
        //     if(isInputEmailValid(inputEmail.value) && isInputNameValid(inputName.value) && isInputTextValid(inputPhone.value)) {
        //         // sendBtn.removeAttribute('disabled');
        //     } else {
        //         // sendBtn.setAttribute('disabled', '');
        //     }
        // }
        function onInput() {
            if(validTest(nameOfInput.value)) {
                nameOfInput.classList.remove('form__input--error');
                nameOfInput.classList.add('form__input--check');
            } else {
                nameOfInput.classList.remove('form__input--check');
                nameOfInput.classList.add('form__input--error')
            }
        }
        nameOfInput.addEventListener('change', onInput);
        // nameOfInput.addEventListener('change', disableBtn);
    }
    
    validateInputs(inputName, isInputNameValid);
    validateInputs(inputEmail, isInputEmailValid);
    validateInputs(inputPhone, isInputTextValid)
      let getInputNumbersValue = function (input) {
    // Return stripped input value — just numbers
            return input.value.replace(/\D/g, '');
        }

        let onPhonePaste = function (e) {
            let input = e.target,
                inputNumbersValue = getInputNumbersValue(input);
            let pasted = e.clipboardData || window.clipboardData;
            if (pasted) {
                let pastedText = pasted.getData('Text');
                if (/\D/g.test(pastedText)) {
                    input.value = inputNumbersValue;
                    return;
                }
            }
        }
        let onPhoneInput = function (e) {
            let input = e.target,
                inputNumbersValue = getInputNumbersValue(input),
                selectionStart = input.selectionStart,
                formattedInputValue = "";

            if (!inputNumbersValue) {
                return input.value = "";
            }

            if (input.value.length != selectionStart) {
                if (e.data && /\D/g.test(e.data)) {
                    input.value = inputNumbersValue;
                }
                return;
            }

            if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
                // if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
                // let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
                // formattedInputValue = input.value = firstSymbols + " ";
                // if (inputNumbersValue.length > 1) {
                //     formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
                // }
                // if (inputNumbersValue.length >= 5) {
                //     formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
                // }
                // if (inputNumbersValue.length >= 8) {
                //     formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
                // }
                // if (inputNumbersValue.length >= 10) {
                //     formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
                // }
                formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
            } else {
                formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
            }
            input.value = formattedInputValue;
        }
        let onPhoneKeyDown = function (e) {
            let inputValue = e.target.value.replace(/\D/g, '');
            if (e.keyCode == 8 && inputValue.length == 1) {
                e.target.value = "";
            }
  }

  inputPhone.addEventListener('keydown', onPhoneKeyDown);
  inputPhone.addEventListener('input', onPhoneInput, false);
  inputPhone.addEventListener('paste', onPhonePaste, false);


}
module.exports = validate;