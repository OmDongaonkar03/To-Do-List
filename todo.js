// todo.js
const tasks = [];
const doneTasks = [];

function addTask() {
  let input = document.getElementById('userinp');
  const text = input.value.toString();
  tasks.push(text);
  input.value = '';
  displayTasks();
}

function displayTasks() {
  const taskList = document.getElementById('added');
  taskList.innerHTML = '';
  
  tasks.forEach((task, index) => {
    taskList.innerHTML += `
      <div class="content">
        <span class="contentText">${task}</span>
        <div class="buttons">
          <button onclick="doneTask(${index})">done</button>
          <button onclick="deleteTask(${index})">delete</button>
        </div>
      </div>
    `;
  });

  const doneList = document.getElementById('pending');
  doneList.innerHTML = '';

  doneTasks.forEach((task, index) => {
    doneList.innerHTML += `
      <div class="content">
        <span class="contentText">${task}</span>
      </div>
    `;
  });
}

function doneTask(index) {
  const task = tasks.splice(index, 1)[0];
  doneTasks.push(task);
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}