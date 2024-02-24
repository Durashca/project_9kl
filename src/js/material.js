let first = false
let material = (function () {
    let lessonElems = [];

    function showLessons() {
        let materialElem = document.querySelector(".list-lessons");
        for (let elem of lessonElems) {
            materialElem.appendChild(elem.lessonButton);
        }
    }

    function createLessons(lessonsInfo) {
        let i = 0;
        for (let lesson of lessonsInfo) {
            let lessonElem = createLesson(lesson, i++);
            lessonElems.push(lessonElem);
        }
    }

    function createLesson(lessonInfo, index) {
        let lessonCode =
        `
            <div class="left-part-lesson">
                <a class="number-lesson">Урок ${index + 1}</a>
            </div>
            <div class="right-part-lesson">
                <h6 class="text-lesson name-lesson">${lessonInfo.name}</h6>
                <p class="text-lesson description-lesson">${lessonInfo.description}</p>
            </div>
        `;

        let lesson = createElement("a", "btn btn-primary lesson");
        lesson.innerHTML = lessonCode;

        // блокируем все уроки кроме первого
         if(first){
            lesson.classList.add('disabled');
        }
        first = true
        //



        let name = lesson.querySelector(".name-lesson");
        let description = lesson.querySelector(".description-lesson");
        let numberLesson = lesson.querySelector(".number-lesson");

        return new LessonElement(lesson, name, description, numberLesson, lessonInfo.link);
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

