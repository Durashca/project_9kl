function SlideInfo(img, title, text, colorTheme = "white", selected = false) {
    this.img = img;
    this.title = title;
    this.text = text;
    this.colorTheme = colorTheme;
    this.selected = selected;
}

function SlideElement(item, img, title, text, button, selected = false) {
    this.item = item;
    this.img = img;
    this.title = title;
    this.text = text;
    this.button = button;

    this.getTitle = () => this.title.innerText;
    this.getText = () => this.text.innerText;
    this.getButtonText = () => this.button.innerText;

    Object.defineProperty(this, 'selected', {
        get: function() {
            return this._selected;
        },
        set: function(value) {
            this._selected = value;
            this.button.innerText = value ? "Выбрано" : "Выбрать";
            this.button.style.setProperty("--bs-btn-bg", value ? "rgb(105, 209, 125)" : "white");
        }
    });
}

let slides = [
    new SlideInfo("src/images/coconut.png", "Кокос", "Выбрав кокос, сайт будет выглядеть так.", "white", true),
    new SlideInfo("src/images/kiwi.png", "Киви", "Выбрав киви, сайт будет выглядеть так.", "dark-green"),
    new SlideInfo("src/images/orange.png", "Апельсинчик", "Выбрав апельсин, сайт будет выглядеть так.", "orange"),
    new SlideInfo("src/images/banana.png", "Банана", "Выбрав банан, сайт будет выглядеть так.", "yellow"),
    new SlideInfo("src/images/mangosteen.png", "Мангостин", "Выбрав мангостин, сайт будет выглядеть так.", "dark-pink"),
    new SlideInfo("src/images/pitaya.png", "Питайя", "Выбрав питайу, сайт будет выглядеть так.", "pink"),
    new SlideInfo("src/images/apple.png", "Яблоко", "Выбрав яблоко, сайт будет выглядеть так.", "green"),
    new SlideInfo("src/images/blackberry.png", "Ежевика", "Выбрав ежевику, сайт будет выглядеть так.", "dark-violet"),
];

carousel.createSlides(slides);
carousel.showSlides();
