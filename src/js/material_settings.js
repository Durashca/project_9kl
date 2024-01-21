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

let lessons = [
    new LessonInfo("Горячие клавиши", "Упрощение жизни с помощью горячих клавиш", "#"),
    new LessonInfo("Скриншоты", "Для чего нужны и как их делать?", "screenshots.html"),
];

material.createLessons(lessons);
material.showLessons();
