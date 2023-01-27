// Initial thoughts on the javascript todolist
// what are we going to need to do to create a successful todo list

// Essentials
// Adding a todo
// Deleting a todo
// inputting the name of the todo
// filter out any of the todos
// rearranging the todos
// grouping the todos

// after these features
// animations
// responsiveness additions

// Creating a initial container 


// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Event Listeners
todoButton.addEventListener('click', addTodo);

// Learned Functions
// How do i create a new HTML element through javascript?
// document.createElement('html-element')


// How do I add a text within the element
// ex. 
// const sampleElement = document.createElement('button')
// sampleElement.innerText = 'Text or string'


// How can I add additional HTML element within an element?
// Through .innerHTML
// const sampleElement = document.createElement('button') 




function addTodo(event){
    event.preventDefault()
    // const todoElement = document.createElement('div');
    const todoDiv = document.createElement('div') // Container of the todo
    todoDiv.classList.add("todo"); // add a class of todo to the div
    const newTodo = document.createElement('li') // list element
    newTodo.innerText = 'hey' // inner text
    newTodo.classList.add('todo-item') // 
    todoDiv.appendChild(newTodo)
    const selectTodo = document.createElement('button')
    selectTodo.innerText= 'Select Button'
    const editTodo = document.createElement('button')
    editTodo.innerText = 'Edit Button'
    
    // Check Mark Button
    const completedButton = document.createElement('button'); // Creating an HTML
    completedButton.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>' // adding children html within an element
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)

    const trashButton = document.createElement('button'); // Creating an HTML
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>' // adding children html within an element
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)
    todoList.appendChild(todoDiv)
}   


// Functions