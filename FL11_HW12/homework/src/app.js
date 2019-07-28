const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
const timeOut = 2000;
const notFoundIndex = -1;

const rootNode = document.getElementById('root');
const heading = document.createElement('h1');
const input = document.createElement('input');
const addBtn = document.createElement('button');
const cancelBtn = document.createElement('button');
const saveBtn = document.createElement('button');

input.setAttribute('type', 'text');

addBtn.innerText = 'Add new task';
cancelBtn.innerText = 'Cancel';
saveBtn.innerText = 'Save changes';
saveBtn.disabled = true;

saveBtn.addEventListener('click', () => {
  let valid = validateDescription(description);
  if (valid) {
    if (id) {
      modifyItem(id, description);
    } else {
      addItem(description);
    }
    mainPage();
  } else {
    warning('You can\'t add already exist item');
  }
});

function warning(errorMessage) {
  let message = document.createElement('div');
  message.innerHTML = `Error! <br> ${errorMessage}`;
  message.classList.add('message');
  document.body.appendChild(message);
  let span = document.createElement('span');
  span.innerHTML = '&#9747';
  message.appendChild(span);
  if (isChrome) {
    message.style.left = '10px';
  } else {
    message.style.right = '10px'
  }
  span.onclick = function () {
    message.style.display = 'none'
  };
  setTimeout(function () {
    message.style.display = 'none'
  }, timeOut);
}

let todoItems = [];

let id;
let description = '';

if (localStorage.getItem('todoItems')) {
  todoItems = JSON.parse(localStorage.getItem('todoItems'));
} else {
  todoItems = [];
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#add') {
    addPage();
  } else if (window.location.hash === `#modify/${id}`) {
    modifyPage();
  } else {
    mainPage();
  }
});

mainPage();

function mainPage() {
  rootNode.innerHTML = '';
  window.location.hash = '';
  heading.innerText = 'Simple TODO application';
  rootNode.appendChild(heading);
  rootNode.appendChild(addBtn);

  addBtn.addEventListener('click', () => {
    window.location.hash = '#add';
  });

  const list = document.createElement('ul');

  if (todoItems.length) {
    for (let task of todoItems) {
      const listItem = document.createElement('li');
      listItem.setAttribute('id', `${task.id}`);
      const checkBtn = document.createElement('img');
      const itemText = document.createElement('span');
      itemText.innerText = task.description;
      const deleteBtn = document.createElement('img');
      deleteBtn.setAttribute('src', 'assets/img/remove-s.jpg');

      if (task.isDone) {
        checkBtn.setAttribute('src', 'assets/img/done-s.png');
        itemText.style.backgroundColor = 'gray';
      } else {
        checkBtn.setAttribute('src', 'assets/img/todo-s.png');
      }

      checkBtn.addEventListener('click', () => {
        task.isDone = !task.isDone;
        let id = task.id;
        let currentIndex = todoItems.findIndex(value => value.id === id);

        if (task.isDone) {
          moveElement(todoItems, currentIndex, todoItems.length - 1);
        } else {
          let firstDoneIndex = todoItems.findIndex(value => value.isDone);

          //no sense to move, element is already in the right position
          if (firstDoneIndex !== notFoundIndex && firstDoneIndex < currentIndex) {
            moveElement(todoItems, currentIndex, firstDoneIndex);
          }
        }

        localStorage.setItem('todoItems', JSON.stringify(todoItems));
        mainPage();
      });

      itemText.addEventListener('click', () => {
        if (task.isDone) {
          warning('You can\'t edit already done item');
          return;
        }
        id = task.id;
        description = task.description;

        window.location.hash = `#modify/${id}`;
      });

      deleteBtn.addEventListener('click', () => {
        id = task.id;
        let indexToDelete = todoItems.findIndex(value => value.id === id);
        todoItems.splice(indexToDelete, 1);
        localStorage.setItem('todoItems', JSON.stringify(todoItems));
        id = null;

        mainPage();
      });

      listItem.appendChild(checkBtn);
      listItem.appendChild(itemText);
      listItem.appendChild(deleteBtn);

      list.appendChild(listItem);
    }

    rootNode.appendChild(list);
  } else {
    let empty = document.createElement('p');
    empty.innerText = 'TODO is empty';
    rootNode.appendChild(empty);
  }
}

function moveElement(arr, fromIndex, toIndex) {
  arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
}

function addPage() {
  rootNode.innerHTML = '';
  heading.innerText = 'Add task';
  rootNode.appendChild(heading);
  input.value = '';
  description = '';
  rootNode.appendChild(input);
  const list = document.createElement('ul'),
    listItem = document.createElement('li');
  listItem.appendChild(cancelBtn);
  listItem.appendChild(saveBtn);
  list.appendChild(listItem);
  rootNode.appendChild(list);
  saveBtn.disabled = true;

  cancelBtn.addEventListener('click', () => {
    window.location.hash = '';
  });

  input.addEventListener('input', () => {
    description = input.value.trim();
    saveBtn.disabled = description.trim().length === 0;
  });
}

function modifyPage() {
  rootNode.innerHTML = '';
  heading.innerText = 'Modify item';
  rootNode.appendChild(heading);
  input.value = description;

  rootNode.appendChild(input);

  const list = document.createElement('ul'),
    listItem = document.createElement('li');
  listItem.appendChild(cancelBtn);
  listItem.appendChild(saveBtn);
  list.appendChild(listItem);
  rootNode.appendChild(list);
  saveBtn.disabled = true;

  cancelBtn.addEventListener('click', () => {
    window.location.hash = '';
  });

  input.addEventListener('input', () => {

    description = input.value.trim();
    saveBtn.disabled = description.trim().length === 0;
  });
}

function addItem(description) {
  const itemID = '' + (new Date()).getTime();
  let item = {description, id: itemID, isDone: false};
  todoItems.push(item);


  let currentIndex = todoItems.length - 1;
  let firstDoneIndex = todoItems.findIndex(value => value.isDone);
  //no sense to move, element is already in the right position
  if (firstDoneIndex !== notFoundIndex && firstDoneIndex < currentIndex) {
    moveElement(todoItems, currentIndex, firstDoneIndex);
  }

  localStorage.setItem('todoItems', JSON.stringify(todoItems));

  return todoItems;
}

function modifyItem(id, description) {
  let indexToModify = todoItems.findIndex(value => value.id === id);
  todoItems[indexToModify].description = description;
  localStorage.setItem('todoItems', JSON.stringify(todoItems));

  return todoItems;
}

function validateDescription(description) {
  let indexOfDescription = todoItems.findIndex(value => value.description === description);
  return indexOfDescription === notFoundIndex;
}