// BG CHANGETHEME
document.querySelector('.changeTheme-btn').addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

let todoItems = [];

const list = document.querySelector('#list');
list.addEventListener('click', (event) => {
  // mark as completed
  if (event.target.classList.contains('completed')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
  // close when finished
  if (event.target.classList.contains('close')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});

// DISPLAY TODO
function renderTodo(todo) {
  const item = document.querySelector(`[data-key='${todo.id}']`);
  if (todo.deleted) {
    item.remove();
    return;
  }
  const isChecked = todo.checked ? 'active' : ''; // Mark/Unmark as completed
  const node = document.createElement('li');
  node.classList.add('item');
  node.setAttribute('class', `item ${isChecked}`);
  node.setAttribute('data-key', todo.id);

  node.innerHTML = `
  <label for="${todo.id}" class="circle completed"></label>
  <span class="text">${todo.text}</span>

         <svg class="close" id = "${todo.id}" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>

  `;
  if (item) {
    list.replaceChild(node, item);
  } else {
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

// DONE TODO
function toggleDone(key) {
  const index = todoItems.findIndex((item) => item.id === Number(key));
  todoItems[index].checked = !todoItems[index].checked;
  renderTodo(todoItems[index]);
}
// DELETE TODO
function deleteTodo(key) {
  const index = todoItems.findIndex((item) => item.id === Number(key));
  const todo = {
    deleted: true,
    ...todoItems[index],
  };
  todoItems = todoItems.filter((item) => item.id !== Number(key));
  renderTodo(todo);
}
let active = document.querySelector('.all');
active.addEventListener('click', (e) => select(active, 'true'));
