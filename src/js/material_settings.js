function LessonInfo(name, description, link) {
    this.name = name;
    this.description = description;
    this.link = link;
}

function LessonElement(lessonButton, name, description, numberLesson, link) {
    this.lessonButton = lessonButton;
    this.name = name;
    this.description = description;
    this.numberLesson = numberLesson;
    this.link = link;

    lessonButton.href = link;
}
/*добавляем элементы*/
let lessons = [

    new LessonInfo("Логин", "Разбираем понятия: авторизация, регистрация, аутентификация и тд.", "the_memo.html"),
    new LessonInfo("Глобальные горячие клавиши", "Вставить, копировать, вырезать, отменить последнее действие", "hotkeys.html"),
    new LessonInfo("Функциональные клавиши", "Учимся быстро перемещаться по тексту", "basic_keys.html"),
    new LessonInfo("F клавиши", "Настройка звука, яркости, видео", "f_keys.html"),
    new LessonInfo("Скриншоты", "Делаем скрин на пк(ноутбуке)", "screenshots.html"),
    new LessonInfo("Перенос файла через USB-подключение", "Изучаем способы переноса файлов, документов, изображений", "transferring_files.html"),
    new LessonInfo("Скачивание приложения", "Скачиваем приложения через браузер", "download_the_application.html"),
    new LessonInfo("Удаление приложения", "Удаляем ненужные программы", "uninstalling_an_application.html"),
    new LessonInfo("Ошибки со звуком", "Узнаем разные способы исправления ошибок с воспроизведением звука", "audio_errors.html"),
    new LessonInfo("Пароль", "Защищаем свой ПК или ноутбук от недоброжелателей", "device_password.html"),
];

material.createLessons(lessons);
material.showLessons();
