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

const defaultColorDimming = 10;

// Настройки смены темы
let themeTags = {
    "little-dark": (elem, color, value = defaultColorDimming) => {
        applyColor(elem, color, -value);
    },

    "little-light": (elem, color, value = defaultColorDimming) => {
        applyColor(elem, color, value);
    },
};

function addEventTheme(btn, slide) {
    btn.addEventListener('click', function () {
        let slideElem = carousel.getSlideElemByName(slide.text);
        carousel.select(slideElem);
        switchTheme(slide.colorTheme);
    });
}

function switchTheme(colorName) {
    let elems = document.querySelectorAll(".theme");
    let color = colors[colorName];

    let keys = Object.keys(themeTags);

    elems.forEach(elem => {
        elem.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;

        elem.classList.forEach((elemTag) => {
            if (elemTag in themeTags) {
                themeTags[elemTag](elem, color);
                return;
            }

            let keyByTag = keys.find((tag) => elemTag.startsWith(tag));

            if (keyByTag !== undefined) {
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
    let [r, g, b] = rgbValues.map(value => parseInt(value));

    let col = new Color(r, g, b);
    col.add(value);

    elem.style.backgroundColor = `rgb(${col.r}, ${col.g}, ${col.b})`;
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
