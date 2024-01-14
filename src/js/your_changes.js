// Получить ссылку на кнопку(черничка)
let blueberryButton = document.getElementById('blueberry_bt')
let blueberryAll = document.querySelectorAll("a");
console.log(blueberryButton)
// Добавить обработчик события при нажатии на кнопку
blueberryButton.addEventListener("click", function() {
    for (let a of blueberryAll ){
        a.classList.add('blueberry')
    }
});
