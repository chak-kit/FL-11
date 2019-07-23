let rootNode = document.getElementById('root');
let add = document.getElementsByClassName('add')[0];
let input = document.querySelector("input[type='text']");
let box = document.getElementsByClassName('box')[0];
let itemCount = 1;
const maxLength = 10;

add.onclick = function () {
  const newTodo = input.value;
  create(newTodo);
  input.value = '';
  add.disabled = true;
  itemCount++;
};

function create(newTodo) {
  if (itemCount > maxLength) {
    add.disabled = true;
    input.disabled = true;
    let notifications = document.createElement('p');
    notifications.innerText = 'Maximum item per list are created!';
    box.insertBefore(notifications, input)
  } else {
    let editItem = document.createElement('input');
    editItem.type = 'text';
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('check-box');
    let label = document.createElement('label');
    label.innerText = newTodo;
    let listItem = document.createElement('li');
    listItem.classList.add('list-item');

    let spanPen = document.createElement('span');
    let spanDelete = document.createElement('span');
    spanPen.classList.add('pen');
    spanDelete.classList.add('deleteBox', 'delete-box');
    let penIcon = document.createElement('i');
    let penTxt = document.createTextNode('create');
    let deleteBoxIcon = document.createElement('i');
    let deleteTxt = document.createTextNode('delete');
    penIcon.classList.add('material-icons');
    deleteBoxIcon.classList.add('material-icons');

    penIcon.appendChild(penTxt);
    deleteBoxIcon.appendChild(deleteTxt);
    spanPen.appendChild(penIcon);
    spanDelete.appendChild(deleteBoxIcon);
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editItem);
    listItem.appendChild(spanPen);
    listItem.appendChild(spanDelete);

    rootNode.appendChild(listItem);

    listenDeleteTodo(spanDelete);

    checkBox.onclick = function () {
      return checkBox.checked
    };

    spanPen.onclick = function () {
      return editTask(spanPen, editItem, listItem, label, checkBox)
    };
  }

}

input.addEventListener('change', () => {
  add.disabled = input.value === '';
});

function listenDeleteTodo(element) {
  element.addEventListener('click', (event) => {
    element.parentElement.remove();
    event.stopPropagation();
  });
}

function editTask(spanPen, editItem, listItem, label, checkBox) {
  spanPen.style.display = 'none';
  checkBox.style.display = 'none';
  let button = document.createElement('button');
  listItem.appendChild(button);

  let containsClass = listItem.classList.contains('editMode');
  if (containsClass) {
    label.innerText = editItem.value;
  } else {
    editItem.value = label.innerText;
  }
  listItem.classList.toggle('editMode');

  button.onclick = function () {
    editItem.style.display = 'none';
    label.style.display = 'inline-block';
    button.style.display = 'none';
    checkBox.style.display = 'inline-block';
    spanPen.style.display = 'inline-block';
    label.innerHTML = editItem.value;

  }
}
