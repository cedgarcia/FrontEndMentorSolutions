// // Change Theme
document.querySelector('.changeTheme-btn').addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

const input = document.querySelector('#input');
const list = document.querySelector('#list');
const circle = document.querySelector('.circle');

// let check = false;
// let todoItem = 0;

// input.addEventListener('keydown', (e) =>
//   e.key == 'Enter' ? todoCreate(e) : null
// );

// function todoCreate(e) {
//   let val = input.value;
//   check ? circle.classList.remove('circle-active') : null;
//   input.value = '';
//   val.length == 0 ? alert('u can not pass a empty todo') : createTodoItem(val);
// }

// function createTodoItem(val) {
//   let createItem = new Promise((result) => {
//     let item = document.createElement('li');
//     item.classList.add('item');
//     item.dataset.item = todoItem;
//     // item.dataset.checked = false;
//     // item.dataset.focus = false;
//     item.innerHTML = `
//       <div class="bg_checkbox" onclick="clicked(this)">
//           <div class="item_checkbox"></div>
//       </div>
//       <p class="item_p">${val}</p>
//       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
//       `;
//     //   if (check) {
//     //     clicked(item.querySelector('.bg_checkbox'));
//     //     item.dataset.checked = true;
//     //     check = false;
//     //   }
//     //   result(item);
//     // });
//     // createItem.then((resolve) => {
//     //   todo.appendChild(resolve);
//     //   todoItem++;

//     //   todo.childElementCount == 1 ? todoNavSet('1', false) : null;
//     //   itemsLeft();
//     //   window.localStorage.setItem('todo', todo.innerHTML);
//   });
// }

const CHECK = 'circle-active';
const UNCHECK = 'circle';
const LINE_THROUGH = 'line-through';

let LIST, id;

function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : '';

  const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                `;

  const position = 'beforeend';

  list.insertAdjacentHTML(position, item);
}

// add an item to the list user the enter key
document.addEventListener('keyup', function (even) {
  if (event.keyCode == 13) {
    const toDo = input.value;

    // if the input isn't empty
    if (toDo) {
      addToDo(toDo, id, false, false);

      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false,
      });

      // add item to localstorage ( this code must be added where the LIST array is updated)
      localStorage.setItem('TODO', JSON.stringify(LIST));

      id++;
    }
    input.value = '';
  }
});

function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);

  LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove to do
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);

  LIST[element.id].trash = true;
}

// target the items created dynamically

list.addEventListener('click', function (event) {
  const element = event.target; // return the clicked element inside list
  const elementJob = element.attributes.job.value; // complete or delete

  if (elementJob == 'complete') {
    completeToDo(element);
  } else if (elementJob == 'delete') {
    removeToDo(element);
  }

  // add item to localstorage ( this code must be added where the LIST array is updated)
  localStorage.setItem('TODO', JSON.stringify(LIST));
});

// function completeToDo(element) {
//   element.classList.toggle(CHECK);
//   element.classList.toggle(UNCHECK);
//   element.parentNode.querySelector('text').classList.toggle(LINE_THROUGH);

//   LIST[element.id].done = LIST[element.id].done ? false : true;
// }

// // remove to do
// function removeToDo(element) {
//   element.parentNode.parentNode.removeChild(element.parentNode);

//   LIST[element.id].trash = true;
// }
// const element = event.target; // return the clicked element inside listg
// const elementJob = element.attributes.job.value; // complete or delete
// // target the items created dynamically

// list.addEventListener('click', function (event) {
//   if (elementJob == 'complete') {
//     completeToDo(element);
//   } else if (elementJob == 'delete') {
//     removeToDo(element);
//   }

//   // add item to localstorage ( this code must be added where the LIST array is updated)
//   localStorage.setItem('TODO', JSON.stringify(LIST));
// // });
console.log('ced');
