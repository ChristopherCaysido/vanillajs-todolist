const todoForm = document.getElementById('todo-form')


todoForm.addEventListener('submit', function(event){
  event.preventDefault()
  
  const todoInput = document.getElementById('todo-input')
  // Create an element to house the todo item
  const todoItem = document.createElement('div')
  // Get the todo container that will house the todo item
  const todoContainer = document.getElementById('todo-list')
  // Create the text item inside the todo item
  const todoName = document.createElement('p')
  // Get the value of the todo
  const todoText = todoInput.value
  // use the textContent attribute to add the value of the todo input
  todoName.textContent = todoText
  // append the todoName inside the todoItem
  todoItem.appendChild(todoName)
  todoContainer.appendChild(todoItem)
  
  
  // Create the todo item name
  
  console.log('New todo:', todoText)  
})

