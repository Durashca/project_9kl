function Color(r, g, b, a = 0) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;

    this.add = (value) => {
        const min = 0;
        const max = 255;

        this.r = clamp(this.r + value, min, max);
        this.g = clamp(this.g + value, min, max);
        this.b = clamp(this.b + value, min, max);
    };
}

function Slide(img, title, text, colorTheme = new Color(255, 255, 255)) {
    this.img = img;
    this.title = title;
    this.text = text;
    this.colorTheme = colorTheme;
}

let active = 0;
const defaultColorDimming = 20;

let slides = [
    new Slide("src/images/free-icon-kiwi-5402127.png", "Киви", "Выбрав киви, сайт будет выглядеть так.", new Color(101, 150, 11)),
    new Slide("src/images/free-icon-orange-6866499.png", "Апельсинчик", "Небольшой пример текста про апельсинчик.", new Color(238, 160, 23)),
    new Slide("src/images/free-icon-banana-831896.png", "Банана", "Выбрав банан, сайт будет выглядеть так.", new Color(238, 220, 9)),
    new Slide("src/images/free-icon-mangosteen-8645375.png", "Мангостин", "Выбрав мангостин, сайт будет выглядеть так.", new Color(143, 21, 56)),
    new Slide("src/images/free-icon-pitaya-572580.png", "Питайя", "Выбрав питайу, сайт будет выглядеть так.", new Color(177, 34, 86)),
    new Slide("src/images/free-icon-apple-1330449.png", "Яблоко", "Выбрав яблоко, сайт будет выглядеть так.", new Color(166, 196, 90)),
];

// Настройки смены темы
let themeTags = {
    "little-dark": (elem, color, value = defaultColorDimming) => {
        applyColor(elem, color, -value);
    },

    "little-light": (elem, color, value = defaultColorDimming) => {
        applyColor(elem, color, value);
    },
};

function switchTheme(color) {
    let elems = document.querySelectorAll(".theme");

    let keys = Object.keys(themeTags);

    elems.forEach(elem => {
        elem.style = `background-color: rgb(${color.r}, ${color.g}, ${color.b})`;

        elem.classList.forEach((elemTag) => {
            if (elemTag in themeTags) {
                console.log(elemTag);
                themeTags[elemTag](elem, color);

                return;
            }

            let keyByTag = keys.find((tag) => elemTag.startsWith(tag));

            if (keyByTag != undefined) {
                let words = elemTag.split("-");

                let lastPart = words[words.length - 1];
                let value = parseInt(lastPart);

                themeTags[keyByTag](elem, color, value);
            }
        });
    });
}

function applyColor(elem, color, value) {
    let back = elem.style.backgroundColor;

    let rgbValues = back.match(/\d+/g); // взять все числа
    let r = parseInt(rgbValues[0]);
    let g = parseInt(rgbValues[1]);
    let b = parseInt(rgbValues[2]);

    let col = new Color(r, g, b);
    col.add(value);

    elem.style = `background-color: rgb(${col.r}, ${col.g}, ${col.b})`;
}

function addEventTheme(btn, slide) {
    btn.addEventListener('click', function () {
        switchTheme(slide.colorTheme);
    });
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function createSlide(allSlides, slide, active = false) {
    let item = document.createElement("div");
    item.className = "carousel-item";

    if (active)
        item.classList.add("active");

    let block = document.createElement("div");
    block.className = "d-block w-100";

    item.appendChild(block);

    let card = document.createElement("div");

    card.className = "card";
    card.style.width = "18rem";

    block.appendChild(card);

    let img = document.createElement("img");

    img.src = slide.img;
    img.className = "card-img-top";
    img.alt = slide.title;

    card.appendChild(img);

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    card.appendChild(cardBody);

    let title = document.createElement("h5");
    title.className = "card-title";
    title.innerText = slide.title;

    cardBody.appendChild(title);

    let text = document.createElement("p");
    text.className = "card-text";
    text.innerText = slide.text;

    cardBody.appendChild(text);

    let btn = document.createElement("a");
    btn.className = "btn btn-primary";
    btn.innerText = "Выбрать";
    btn.href = "#";

    cardBody.appendChild(btn);

    addEventTheme(btn, slide);

    allSlides.appendChild(item);
}

function showSlides() {
    let allSlides = document.querySelector(".carousel-inner");

    for (let i = 0; i < slides.length; i++) {
        slide = slides[i];

        createSlide(allSlides, slide, active == i);
    }
}

showSlides();
