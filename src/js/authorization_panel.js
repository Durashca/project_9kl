import { authorization } from "./authorization.js";

const authorizationPanel = {
    switchTo(indexView) {
        let forms = document.querySelectorAll(".form-profile");

        let currentForm = forms[indexView];
        currentForm.classList.remove("hide");

        for (const form of forms) {
            if (form !== currentForm)
                form.classList.add("hide");

            form.classList.remove("was-validated");
        }
    }
};

function addInputValidationEvent() {
    let forms = document.querySelectorAll(".form-profile");
    forms.forEach(function (form) {
        form.addEventListener("submit", function (event){
            event.preventDefault();
            if (!form.checkValidity()) {
                event.stopPropagation();
            }

            let correctly = Array.from(form.children).every((elem) => {
                let input = elem.querySelector("input");

                if (input !== null)
                    return input.value.length !== 0;

                return true;
            })

            if (correctly) {
                form.classList.contains("registry") ? authorization.register() : authorization.login();
            }

            form.classList.add("was-validated");
        }, false);
    });
}

function addPasswordsValidateEvent() {
    let forms = document.querySelectorAll(".form-profile");

    for (let form of forms) {
        form.addEventListener("submit", function (event) {
            validatePassword(form, event);
        });
    }
}

function validatePassword(form, event) {
    let passwordElem = Array.from(form.children).find((elem) => {
        let input = elem.querySelector("input");

        if (input !== null)
            return input.type === "password";

        return false;
    });
    let passwordInput = passwordElem.querySelector("input");
    let passwordFeedback = passwordElem.querySelector(".invalid-feedback");
    let password = passwordInput.value;

    if (password.length === 0)
        return;

    if (password.length < 8) {
        passwordFeedback.innerText = "Пароль должен содержать не менее 8 символов";
        event.preventDefault();
        return;
    }

    let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        passwordFeedback.innerText = "Пароль должен содержать цифры, специальные символы, строчные и заглавные буквы";
        event.preventDefault();
    }
}

function addSwitchingAuthorizationCapabilitiesEvent() {
    let textLogin = document.querySelector("#proceed-to-login");
    textLogin.addEventListener("click", () =>
        authorizationPanel.switchTo(1));

    let textRegistry = document.querySelector("#proceed-to-registry");
    textRegistry.addEventListener("click", () =>
        authorizationPanel.switchTo(0));

    // addPasswordsValidateEvent();
    addInputValidationEvent();
}

// addSwitchingAuthorizationCapabilitiesEvent();

export { authorizationPanel, addSwitchingAuthorizationCapabilitiesEvent };
