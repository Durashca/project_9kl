
/*добавление доп данных*/
let div_dashed2 = document.querySelector(' #div_sec');
let h4_2 = document.querySelector('#h4_sec')
/* добавление статуса задания (по умолчанию) */
let p2 = document.createElement('p');
p2.textContent = 'Пока нет верного ответа';
p2.style.marginLeft = '0';
p2.style.fontStyle = 'italic';
// Добавим элемент <p> после кнопки
h4_2.insertAdjacentElement('afterend', p2);


/* функция для удаления класса disabled */
function func_tg_vcr_sec () {
    /* отображаем статус текстом */
    p2.textContent = 'Все получилось';
    /* отображаем статус фоном */
    div_dashed2.style.background = 'rgb(219 255 218)';
    /*отображаем статус границы*/
    div_dashed2.style.borderColor = '#6ef67d';
    /* блокируем кнопку задания */
    btn_task_check.classList.add('disabled');

}


/* вызываем, когда неправильно прошли */
function func_tg_wrong_sec() {
    /* отображаем статус фоном */
    div_dashed2.style.background = 'rgb(255 218 218)';
    /*отображаем статус границы*/
    div_dashed2.style.borderColor = '#f66e6e';
}




