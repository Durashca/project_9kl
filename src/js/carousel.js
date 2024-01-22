/*добавление слайдов карусели*/
let carousel = (function () {
    let slideElems = [];

    function showSlides() {
        let carouselElem = document.querySelector(".carousel-inner");
        for (let elem of slideElems) {
            carouselElem.appendChild(elem.item);
        }
    }

    function createSlides(slidesInfo) {
        for (let slide of slidesInfo) {
            let slideElem = createSlide(slide, slide.selected);

            if (slide.selected) {
                slideElem.selected = true;
                // switchTheme(slide.colorTheme);
            }

            slideElems.push(slideElem);
        }
    }

    function createSlide(slideInfo, active = false) {
        let slideCode =
        `
        <div class="d-block w-100">
            <div class="card" style="width: 18rem">
                <img class="card-img-top" src="${slideInfo.img}" alt="${slideInfo.title}">
                <div class="card-body">
                    <h5 class="card-title">${slideInfo.title}</h5>
                    <p class="card-text">${slideInfo.text}</p>
                    <a class="btn btn-primary" href="#">Выбрать</a>
                </div>
            </div>
        </div>
        `;

        let item = createElement("div", "carousel-item");
        item.innerHTML = slideCode;

        let btn = item.querySelector(".btn");
        let img = item.querySelector(".card-img-top");
        let title = item.querySelector(".card-title");
        let text = item.querySelector(".card-text");

        if (active)
            item.classList.add("active");

        addEventTheme(btn, slideInfo);

        return new SlideElement(item, img, title, text, btn);
    }

    function createElement(tagName, className, parent = null) {
        let elem = document.createElement(tagName);
        elem.className = className;

        if (parent !== null)
            parent.appendChild(elem);

        return elem;
    }

    function getSlideElems() {
        return slideElems;
    }

    function getSlideElemByName(name) {
        return slideElems.find((elem) => elem.getText() === name);
    }

    function select(slideElem) {
        for (let elem of slideElems) {
            elem.selected = false;
        }

        slideElem.selected = true;
    }

    return {
        showSlides: showSlides,
        createSlides: createSlides,
        get slideElems() { getSlideElems(); },
        getSlideElemByName: getSlideElemByName,
        select: select,
    };
})();
