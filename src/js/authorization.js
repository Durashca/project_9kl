function connectToServer() {
    let config = readFromFile('../../firebaseConfig.json');
    const firebaseConfig = JSON.parse(config);
    firebase.initializeApp(firebaseConfig);
}

connectToServer();

// сама логика авторизации с помощью класса `authorization`
let authorization = (function () {
    let database = firebase.database();
    let auth = firebase.auth();

    let refAccount = null;

    function register() {
        let name = document.getElementById("registry-name").value;
        let email = document.getElementById("registry-email").value;
        let password = document.getElementById("registry-password").value;

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const userData = {
                    name: name,
                    progress: 0
                };
                refAccount = database.ref(getPathToUser(userCredential));
                refAccount.set(userData)
                    .then(() => {
                        console.log('Данные пользователя успешно сохранены в Realtime Database');
                        return true;
                    })
                    .catch((error) => {
                        console.error('Ошибка при сохранении данных: ', error.message);
                        return false;
                    });
            })
            .catch((error) => {
                console.error('Ошибка при регистрации пользователя: ', error.message);
                return false;
            });
    }

    function login() {
        let email = document.getElementById("login-email").value;
        let password = document.getElementById("login-password").value;

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                refAccount = database.ref(getPathToUser(userCredential));
                refAccount.once("value", (snapshot) => {
                    if (snapshot.exists()) {
                        let userData = snapshot.val();
                        alert("Your name is " + userData.name);
                        console.log('Вы успешно вошли в аккаунт');
                    } else {
                        console.error('Пользователь с таким ID не найден');
                    }
                });
            })
            .catch((error) => {
                console.error('Ошибка при авторизации пользователя: ', error.message);
                return false;
            });
    }

    function isAuthorized() {
        return refAccount !== null;
    }

    function getPathToUser(userCredential) {
        return `users/${userCredential.user.uid}`;
    }

    return {
        register: register,
        login: login,
        isAuthorized: isAuthorized,
    };
})();

function readFromFile(filePath) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, false);
    xhr.send();
    if (xhr.status === 200) {
        return xhr.responseText;
    }
    else {
        throw new Error('Failed to read the file');
    }
}
