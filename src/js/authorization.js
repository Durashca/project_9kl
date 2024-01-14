authorization = {
    AddEventRegistry() {
        let form = document.querySelector("#form-profile");
        form.addEventListener("submit", function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                authorization.Register();
            }

            form.classList.add("was-validated");
        }, false);
    },

    Register() {
        console.log("Вы зарегестрированы");
    },

    Login() {

    },
};

authorization.AddEventRegistry();
