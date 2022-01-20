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

}

document.addEventListener('DOMContentLoaded', main)