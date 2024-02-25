let navbarCode =
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
                    <img class="profile" src="src/images/settings/theme/user-profile.png" alt="профиль">
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
                <!--поиск-->
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск">
                    <button id="search_button" class="btn btn-primary" type="submit">Искать</button>
                </form>
                <div style="padding-bottom: 10px"></div>
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
            <form class="form-profile row g-3 registry" novalidate>
                <div class="col-md-8">
                    <label for="validationTextareaRegister1" class="form-label">Имя пользователя</label>
                    <input type="text" class="form-control" id="registry-name" placeholder="Ваше имя пользователя" required>
                    <div class="invalid-feedback">
                        Пожалуйста, введите имя пользователя.
                    </div>
                </div>
                <div class="col-md-8">
                    <label for="validationTextareaRegister2" class="form-label">Почта</label>
                    <input type="email" class="form-control" id="registry-email" placeholder="Ваша почту" required>
                    <div class="invalid-feedback">
                        Пожалуйста, введите почту.
                    </div>
                </div>
                <div class="col-md-8 is-invalid">
                    <label for="validationTextareaRegister3" class="form-label">Пароль</label>
                    <input type="password" class="form-control" id="registry-password" placeholder="Ваш пароль" required>
                    <div class="invalid-feedback">
                        Пожалуйста, введите пароль.
                    </div>
                </div>
                <div class="col-md-8">
                    <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
                </div>
                <div class="col-md-8">
                    <a>Уже есть аккаунт? <a id="proceed-to-login" href="#">Войти</a></a>
                </div>
            </form>
            <!--login-->
            <form class="form-profile row g-3 login hide" novalidate>
                <div class="col-md-8">
                    <label for="validationTextareaLogin2" class="form-label">Почта</label>
                    <input type="email" class="form-control" id="login-email" placeholder="Ваша почту" required>
                    <div class="invalid-feedback">
                        Пожалуйста, введите почту.
                    </div>
                </div>
                <div class="col-md-8">
                    <label for="validationTextareaLogin3" class="form-label">Пароль</label>
                    <input type="password" class="form-control" id="login-password" placeholder="Ваш пароль" required>
                    <div class="invalid-feedback">
                        Пожалуйста, введите пароль.
                    </div>
                </div>
                <div class="col-md-8">
                    <button type="submit" class="btn btn-primary">Войти</button>
                </div>
                <div class="col-md-10">
                    <a>Ещё нет аккаунта? <a id="proceed-to-registry" href="#">Зарегистрироваться</a></a>
                </div>
            </form>
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
            </div>
            <!---->
        </div>
    </div>
</header>
<!---->
`;

document.body.insertAdjacentHTML('afterbegin', navbarCode);
