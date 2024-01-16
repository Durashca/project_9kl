/*добавление слайдов карусели*/
let carousel = {
    slideElems: [],
    active: 0,

    showSlides() {
        let carouselElem = document.querySelector(".carousel-inner");
        for (let i = 0; i < this.slideElems.length; i++) {
            let elem = this.slideElems[i];
            carouselElem.appendChild(elem.item);
        }
    },

    createSlides(slidesInfo) {
        for (let i = 0; i < slidesInfo.length; i++) {
            let slideElem = this.createSlide(slidesInfo[i], i === this.active);
            this.slideElems.push(slideElem);
        }
    },

    createSlide(slideInfo, active = false) {
        let item = this.createElement("div", "carousel-item");

        if (active)
            item.classList.add("active");

        let block = this.createElement("div", "d-block w-100", item);

        let card = this.createElement("div", "card", block);
        card.style.width = "18rem";

        let img = this.createElement("img", "card-img-top", card);
        img.src = slideInfo.img;
        img.alt = slideInfo.title;

        let cardBody = this.createElement("div", "card-body", card);

        let title = this.createElement("h5", "card-title", cardBody);
        title.innerText = slideInfo.title;

        let text = this.createElement("p", "card-text", cardBody);
        text.innerText = slideInfo.text;

        let btn = this.createElement("a", "btn btn-primary", cardBody);
        btn.innerText = "Выбрать";
        btn.href = "#";

        addEventTheme(btn, slideInfo);

        return new SlideElement(item, img, title, text, btn);
    },

    createElement(tagName, className, parent = null) {
        let elem = document.createElement(tagName);
        elem.className = className;

        if (parent !== null)
            parent.appendChild(elem);

        return elem;
    },

    getSlideElems() {
        return this.slideElems;
    },
};
