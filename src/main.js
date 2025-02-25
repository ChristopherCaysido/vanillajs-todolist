const todoForm = document.getElementById('todo-form')


todoForm.addEventListener('submit', function(event){
  event.preventDefault()
  
  const todoInput = document.getElementById('todo-input')
  const todoInputText = todoInput.value
  createTodo(todoInputText)
  // Create an element to house the todo item
  console.log('New todo:', todoText)  
})

// TODO: Create an event listener for the clicking of the Task Done Button
// Rough idea: 
// 1. Click the button 
// 2. A strike through will be added
// 3. The todo item will move to the back of the line

function createTodo(todo){
  // Get the todo container that will house the todo item
  const todoContainer = document.getElementById('todo-list')
  
  // Create the container for the todo
  const todoItem = document.createElement('div')
  
  // Create the name of the todo-itm 
  const todoName = document.createElement('p')
  
  // Create the button
  const todoDoneButton = document.createElement('button')
  
  // Inner Text of the Done Button
  todoDoneButton.innerText = "Task Done"
  
  // Get the value of the todo
  const todoText = todo
  
  // use the textContent attribute to add the value of the todo input
  todoName.textContent = todoText
  // append the todoName inside the todoItem
  todoItem.appendChild(todoName)
  todoItem.appendChild(todoDoneButton)
  todoContainer.appendChild(todoItem)
}