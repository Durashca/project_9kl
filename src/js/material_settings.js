const lessonState = { IDLE: 'idle', NEW: 'new', SOON: 'soon', OLD: 'old' };

function LessonInfo(name, description, link, state = 'idle', children = []) {
    this.name = name;
    this.description = description;
    this.state = state;
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

            const toggleIcons = ['▼', '▲'];
            this.folding.innerText = toggleIcons[+value];
            this.switchVisibilityChildren(value);
        }
    });

    this.switchVisibilityChildren = function (value) {
        for (let child of children) {
            const visibilityParams = ['none', ''];

            child.lessonButton.style.display = visibilityParams[+value];
            child.switchVisibilityChildren(value);
        }
    };

    if (link !== "")
        lessonButton.href = link;
}

let lessons = [
    new LessonInfo("Горячие клавиши", "Упрощение жизни с помощью горячих клавиш" , "hotkeys.html", "idle", [
        new LessonInfo("Тест1", "Описание1", ''),
    ]),
    new LessonInfo("Скриншоты", "Для чего нужны и как их делать?", "screenshots.html"),
    new LessonInfo("Перекидывание файлов", "Как перекинуть файлы с телефона на ПК?", "", "soon"),
];

const stateToLessonNumberElement = {
    'new': `<a class="number-lesson bg-success">Новый</a>`,
    'soon': `<a class="number-lesson bg-primary">Скоро</a>`,
    'old': `<a class="number-lesson bg-warning">Устар.</a>`,
};

const stateToAdditionalDecoration = {
    'soon': (lesson) => {
        lesson.style.pointerEvents = 'none';
        lesson.classList.add('text-muted');
    },
};

material.createLessons(lessons);
material.showLessons();
