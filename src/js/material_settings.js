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
    new LessonInfo("Глобальные горячие клавиши", "Упрощение жизни с помощью горячих клавиш", "hotkeys.html"),
    new LessonInfo("Скриншоты", "Для чего нужны и как их делать?", "screenshots.html"),
    new LessonInfo("Перенос файла через USB-подключение", "Как перенести картинку с телефона на пк", "transferring_files.html"),
    new LessonInfo("Функциональные клавиши", "Быстро и легко работаем с текстом", "basic_keys.html"),
    new LessonInfo("Скачивание приложения", "Учимся скачивать приложение на пк или ноутбук", "download_the_application.html"),
    new LessonInfo("Ошибки со звуком", "Исправляем ошибки со звуком на пк или ноутбуке", "audio_errors.html"),
];

material.createLessons(lessons);
material.showLessons();
