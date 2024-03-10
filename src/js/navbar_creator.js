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
                                    <span class="position-absolute badge rounded-pill bg-dark" style="right: -8px; top: -2px">
                        !
                        <span class="visually-hidden">непрочитанные сообщения</span>
                    </span>
                                </button>
                                <!---->
                            </div>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="main.html">Главная</a>
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
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Авторизация</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Закрыть"></button>
                        </div>
                        <div style="text-align: start" class="offcanvas-body">
                            <!--поля ввода-->
                            <!--register-->
                            <form class="form-profile row g-3 registry" novalidate id="myForm">
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
                        <form id="login-form" class="form-profile row g-3 login hide" novalidate>
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
                                     aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="height: 0.9em">
                                    <div class="progress-bar-animated progress-bar-striped bg-dark"
                                         style="width: 50%"></div>
                                </div>
                            </div>
                            <hr>
                            <div class="material-body-scroll">
                                <div class="list-lessons">

                                </div>
                            </div><!---->
`;

document.body.insertAdjacentHTML('afterbegin', navbarCode);

// Функция для сохранения данных пользователя и прогресса
function saveUserData(name, email, password, progress) {
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    const userProgress = progress + 1;
    localStorage.setItem('userProgress', userProgress);
}

// Функция для обновления прогресса
function updateProgress() {
    let userProgress = localStorage.getItem('userProgress') || 0;
    userProgress = parseInt(userProgress) + 1;
    localStorage.setItem('userProgress', userProgress);

    showUserProfile(); // Отображаем обновленные данные пользователя
}

// Функция для отображения данных пользователя
function showUserProfile() {
    const userProfileForm = document.getElementById('user_profile');
    const nameElement = document.getElementById('name_profile');
    const mailElement = document.getElementById('mail_profile');
    const passElement = document.getElementById('pass_profile');
    const progressElement = document.getElementById('progress_profile');

    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');
    const userPassword = localStorage.getItem('userPassword');
    const userProgress = localStorage.getItem('userProgress');

    nameElement.textContent = `Ваше имя: ${userName}`;
    mailElement.textContent = `Ваша почта: ${userEmail}`;
    passElement.textContent = `Ваш пароль: ${userPassword}`;
    progressElement.textContent = `Ваш прогресс: ${userProgress}`;

    userProfileForm.classList.remove('hide');
    document.getElementById('myForm').classList.add('hide');
}

document.getElementById('registry').addEventListener('click', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const password = document.getElementById('pass').value;

    saveUserData(name, email, password, 0); // Сохраняем данные пользователя и начальный прогресс

    showUserProfile();
});

document.getElementById('update_progress').addEventListener('click', function(event) {
    event.preventDefault();

    updateProgress();
    func_progress(); // Вызываем функцию для дополнительного повышения прогресса
});

document.getElementById('proceed-to-login').addEventListener('click', function(event) {
    event.preventDefault();

    document.getElementById('myForm').classList.remove('hide');
    document.getElementById('user_profile').classList.add('hide');
});

document.getElementById('exit_profile').addEventListener('click', function(event) {
    event.preventDefault();

    localStorage.clear(); // Очищаем локальное хранилище при выходе из аккаунта

    document.getElementById('myForm').classList.remove('hide');
    document.getElementById('user_profile').classList.add('hide');
});

// Новая функция func_progress
function func_progress() {
    let currentProgress = localStorage.getItem('userProgress') || 0;
    currentProgress = parseInt(currentProgress) + 1;
    localStorage.setItem('userProgress', currentProgress);
    return currentProgress;
}