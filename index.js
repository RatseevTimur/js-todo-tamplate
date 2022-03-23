let tasksList = [];

const ul = document.querySelector('.todo-list');
const mainInput = document.querySelector('.new-todo');

function recordStorage(){
  window.localStorage.setItem('tasksList', JSON.stringify(tasksList))
}

function extractionStorage(){
  tasksList = JSON.parse(window.localStorage.getItem('tasksList'))
  return tasksList
}

renderTasks(tasksList);

function getId() {
  extractionStorage();
  let idsArray = tasksList.map(i => i.id)
  let maxId = Math.max(...idsArray);
  let newTaskId = (maxId > 0) ? maxId+1 : 1;
  return newTaskId;
}

mainInput.addEventListener('keydown', function (e) {
  const enterKeyCode = 13;
  if (e.keyCode === enterKeyCode && e.target.value !== '') {
    tasksList = extractionStorage();
    const newTaskId = getId();
    const newTask = { id: newTaskId.toString(), text: this.value, completed: false };
    tasksList.push(newTask);
    recordStorage();
    renderTasks(tasksList);
    countActiveTasks();
    e.target.value = '';
  }
})

const taskCount = document.querySelector('span');
function countActiveTasks (){
tasksListActive = tasksList.filter(function(task){
  return !task.completed
})
const activeTasks = tasksListActive.length;
taskCount.textContent = 'Active Tasks: ' + activeTasks;
}
countActiveTasks();

function renderTasks(tasksList) {
  ul.innerHTML = '';
 tasksList = extractionStorage();
  tasksList.forEach(task => {
    renderTask(task);
  })
}

<<<<<<< Updated upstream
=======
const footer = document.querySelector('footer');
function checkFooter(){
  if (tasksList.length == 0) {
    footer.className = "hidden";
} else {
  footer.className= 'footer';
}
}

>>>>>>> Stashed changes

document.querySelector('a').onclick = function(){
  renderTasks(tasksList);
}

function FilterCompleted(){
  tasksListCompleted = tasksList.filter(function(task){
    return task.completed
  })
  renderTasks(tasksListCompleted);
}

function FilterActive(){
  tasksListActive = tasksList.filter(function(task){
    return !task.completed
  })
  renderTasks(tasksListActive);
}

function renderTask(task) {
  const listItem = document.createElement('li');

  const div = document.createElement('div');
  div.className = 'view';

  const input = document.createElement('input');
  input.className = "toggle";
  input.type = "checkbox";
  input.checked = task.completed;
  input.id = task.id
  input.onchange = function(e) {
    tasksList = tasksList.map(function(task){
      if (e.target.id === task.id){
        return {id: task.id, text: task.text, completed:!task.completed}
      }
      return task
    })
    recordStorage();
    renderTasks(tasksList);
    countActiveTasks();
  }

  const label = document.createElement('label');
  label.className = task.completed ? 'completed' : ''
  label.innerHTML = task.text;

  const button = document.createElement('button');
  button.className = "destroy";
  button.id = task.id
  button.onclick = function(e) {
    const id = e.target.id
    window.localStorage.removeItem('tasksList');
    tasksList = tasksList.filter(function(task){
      return task.id !== id
    })
    recordStorage();
    renderTasks(tasksList);
    countActiveTasks();
    }

  ul.appendChild(listItem);
  listItem.appendChild(div);
  div.appendChild(input);
  div.appendChild(label);
  div.appendChild(button);
}