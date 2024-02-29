import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { getDatabase, ref, set, get } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js';

connectToServer();

const database = getDatabase();
const auth = getAuth();

let refAccount = null;

function register() {
    const name = document.getElementById("registry-name").value;
    const email = document.getElementById("registry-email").value;
    const password = document.getElementById("registry-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const userData = {
                name: name,
                completedLessonsId: []
            };
            refAccount = ref(database, getPathToUser(userCredential));
            set(refAccount, userData)
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
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            refAccount = ref(database, getPathToUser(userCredential));
            get(refAccount, (snapshot) => {
                if (snapshot.exists()) {
                    const userData = snapshot.val();
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

function connectToServer() {
    const config = readFromFile('../../firebaseConfig.json');
    const firebaseConfig = JSON.parse(config);
    initializeApp(firebaseConfig);
}

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

export { register, login, isAuthorized, connectToServer };
