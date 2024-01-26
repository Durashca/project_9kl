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
    new LessonInfo("Горячие клавиши", "Упрощение жизни с помощью горячих клавиш" , "hotkeys.html", ["idle"], [
        new LessonInfo("Работа с текстом", "Горячие клавиши для работы с текстом", '', ["soon"]),
        new LessonInfo("Работа с ПК", "Горячие клавиши для работы с ПК", '', ["hard", "soon"]),
    ]),
    new LessonInfo("Скриншоты", "Для чего нужны и как их делать?", "screenshots.html"),
    new LessonInfo("Перекидывание файлов", "Как перекинуть файлы с телефона на ПК?", "", ["soon"]),
];

const stateToLessonNumberElement = {
    'new': `<a class="number-lesson bg-success">Новый</a>`,
    'soon': `<a class="number-lesson bg-primary">Скоро</a>`,
    'old': `<a class="number-lesson bg-warning">Устар.</a>`,
    'hard': `<a class="number-lesson bg-danger">Сложный</a>`,
};

const stateToAdditionalDecoration = {
    'soon': (lesson) => {
        lesson.style.pointerEvents = 'none';
        lesson.classList.add('text-muted');
    },
};

material.createLessons(lessons);
material.showLessons();
