/* кнопка перехода */
let btn_move_to_next = document.getElementById('createPageButton');
/* кнопка задания */
let btn_task_check = document.getElementById('btn-task-check');
/* фон */
let background = document.querySelector('.dashed');
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
    btn_move_to_next.classList.remove('disabled');
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
    background.style.background = '#e9f9e9';
}

/* вызываем, когда неправильно прошли */
function func_p_wrong() {
    /* отображаем статус фоном */
    background.style.background = 'rgb(249, 233, 233)';
}

btn_task_check.style.display = 'flex';
btn_task_check.style.margin = '2% 0';

/* добавление статуса задания (по умолчанию) */
let p = document.createElement('p');
p.textContent = 'Пока нет верного ответа';
p.style.marginLeft = '0';
p.style.fontStyle = 'italic';
// Добавим элемент <p> после кнопки
h4.insertAdjacentElement('afterend', p);