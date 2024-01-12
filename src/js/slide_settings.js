function SlideInfo(img, title, text, colorTheme = new Color(255, 255, 255)) {
    this.img = img;
    this.title = title;
    this.text = text;
    this.colorTheme = colorTheme;
}

function SlideElement(item, img, title, text, button) {
    this.item = item;
    this.img = img;
    this.title = title;
    this.text = text;
    this.button = button;

    this.getTitle = () => this.title.innerText;
    this.getText = () => this.text.innerText;
    this.getButtonText = () => this.button.innerText;
}

let slides = [
    new SlideInfo("src/images/kiwi.png", "Киви", "Выбрав киви, сайт будет выглядеть так.", new Color(101, 150, 11)),
    new SlideInfo("src/images/orange.png", "Апельсинчик", "Выбрав апельсин, сайт будет выглядеть так.", new Color(238, 160, 23)),
    new SlideInfo("src/images/banana.png", "Банана", "Выбрав банан, сайт будет выглядеть так.", new Color(238, 220, 9)),
    new SlideInfo("src/images/mangosteen.png", "Мангостин", "Выбрав мангостин, сайт будет выглядеть так.", new Color(143, 21, 56)),
    new SlideInfo("src/images/pitaya.png", "Питайя", "Выбрав питайу, сайт будет выглядеть так.", new Color(177, 34, 86)),
    new SlideInfo("src/images/apple.png", "Яблоко", "Выбрав яблоко, сайт будет выглядеть так.", new Color(166, 196, 90)),
];

carousel.createSlides(slides);
carousel.showSlides();
