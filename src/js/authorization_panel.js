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
            if (!form.checkValidity())
                event.stopPropagation();

            let correctly = Array.from(form.children).every((elem) => {
                let input = elem.querySelector("input");

                if (input !== null)
                    return input.value.length !== 0;

                return true;
            })

            if (correctly)
                form.classList.contains("registry") ? authorization.register() : authorization.login();

            form.classList.add("was-validated");
        }, false);
    });
}

function addSwitchingAuthorizationCapabilitiesEvent() {
    let textLogin = document.querySelector("#proceed-to-login");
    textLogin.addEventListener("click", () =>
        authorizationPanel.switchTo(1));

    let textRegistry = document.querySelector("#proceed-to-registry");
    textRegistry.addEventListener("click", () =>
        authorizationPanel.switchTo(0));

    addInputValidationEvent();
}

export { authorizationPanel, addSwitchingAuthorizationCapabilitiesEvent };
