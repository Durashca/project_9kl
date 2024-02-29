import * as authorization from "./authorization.js";

function switchTo(indexView) {
    const forms = document.querySelectorAll(".form-profile");

    const currentForm = forms[indexView];
    currentForm.classList.remove("hide");

    for (const form of forms) {
        if (form !== currentForm)
            form.classList.add("hide");

        form.classList.remove("was-validated");
    }
}

function addInputValidationEvent() {
    const forms = document.querySelectorAll(".form-profile");
    forms.forEach(function (form) {
        form.addEventListener("submit", function (event){
            event.preventDefault();
            if (!form.checkValidity())
                event.stopPropagation();

            let correctly = Array.from(form.children).every((elem) => {
                const input = elem.querySelector("input");

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
    const textLogin = document.querySelector("#proceed-to-login");
    textLogin.addEventListener("click", () => switchTo(1));

    const textRegistry = document.querySelector("#proceed-to-registry");
    textRegistry.addEventListener("click", () => switchTo(0));

    addInputValidationEvent();
}

export { switchTo, addSwitchingAuthorizationCapabilitiesEvent };
