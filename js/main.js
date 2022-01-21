let todoInput, errorInfo, addBtn, ulList;
let popup, popupInfo, todoToEdit, popupInput, popupAddBtn, popupCloseBtn;



const main = () => {
    prepareDOMElements()
    prepareDOMEvent()
}


const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info') 
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')

    popup = document.querySelector('.popup')
    popupInput = document.querySelector('.popup-input')
    popupInfo = document.querySelector('.popup-info')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
    


    

}

const prepareDOMEvent = () => {
    addBtn.addEventListener('click', addNewTodo)
    ulList.addEventListener('click', checkCLick)
    popupCloseBtn.addEventListener('click', closeEditTodo)
    popupAddBtn.addEventListener('click', changeTodoText)
    todoInput.addEventListener('keyup', enterKeyCheck)
    
}

const addNewTodo = () => {

    if (todoInput.value !== '') {
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value;
        createToolsArea(newTodo)

        ulList.append(newTodo)

        errorInfo.textContent = ''
        todoInput.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania...'
    }
}

const createToolsArea = (newTodo) => {

    if (todoInput.value !== '') {
        const toolsPanel = document.createElement('div')
        toolsPanel.classList.add('tools')
        newTodo.append(toolsPanel)


        const complateBtn = document.createElement('button')
        complateBtn.classList.add('complete')

        complateBtn.innerHTML = '<i class="fas fa-check"></i>'
        const editBtn = document.createElement('button')
        editBtn.classList.add('edit')
        editBtn.textContent = 'EDIT'

        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete')
        deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

        toolsPanel.append(complateBtn, editBtn, deleteBtn)
        
    }
}

const checkCLick = e => {
    if (e.target.matches('.complete')) {

        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    } else if (e.target.matches('.edit')) {
        editTodo(e)

    } else if (e.target.matches('.delete')) {
        deleteTodo(e)

    }
}

const editTodo = e => {
    todoToEdit = e.target.closest('li')

    
    popupInput.value = todoToEdit.firstChild.textContent
    
    popup.style.display = 'flex'
}

const closeEditTodo = () => {
    popup.style.display = 'none'
}

const changeTodoText = () => {
    if(popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value

        popup.style.display = 'none'
    } 
}

const deleteTodo = (e) => {
    e.target.closest('li').remove()

    const allTodos = ulList.querySelectorAll('li')


    
    if(allTodos.length === 0) {
        errorInfo.textContent = 'Brak zadań na liście.'
    }
};

const enterKeyCheck = (e) => {
    if(e.key === 'Enter') {
        addNewTodo()

        todoInput.textContent = ''
    }
};




document.addEventListener('DOMContentLoaded', main)