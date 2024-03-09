/*
document.addEventListener('DOMContentLoaded', function() {
    // Получаем данные из LocalStorage
    const storedData = JSON.parse(localStorage.getItem('formData'))  || { progress: 0 };

    // Функция для обработки нажатия кнопки "Зарегистрироваться"
    document.getElementById('registry').addEventListener('click', function(event) {
        event.preventDefault();

        // Получаем значения из инпутов
        const name = document.getElementById('name').value;
        const mail = document.getElementById('mail').value;
        const pass = document.getElementById('pass').value;

        let progressValue = Number(storedData.progress) + 1;
        storedData.progress = progressValue;

        // Обновляем данные в LocalStorage
        localStorage.setItem('formData', JSON.stringify(storedData));

        if (name === '' && pass === '' && mail === '') {
            console.log('Ошибка: данные не заполнены');
        } else {
            func_tg_dis();
        }

        // Выводим значения в консоль
        console.log('Имя:', name);
        console.log('Почта:', mail);
        console.log('Пароль:', pass);
        console.log('Прогресс:', progressValue);
    });

    if (storedData) {
        console.log('Прогресс:', storedData.progress);
    } else {
        console.error('Данные в LocalStorage по прогрессу не найдены.');
    }

    /!*массив ссылок на материал(с левой панели)*!/
    let lesson_arr = document.querySelectorAll('a.btn.btn-primary.lesson')
    /!*снятие блокировки с панели слева*!/
    for (let i = 0; i < Number(storedData.progress); i++){
        lesson_arr[i].classList.remove('disabled')
    }
});
*/


document.addEventListener('DOMContentLoaded', function() {
    // Получаем данные из LocalStorage
    const storedData = JSON.parse(localStorage.getItem('myFormData')) || { progress: 0 };

    // Функция для обработки нажатия кнопки "Зарегистрироваться"
    document.getElementById('registry').addEventListener('click', function(event) {
        event.preventDefault();

        // Получаем значения из инпутов
        const name = document.getElementById('name').value;
        const mail = document.getElementById('mail').value;
        const pass = document.getElementById('pass').value;

        if (name === '' && pass === '' && mail === '') {
            console.log('Ошибка: данные не заполнены');
        } else {
            let progressValue = Number(storedData.progress) + 1;
            storedData.progress = progressValue;

            // Обновляем данные в LocalStorage
            localStorage.setItem('myFormData', JSON.stringify(storedData));

            func_tg_dis();

            // Выводим значения в консоль
            console.log('Имя:', name);
            console.log('Почта:', mail);
            console.log('Пароль:', pass);
            console.log('Прогресс:', progressValue);

            // Обновляем отображение ссылок на материал с левой панели
            updateLessonLinks();
        }
    });

    if (storedData) {
        console.log('Прогресс:', storedData.progress);
    } else {
        console.error('Данные в LocalStorage по прогрессу не найдены.');
    }

    // Функция для обновления отображения ссылок на материал
    function updateLessonLinks() {
        // Массив ссылок на материал (с левой панели)
        let lessonArr = document.querySelectorAll('a.btn.btn-primary.lesson');

        // Снимаем блокировку с панели слева
        for (let i = 0; i < storedData.progress; i++) {
            lessonArr[i].classList.remove('disabled');
        }
    }

    // Обновляем отображение ссылок на материал с левой панели
    updateLessonLinks();
});