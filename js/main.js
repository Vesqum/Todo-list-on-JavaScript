let todoInput, errorInfo, addBtn, ulList;



const main = () => {
    prepareDOMElements()
    prepareDOMEvent()
}


const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info') 
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')

    

}

const prepareDOMEvent = () => {
    addBtn.addEventListener('click', addNewTodo)
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
        complateBtn.classList.add('complate')

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




document.addEventListener('DOMContentLoaded', main)