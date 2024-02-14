let type;
type="module"
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
    import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
    // Инициализация Firebase
    const firebaseConfig = {
    apiKey: "AIzaSyApYvBJ_Z6AgypvZ4kDEhA_EodJnTFr8-A",
    authDomain: "project9kl-1bce9.firebaseapp.com",
    databaseURL: "https://project9kl-1bce9-default-rtdb.firebaseio.com",
    projectId: "project9kl-1bce9",
    storageBucket: "project9kl-1bce9.appspot.com",
    messagingSenderId: "807367263615",
    appId: "1:807367263615:web:e0a42155f098998244064a",
    measurementId: "G-6YSQ8ZQQ8K"
};

    let app = initializeApp(firebaseConfig);
    const database = getDatabase();

    // Функция регистрации пользователя
    function registerUser() {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    let auth = getAuth(app);
    console.log(app);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
// Регистрация успешна, сохраняем данные в Realtime Database
    const userData = {
    email: email,
    password: password
};
    ref(database, 'users/' + userCredential.user.uid).set(userData)
    .then(() => {
    console.log('Данные пользователя успешно сохранены в Realtime Database');
})
    .catch((error) => {
    console.error('Ошибка при сохранении данных: ', error);
});
})
    .catch((error) => {
    console.error('Ошибка при регистрации пользователя: ', error);
});
}

    let btn = document.querySelector("#btn");
    btn.addEventListener('click', registerUser);
