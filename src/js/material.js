let material = (function () {
    let lessonElems = [];

    function showLessons() {
        let materialElem = document.querySelector(".list-lessons");
        for (let elem of lessonElems) {
            materialElem.appendChild(elem.lessonButton);
            showChildrenLessons(elem);
        }
    }

    function showChildrenLessons(parent) {
        let materialElem = document.querySelector(".list-lessons");
        for (let elem of parent.children) {
            materialElem.appendChild(elem.lessonButton);
            showChildrenLessons(elem);
        }
    }

    function createLessons(lessonsInfo) {
        let i = 0;
        for (let lesson of lessonsInfo) {
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

        let leftPart = lesson.querySelector(".left-part-lesson");
        let rightPart = lesson.querySelector(".right-part-lesson");

        if (lessonInfo.children.length > 0)
            rightPart.insertAdjacentHTML('afterbegin', codeFolding);

        for (let state of lessonInfo.states) {
            if (state in stateToLessonNumberElement)
                leftPart.insertAdjacentHTML('beforeend', stateToLessonNumberElement[state]);
        }

        for (let state of lessonInfo.states)
            stateToAdditionalDecoration[state]?.call(null, lesson);

        let name = lesson.querySelector(".name-lesson");
        let description = lesson.querySelector(".description-lesson");
        let numberLesson = lesson.querySelector(".number-lesson");

        let lessonElem = new LessonElement(lesson, name, description, numberLesson, lessonInfo.link);

        let i = 0;
        for (let lessonChild of lessonInfo.children) {
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

    return {
        showLessons: showLessons,
        createLessons: createLessons,
    };
})();
