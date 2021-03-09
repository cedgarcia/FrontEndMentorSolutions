// BG CHANGETHEME
document.querySelector('.changeTheme-btn').addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

let todoItems = [];

function renderTodo(todo) {
  const item = document.querySelector(`[data-key='${todo.id}']`);

  const isChecked = todo.checked ? 'active' : ''; // Mark/Unmark as completed
  const node = document.createElement('li');
  node.classList.add('item');
  node.setAttribute('class', `item ${isChecked}`);
  node.setAttribute('data-key', todo.id);

  node.innerHTML = `
  <label for="${todo.id}" class="circle completed"></label>
  <span class="text">${todo.text}</span>
      <div class= "close" id="${todo.id}">
         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
     </div>
  `;
  if (item) {
    // replace it
    list.replaceChild(node, item);
  } else {
    // otherwise append it to the end of the list
    list.append(node);
  }
}

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}

const form = document.querySelector('.todo-container__input');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#input');

  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});
const list = document.querySelector('#list');
list.addEventListener('click', (event) => {
  if (event.target.classList.contains('completed')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
});
function toggleDone(key) {
  // findIndex is an array method that returns the position of an element
  // in the array.
  const index = todoItems.findIndex((item) => item.id === Number(key));
  // Locate the todo item in the todoItems array and set its checked
  // property to the opposite. That means, `true` will become `false` and vice
  // versa.
  todoItems[index].checked = !todoItems[index].checked;
  renderTodo(todoItems[index]);
}
