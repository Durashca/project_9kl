const lessonState = { IDLE: 'idle', NEW: 'new', SOON: 'soon', OLD: 'old', HARD: 'hard' };

function LessonInfo(name, description, link, states = ['idle'], children = []) {
    this.name = name;
    this.description = description;
    this.states = states;
    this.link = link;
    this.children = children;
}

function LessonElement(lessonButton, name, description, numberLesson, link, children = []) {
    this.lessonButton = lessonButton;
    this.name = name;
    this.description = description;
    this.numberLesson = numberLesson;
    this.link = link;
    this.children = children;

    this.folding = lessonButton.querySelector(".folding");
    this.folding?.addEventListener('click', () => this.expanded = !this.expanded);

    this._expanded = true;

    Object.defineProperty(this, 'expanded', {
        get: function() {
            return this._expanded;
        },
        set: function(value) {
            this._expanded = value;

            if (this.folding === null)
                return;

            this.folding.style.backgroundImage = value ?
                'url(\'src/images/material_panel/arrow-up-square.svg\')' :
                'url(\'src/images/material_panel/arrow-down-square.svg\')';
            this.switchVisibilityChildren(value);
        }
    });

    this.switchVisibilityChildren = function (value) {
        for (let child of children) {
            child.lessonButton.style.display = !value ? 'none' : '';
            child.switchVisibilityChildren(value);
        }
    };

    if (link !== "")
        lessonButton.href = link;
}

let lessons = [
    new LessonInfo("Логин", "Что означают эти не понятные слова", "the_memo.html"),
    new LessonInfo("Глобальные горячие клавиши", "Упрощение жизни с помощью горячих клавиш", "hotkeys.html"),
    new LessonInfo("Скриншоты", "Для чего нужны и как их делать?", "screenshots.html"),
    new LessonInfo("Перенос файла через USB-подключение", "Как перенести картинку с телефона на компьютер", "transferring_files.html", ["hard"]),
    new LessonInfo("Функциональные клавиши", "Быстро и легко работаем с текстом", "basic_keys.html"),
    new LessonInfo("Скачивание приложения", "Учимся скачивать приложения на компьютере", "download_the_application.html"),
    new LessonInfo("Удаление приложения", "Учимся удалять приложения на компьютере", "uninstalling_an_application.html"),
    new LessonInfo("Ошибки со звуком", "Исправляем ошибки со звуком на компьютере", "audio_errors.html"),
    new LessonInfo("Пароль", "Как обезопасить себя от взлома", "device_password.html"),
];

const stateToLessonNumberElement = {
    'new': (stateLen) => `<a class="number-lesson bg-success">${stateLengths['new'][stateLen]}</a>`,
    'soon': (stateLen) => `<a class="number-lesson bg-primary">${stateLengths['soon'][stateLen]}</a>`,
    'old': (stateLen) => `<a class="number-lesson bg-warning">${stateLengths['old'][stateLen]}</a>`,
    'hard': (stateLen) => `<a class="number-lesson bg-danger">${stateLengths['hard'][stateLen]}</a>`,
};

const stateLengths = {
    'new': ["Новый"],
    'soon': ["Скоро"],
    'old': ["Устар.", "Устарев.", "Устаревший"],
    'hard': ["Сложн.", "Сложный"],
}

const stateToAdditionalDecoration = {
    'soon': (lesson) => {
        lesson.style.pointerEvents = 'none';
        lesson.classList.add('text-muted');

        let numbers = lesson.querySelectorAll(".number-lesson");
        numbers.forEach(n => n.classList.add("text-muted"));
    },
};

material.createLessons(lessons);
material.showLessons();
