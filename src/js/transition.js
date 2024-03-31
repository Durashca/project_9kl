
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

let lesson_arr = document.querySelectorAll('a.btn.btn-primary.lesson');

// сообщение для телефонов
let pre_emptive_letter = document.getElementById('pre_emptive_letter');
if (pre_emptive_letter){
    //добавляем текст в див
    pre_emptive_letter.textContent = 'Если вы проходите уроки с телефона, то кнопка перехода на следующую страницу будет для вас разблокирована'
}


/* функция для добавления класса disabled(вызов по умолчанию) */
function func_tg_add() {
    if ( btn_move_to_next){
        btn_move_to_next.classList.add('disabled');
    }

}

/* функция для добавления класса disabled */
func_tg_add()



/*разблокировать кнопку перехода*/
function func_tg_dis() {
    /* открываем переход на следующую страницу */
    if (btn_move_to_next){
        btn_move_to_next.classList.remove('disabled');
    }

    /* увеличение прогресса */


    /* перебор массива до значения функции прогресса */

    /* блокируем кнопку задания */
    if (btn_task_check) {
        btn_task_check.classList.add('disabled');
    }
}
/* функция для удаления класса disabled */
function func_tg_vcr() {
    /* отображаем статус текстом */
    p.textContent = 'Все получилось';
    /* отображаем статус фоном */
    div_dashed.style.background = 'rgb(219 255 218)';
    /*отображаем статус границы*/
    div_dashed.style.borderColor = '#6ef67d';

}


/* вызываем, когда неправильно прошли */
function func_tg_wrong() {
    /* отображаем статус фоном */
    div_dashed.style.background = 'rgb(255 218 218)';
    /*отображаем статус границы*/
    div_dashed.style.borderColor = '#f66e6e';
}



/* добавление статуса задания (по умолчанию) */
    let p = document.createElement('p');
    p.textContent = 'Пока нет верного ответа';
    p.style.marginLeft = '0';
    p.style.fontStyle = 'italic';
// Добавим элемент <p> после кнопки
if (h4){
    h4.insertAdjacentElement('afterend', p);
}

let progress_bar = document.getElementById('progress_bar');
let total_bar = 10;
window.onload = function func_pr_mt() {
    // Предположим, что userProgress и lesson_arr определены где-то ранее в коде
    userProgress.forEach((progress, index) => {
        console.log(index);
        if (progress) {
            if (lesson_arr[index] && index !== 10) {
                lesson_arr[index].classList.remove('disabled');
                lesson_arr[index].disabled = false;
                total_bar += 10;
                /*console.log(lesson_arr[index]);*/
            } else {
                console.error(`lesson_arr[${index}] is not defined.`);
            }
        }
    });
    // устанавливаем значение прогресс бару
    progress_bar.style.width = `${total_bar}%`;
    return total_bar;

};






