/* Open t1 folder in your IDE/editor. In this assignment, you will build upon
the previous TODO list assignment and implement new features to enhance its
functionality. You will continue working with the DOM, event handling, and
array manipulation in JavaScript.
Tasks:

Update todoList Array on Item Completion:

- Modify the existing TODO list so that users can mark items as completed by
checking a checkbox.
- Update the todoList array when a user checks an item to be done. Set the
completed property of the corresponding item in the array to true if the
checkbox is checked, or false if it is unchecked.
- After each change, log the updated todoList array to the console to verify
that the array has been modified correctly.
2p
Add Delete Button to List Items:

- For each item in the TODO list, add a "Delete" button that users can click to
remove the item.
- Implement an event handler so that when the "Delete" button is clicked, the
corresponding item is removed from the todoList array.
- Use removeChild method to remove the item from the TODO list.
- After each change, log the updated todoList array to the console to verify
that the array has been modified correctly.
4p
Add Button to Add TODO Items:

- Introduce an "Add Item" button to the UI. When this button is clicked, open
a modal window.
- The modal should contain a form with an input field for the new item's name
and a "Save" button.
- Implement an event handler for the "Save" button that adds a new TODO item
to the todoList array. The new item should have a default completed property
of false.
- After each change, log the updated todoList array to the console to verify
that the array has been modified correctly.
6p */
// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');
function teeLista() {
  ul.innerHTML = '';
  for (let [i, todo] of todoList.entries()) {
    //console.log(i);
    const li = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const delButton = document.createElement('button');

    input.type = 'checkbox';
    input.id = 'todo-' + todo.id;
    input.checked = todo.completed;

    // Update todoList Array on Item Completion:
    input.addEventListener('change', function(evt){
      // console.log(evt.currentTarget); tai console.log(input);
      todo.completed = input.checked;
      console.log(todoList);
    });

    label.htmlFor = 'todo-' + todo.id;
    label.innerText = todo.task;

    delButton.innerHTML = '&#x2A09'; // unicode cross mark

    // Add event listener to remove items when the button is clicked
    delButton.addEventListener('click', function() {
      // get id of input and extract id part (todoList[0].id)
      const inputIdStr = input.id;
      const todoId = +inputIdStr.slice(5);

      ul.removeChild(li);

      function findTodoListId(item) {
        return item.id === todoId;
      }
      //console.log(todoList.findIndex(findTodoListId));
      todoList.splice(todoList.findIndex(findTodoListId), 1);
      console.log(todoList);
    });

    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(delButton);
    ul.appendChild(li);

  }
}

teeLista();

const addButton = document.querySelector('#add');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');

addButton.addEventListener('click', function () {
  dialog.showModal();
});

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const text = document.querySelector('dialog input').value;
  const item = {
    id: todoList[todoList.length - 1].id + 1,
    task: text,
    completed: false,
  };
  todoList.push(item);
  console.log(todoList);
  teeLista();
  dialog.close();
});




