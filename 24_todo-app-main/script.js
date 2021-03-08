// This is the array that will hold the todo list items
let todoItems = [];

// This function will create a new todo object based on the
// text that was entered in the text input, and push it into
// the `todoItems` array
function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  console.log(todoItems);
}

// Select the form element
const form = document.querySelector('.todo-container__input');
// Add a submit event listener
form.addEventListener('submit', (event) => {
  // prevent page refresh on form submission
  event.preventDefault();
  // select the text input
  const input = document.querySelector('#input');

  // Get the value of the input and remove whitespace
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});
