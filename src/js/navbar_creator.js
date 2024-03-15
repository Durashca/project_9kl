const navbarCode =
    `
<header id="h-space" class="text-center">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" style="--bs-navbar-padding-y: 0rem; z-index: 10">
                        <div class="container-xxl theme little-dark" style="min-height: 50px; box-shadow: 1px 2px 10px grey; text-align: justify">
                            <a class="navbar-brand" href="#">ВсеЗнай</a>
                            <!--тайная кнопка-->
                            <div>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Переключатель навигации">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <!--профиль-->
                                <button class="btn position-relative profile" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                    <img class="profile" src="src/images/garbage/user_profile.png"  alt="профиль">

                                    <!--уведомления-->
                                    <span id="notification" class="position-absolute badge rounded-pill bg-dark" style="right: -8px; top: -2px">
                        !
                        <span class="visually-hidden">непрочитанные сообщения</span>
                    </span>
                                </button>
                                <!---->
                            </div>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="index.html">Главная</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                                           aria-controls="offcanvasExample">Материал</a>
                                    </li>
                                </ul>
                               
                            </div>
                        </div>
                    </nav>
                    <!--панель справа-->
                    <div class="offcanvas offcanvas-end" style="background-color: #F5F5F5" tabindex="-1"
                         id="offcanvasRight"
                         aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Зарегистрироваться</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Закрыть"></button>
                        </div>
                        <div style="text-align: start" class="offcanvas-body">
                            <!--поля ввода-->
                            <!--register-->
                            <form class="form-profile row g-3 registry" novalidate id="registry_form">
                                <div class="col-md-8">
                                    <label for="name" class="form-label">Имя пользователя</label>
                                    <input type="text" class="form-control" id="name" placeholder="Ваше имя пользователя" required>
                                    <div class="invalid-feedback">
                                        Пожалуйста, введите имя пользователя.
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <label for="mail" class="form-label">Почта</label>
                                    <input type="email" class="form-control" id="mail" placeholder="Ваша почта" required>
                                    <div class="invalid-feedback">
                                        Пожалуйста, введите почту.
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <label for="pass" class="form-label">Пароль</label>
                                    <input type="password" class="form-control" id="pass" placeholder="Ваш пароль" required>
                                    <div class="invalid-feedback">
                                        Пожалуйста, введите пароль.
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <button type="submit" class="btn btn-primary" id="registry">Зарегистрироваться</button>
                                </div>
                                <div class="col-md-8">
                                    <a>Уже есть аккаунт? <a id="proceed-to-login" href="#">Войти</a></a>
                                </div>
                            </form>
                            <!--login-->
                        <form id="login_form" class="form-profile row g-3 login hide" novalidate>
                                 <div class="col-md-8">
                                    <label for="login-email" class="form-label">Почта</label>
                                    <input type="email" class="form-control" id="login-email" placeholder="Ваша почта" required>
                                <div class="invalid-feedback">
                                  Пожалуйста, введите почту.
                                </div>
                                </div>
                                     <div class="col-md-8">
                             <label for="login-password" class="form-label">Пароль</label>
                                <input type="password" class="form-control" id="login-password" placeholder="Ваш пароль" required>
                                    <div class="invalid-feedback">
                                  Пожалуйста, введите пароль.
                                </div>
                                </div>
                                 <div class="col-md-8">
                              <button type="submit" class="btn btn-primary" id="login">Войти</button>
                              </div>
                              <div class="col-md-10">
                            <a>Ещё нет аккаунта? <a id="proceed-to-registry" href="#">Зарегистрироваться</a></a>
                                    </div>
                            </form>
                            <!--профиль-->
                             <form id="user_profile" class="form-profile row g-3 login hide" novalidate>
                                <div class="col-md-8">
                                   <p id="name_profile">Ваше имя:</p>
                                </div>
                                <div class="col-md-8">
                                   <p id="mail_profile">Ваша почта:</p>                                    
                                </div>
                                <div class="col-md-8">
                                    <p id="pass_profile">Ваш пароль</p>
                                </div>
                                <div class="col-md-8">
                                    <p id="progress_profile">Ваш пароль</p>
                                </div>
                                <div class="col-md-8">
                                   <!--  <button type="button" class="btn btn-primary" id="update_progress">Обновить прогресс</button>-->
                                </div>
                                
                               <a>Есть другой аккаунт? <a id="exit_profile" href="#">Выйти</a></a>
                            </form>
                            <!---->
                        </div>
                    </div>
                    <!--material-->
                    <div class="offcanvas offcanvas-start offcanvas-right" style="background-color: #F5F5F5" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Материал</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
                        </div>
                        <div class="offcanvas-body" style="overflow: hidden;">
                            <!--прогресбар-->
                            <div>
                                <h6 class="text-center">Прогресс по материалу:</h6>
                                <div class="progress" role="progressbar" aria-label="Пример информации"
                                     aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="height: 1.4em">
                                    <div id="progress_bar" class="progress-bar-animated progress-bar-striped bg-dark"
                                         style="width: 0"></div>
                                </div>
                            </div>
                            <hr>
                            <div class="material-body-scroll">
                                <div class="list-lessons">

                                </div>
                            </div><!---->
`;

document.body.insertAdjacentHTML('afterbegin', navbarCode);

// Обновленный код JavaScript
let userProgress = JSON.parse(localStorage.getItem('userProgress')) || Array(10).fill(false); // Инициализация userProgress
document.addEventListener('DOMContentLoaded', function () {
    const storedUserName = localStorage.getItem('userName');
    const storedUserEmail = localStorage.getItem('userEmail');
    const storedUserPassword = localStorage.getItem('userPassword');


    if (storedUserName && storedUserEmail && storedUserPassword) {
        showUserProfile();
    }


    const proceedToLogin = document.getElementById('proceed-to-login');
    const proceedToRegistry = document.getElementById('proceed-to-registry');
    const exitProfile = document.getElementById('exit_profile');
    const registryForm = document.getElementById('registry_form');
    const loginForm = document.getElementById('login_form');
    const userProfile = document.getElementById('user_profile');
    let top_text = document.querySelector('#offcanvasRightLabel');

    proceedToLogin.addEventListener('click', function (event) {
        event.preventDefault();
        registryForm.classList.add('hide');
        loginForm.classList.remove('hide');
        userProfile.classList.add('hide');
    });

    proceedToRegistry.addEventListener('click', function (event) {
        event.preventDefault();
        loginForm.classList.add('hide');
        userProfile.classList.add('hide');
        registryForm.classList.remove('hide');
        top_text.textContent = 'Зарегистрироваться';
    });

    exitProfile.addEventListener('click', function (event) {
        event.preventDefault();
        userProfile.classList.add('hide');
        loginForm.classList.remove('hide');
    });


    document.getElementById('registry').addEventListener('click', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('mail').value;
        const password = document.getElementById('pass').value;

        saveUserData(name, email, password, 0);
        showRegistrationForm() ///!!!!!
        showUserProfile();
    });

    function saveUserData(name, email, password, progress) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        localStorage.setItem('userProgress', progress);
    }


    function showRegistrationForm() {
        userProfile.classList.add('hide');
        loginForm.classList.add('hide');
        registryForm.classList.remove('hide');
        top_text.textContent = 'Зарегистрироваться';
        document.getElementById('notification').style.display = 'block';

    }

    document.getElementById('login').addEventListener('click', function (event) {
        event.preventDefault();

        const inputEmail = document.getElementById('login-email');
        const inputPassword = document.getElementById('login-password');

        // Получаем сохраненные данные из локального хранилища
        const savedEmail = localStorage.getItem('userEmail');
        const savedPassword = localStorage.getItem('userPassword');

        if (inputEmail.value === savedEmail && inputPassword.value === savedPassword) {
            // В случае совпадения показываем форму с данными пользователя
            showUserProfile();
        } else {
            // В случае несовпадения можно вывести сообщение об ошибке или предпринять другие действия
            console.log('Неправильные учетные данные. Попробуйте снова.');
            inputPassword.classList.add('error-input');
            inputEmail.classList.add('error-input');
        }
    });

// Добавляем обработчик для автоматического отображения профиля пользователя при повторном входе
    if (storedUserName && storedUserEmail && storedUserPassword) {
        showUserProfile();
    }
});


// Функция для отображения данных пользователя в форме профиля
function showUserProfile() {
    const userProfileForm = document.getElementById('user_profile');
    const nameElement = document.getElementById('name_profile');
    const mailElement = document.getElementById('mail_profile');
    const passElement = document.getElementById('pass_profile');
    const progressElement = document.getElementById('progress_profile');

    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');
    const userPassword = localStorage.getItem('userPassword');
    const userProgress = JSON.parse(localStorage.getItem('userProgress')) || Array(10).fill(false);

    nameElement.textContent = `Ваше имя: ${userName}`;
    mailElement.textContent = `Ваша почта: ${userEmail}`;
    passElement.textContent = `Ваш пароль: ${userPassword}`;

    const progressPercent = (userProgress.filter(value => value).length * 10 + 10) + '%'; // Рассчитываем процент выполненных заданий, начиная с 10%
    progressElement.textContent = `Ваш прогресс: ${progressPercent}`;

    userProfileForm.classList.remove('hide');
    document.getElementById('registry_form').classList.add('hide');
    document.getElementById('login_form').classList.add('hide');
    document.getElementById('offcanvasRightLabel').textContent = 'Ваш профиль';
    document.getElementById('notification').style.display = 'none';
}
function updateProgress(index) {
    const userProgress = JSON.parse(localStorage.getItem('userProgress')) || Array(10).fill(false);

    // Увеличиваем прогресс на 10% за каждый правильный ответ
    index = parseInt(index);
    if (index >= 0 && index < userProgress.length) {
        userProgress[index] = true;
        const progressPercent = userProgress.filter(value => value).length * 10;
        localStorage.setItem('userProgress', JSON.stringify(userProgress));
        showUserProfile(); // Обновляем данные на странице
        console.log(`Прогресс увеличен! Текущий прогресс: ${progressPercent}%`);
    } else {
        console.log(`Ошибка: Некорректный индекс ${index}`);
    }
}