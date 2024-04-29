// import validate from "./validate";
const send = (id, name, phone, email, mailerPath) => {
    let form = document.querySelector(id);
    const formWrapper = document.querySelector(".form__wrapper");
    const serverResponce = document.querySelector('.responce');
    const sendAgain = document.querySelector('.form__btn--responce');
    const send = document.querySelector('#send');
    const inputName = document.querySelector(name);
    const inputPhone = document.querySelector(phone);
    const inputEmail = document.querySelector(email);


        send.addEventListener("click", function (event) {
           
        
            if (!inputName.value || !inputEmail.value || !inputPhone.value) {
                event.preventDefault();
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
                    function onInput() {
                        if(validTest(nameOfInput.value)) {
                            nameOfInput.classList.remove('form__input--error');
                            nameOfInput.classList.add('form__input--check');
                        } else {
                            nameOfInput.classList.remove('form__input--check');
                            nameOfInput.classList.add('form__input--error')
                        }
                    }
                    onInput();
                }
                
                validateInputs(inputName, isInputNameValid);
                validateInputs(inputEmail, isInputEmailValid);
                validateInputs(inputPhone, isInputTextValid)
                
            } else {
                form.addEventListener('submit', async function (event) {
                    console.log('hello')
                        event.preventDefault();

                    let response = await fetch(mailerPath, {
                        method: "POST",
                        body: new FormData(form),
                    });
            
                    if (response.ok) {
                        console.log('jo')
                        formWrapper.classList.add('form__wrapper--unvisible');
                        serverResponce.classList.add('responce--visible');
                        send.classList.add('form__btn--unvisible');
                    } else {
                        console.log('fail')
                        formWrapper.classList.add('form__wrapper--unvisible');
                        serverResponce.classList.add('responce--visible');
                        send.classList.add('form__btn--unvisible');
                    }
                    form.reset(); 
                })
                
            }
        });
    
    
   
    sendAgain.addEventListener("click", () => {
        formWrapper.classList.remove('form__wrapper--unvisible');
        serverResponce.classList.remove("responce--visible");
        send.classList.remove('form__btn--unvisible');
    });
}

module.exports = send;