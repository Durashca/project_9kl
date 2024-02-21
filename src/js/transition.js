/* кнопка перехода*/
let btn_move_to_next = document.getElementById('createPageButton');
/*кнопка задания*/
let btn_task_check = document.getElementById('btn-task-check')

/*функция для добавления/удаления класса disabled */
function func_tg_dis() {
    btn_move_to_next.classList.remove('disabled')
}

/*вызов по умолчанию*/
func_tg_dis();

