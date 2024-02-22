/* кнопка перехода */
let btn_move_to_next = document.getElementById('createPageButton');
/* варианты ответов*/
let checkbox_arr = document.querySelectorAll('.dashed input[type="checkbox"]');
let radio_arr = document.querySelectorAll('.dashed input[type="radio"]');
/* кнопка задания(для блокировки) */
let btn_task_check = document.getElementById('btn-task-check');
/* фон */
let div_dashed = document.querySelector('.dashed');
/* h4 */
let h4 = document.querySelector('.dashed > h4');

/* функция для добавления класса disabled */
function func_tg_add() {
    btn_move_to_next.classList.add('disabled');
}

/* функция для удаления класса disabled */
function func_tg_dis() {
    btn_move_to_next.classList.remove('disabled');
}

/* вызов по умолчанию */
func_tg_add();

/* функция для удаления класса disabled */
function func_tg_rmv() {
    /* открываем переход на следующую страницу */
    func_tg_dis()
    /* вызываем функцию при правильном ответе */
    func_p_Right();
    /* блокируем кнопку задания */
    btn_task_check.classList.add('disabled');
}

/* вызываем, когда правильно прошли */
function func_p_Right() {
    /* отображаем статус текстом */
    p.textContent = 'Все получилось';
    /* отображаем статус фоном */
    div_dashed.style.background = 'rgb(219 255 218)';
    /*отображаем статус границы*/
    div_dashed.style.borderColor = '#6ef67d';

}

/* вызываем, когда неправильно прошли */
function func_p_wrong() {
    /* отображаем статус фоном */
    div_dashed.style.background = 'rgb(255 218 218)';
    /*отображаем статус границы*/
    div_dashed.style.borderColor = '#f66e6e';
}

/*
btn_task_check.style.display = 'flex';
btn_task_check.style.margin = '2% 0';
*/

/* добавление статуса задания (по умолчанию) */
let p = document.createElement('p');
p.textContent = 'Пока нет верного ответа';
p.style.marginLeft = '0';
p.style.fontStyle = 'italic';
// Добавим элемент <p> после кнопки
h4.insertAdjacentElement('afterend', p);