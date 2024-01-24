const lessonState = { IDLE: 'idle', NEW: 'new', SOON: 'soon', OLD: 'old' };

function LessonInfo(name, description, link, state = 'idle') {
    this.name = name;
    this.description = description;
    this.state = state;
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
    new LessonInfo("Горячие клавиши", "Упрощение жизни с помощью горячих клавиш" , "hotkeys.html"),
    new LessonInfo("Скриншоты", "Для чего нужны и как их делать?", "screenshots.html"),
    new LessonInfo("Перекидывание файлов", "Как перекинуть файлы с телефона на ПК?", "", "soon"),
];

const stateElems = {
    'idle': ``,
    'new': `<a class="number-lesson bg-success">Новый</a>`,
    'soon': `<a class="number-lesson bg-primary">Скоро</a>`,
    'old': `<a class="number-lesson bg-warning">Устар.</a>`,
};

material.createLessons(lessons);
material.showLessons();
