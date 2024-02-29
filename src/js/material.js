import { LessonInfo, LessonElement } from './material_settings.js';
import * as settings from './material_settings.js';

let lessonElems = [];

function showLessons() {
    let materialElem = document.querySelector(".list-lessons");
    for (const elem of lessonElems) {
        materialElem.appendChild(elem.lessonButton);
        showChildrenLessons(elem);
    }
}

function showChildrenLessons(parent) {
    let materialElem = document.querySelector(".list-lessons");
    for (const elem of parent.children) {
        materialElem.appendChild(elem.lessonButton);
        showChildrenLessons(elem);
    }
}

function createLessons(lessonsInfo) {
    let i = 0;
    for (const lesson of lessonsInfo) {
        let lessonElem = createLesson(lesson, (++i).toString());
        lessonElems.push(lessonElem);
    }
}

function createLesson(lessonInfo, number, indent = 0) {
    const lessonCode =
    `
        <div class="left-part-lesson">
            <a class="number-lesson">Урок ${number}</a>
        </div>
        <div class="middle-part-lesson">
            <h6 class="text-lesson name-lesson">${lessonInfo.name}</h6>
            <p class="text-lesson description-lesson">${lessonInfo.description}</p>
        </div>
        <div class="right-part-lesson">
        </div>
    `;

    const codeFolding =
    `<button type="button" class="folding" data-bs-toggle="button" aria-pressed="false">
    </button>`;

    let lesson = createElement("a", "btn btn-primary lesson");
    lesson.style.marginLeft = `${indent}px`;
    lesson.innerHTML = lessonCode;

    const leftPart = lesson.querySelector(".left-part-lesson");
    const rightPart = lesson.querySelector(".right-part-lesson");

    if (lessonInfo.children.length > 0)
        rightPart.insertAdjacentHTML('afterbegin', codeFolding);

    for (const state of lessonInfo.states) {
        if (state in settings.stateToLessonNumberElement)
            leftPart.insertAdjacentHTML('beforeend', settings.stateToLessonNumberElement[state](indent / 20));
    }

    for (const state of lessonInfo.states)
        settings.stateToAdditionalDecoration[state]?.call(null, lesson);

    const name = lesson.querySelector(".name-lesson");
    const description = lesson.querySelector(".description-lesson");
    const numberLesson = lesson.querySelector(".number-lesson");

    let lessonElem = new LessonElement(lesson, name, description, numberLesson, lessonInfo.path);

    let i = 0;
    for (const lessonChild of lessonInfo.children) {
        let childElem = createLesson(lessonChild, `${number}.${++i}`, indent + 20);
        lessonElem.children.push(childElem);
    }

    return lessonElem;
}

function createElement(tagName, className, parent = null) {
    let elem = document.createElement(tagName);
    elem.className = className;

    if (parent !== null)
        parent.appendChild(elem);

    return elem;
}

function toggleLessonLockByIndex(toggle, indexLesson) {
    let lesson = lessonElems[indexLesson];
    lesson.classList.toggle("disabled", toggle);
}

// TODO: implement a function for switching lesson blocking by its id
function toggleLessonLockById(toggle, idLesson) {

}

export { showLessons, createLessons, toggleLessonLockByIndex };
