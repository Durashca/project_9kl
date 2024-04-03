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
                    <label for="surname" class="form-label">Фамилия</label>
                    <input type="text" class="form-control" id="surname" placeholder="Ваша фамилия" required>
                    <div class="invalid-feedback">
                        Пожалуйста, введите фамилию.
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
           
            </form>
            
            <!--профиль-->
            <form id="user_profile" class="form-profile row g-3 hide">
                <div class="col-md-8">
                    <p id="name_profile">Ваше имя:</p>
                </div>
                <div class="col-md-8">
                    <p id="surname_profile">Ваша фамилия:</p>
                </div>
                <div class="col-md-8">
                    <p id="mail_profile">Ваша почта:</p>
                </div>
                <div class="col-md-8">
                    <p id="pass_profile">Ваш пароль</p>
                </div>
                <div class="col-md-8">
                    <p id="progress_profile">Ваш прогресс</p>
                </div>
                <div class="col-md-8">
                    <!--  <button type="button" class="btn btn-primary" id="update_progress">Обновить прогресс</button>-->
                </div>

                <a>Есть желание покинуть или пройти снова сайт? <a id="exit_profile" href="#">Удалить профиль</a></a>
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

let userProgress = JSON.parse(localStorage.getItem('userProgress')) || Array(10).fill(false);

document.addEventListener('DOMContentLoaded', function () {

    const exitProfile = document.getElementById('exit_profile');
    /*const registryForm = document.getElementById('registry_form');*/
    const userProfile = document.getElementById('user_profile');
    let top_text = document.getElementById('offcanvasRightLabel');

    exitProfile.addEventListener('click', function (event) {
        event.preventDefault();
        localStorage.removeItem('userName');
        localStorage.removeItem('userSurname');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userPassword');
        localStorage.removeItem('userProgress');

        userProfile.classList.add('hide');

        // Перенаправление на первую страницу сайта
        window.location.href = 'the_memo.html';
    });

    document.getElementById('registry').addEventListener('click', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const email = document.getElementById('mail').value;
        const password = document.getElementById('pass').value;

        saveUserData(name, surname, email, password, 0);
        showUserProfile();
    });

    function saveUserData(name, surname, email, password, progress) {
        const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        const formattedSurname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();

        localStorage.setItem('userName', formattedName);
        localStorage.setItem('userSurname', formattedSurname);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        localStorage.setItem('userProgress', progress);
    }

    if (localStorage.getItem('userName') && localStorage.getItem('userEmail') && localStorage.getItem('userPassword')) {
        showUserProfile();
    }
});
// глобально
function showUserProfile() {
    const userProfileForm = document.getElementById('user_profile');
    const nameElement = document.getElementById('name_profile');
    const surnameElement = document.getElementById('surname_profile');
    const mailElement = document.getElementById('mail_profile');
    const passElement = document.getElementById('pass_profile');
    const progressElement = document.getElementById('progress_profile');

    const userName = localStorage.getItem('userName');
    const userSurname = localStorage.getItem('userSurname');
    const userEmail = localStorage.getItem('userEmail');
    const userPassword = localStorage.getItem('userPassword');
    const userProgress = JSON.parse(localStorage.getItem('userProgress')) || Array(10).fill(false);

    // скрыть уведомление
    document.getElementById('notification').classList.add('hide');

    nameElement.textContent = `Ваше имя: ${userName}`;
    surnameElement.textContent = `Ваша фамилия: ${userSurname}`;
    mailElement.textContent = `Ваша почта: ${userEmail}`;
    passElement.textContent = `Ваш пароль: ${userPassword}`;

    const progressPercent = userProgress.length > 0 ? `${(userProgress.filter(value => value).length * 10)}%` : '0%';
    progressElement.textContent = `Ваш прогресс: ${progressPercent}`;

    userProfileForm.classList.remove('hide');
    document.getElementById('registry_form').classList.add('hide');
    document.getElementById('offcanvasRightLabel').textContent = 'Профиль';

}

function updateProgress(index) {
    let userProgress = JSON.parse(localStorage.getItem('userProgress')) || Array(10).fill(false);

    // Увеличиваем прогресс на 10% за каждый правильный ответ
    index = parseInt(index);
    if (index >= 0 && index < userProgress.length) {
        userProgress[index] = true;
        localStorage.setItem('userProgress', JSON.stringify(userProgress));
        showUserProfile(); // Обновляем данные на странице
    } else {
        console.log(`Ошибка: Некорректный индекс ${index}`);
    }
}

