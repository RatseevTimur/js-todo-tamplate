let tasksList = [
  { id: "1", text: "выучить html", completed: true },
  { id: "2", text: "выучить css", completed: true },
  { id: "3", text: "выучить js", completed: false },
  { id: "4", text: "выучить фреймворк", completed: false },
  { id: "5", text: "написать несколько учебных проектов", completed: false },
  { id: "6", text: "пройти собеседование", completed: false },
  { id: "7", text: "получить работу", completed: false },
];
const ul = document.querySelector('.todo-list');
const mainInput = document.querySelector('.new-todo');

renderTasks(tasksList);

function getId() {
  let idsArray = tasksList.map(i => i.id)
  let maxId = Math.max(...idsArray);
  let newTaskId = (maxId > 0) ? maxId+1 : 1;
  return newTaskId;
}

mainInput.addEventListener('keydown', function (e) {
  const enterKeyCode = 13;
  if (e.keyCode === enterKeyCode && e.target.value !== '') {
    const newTaskId = getId();
    const newTask = { id: newTaskId.toString(), text: this.value, completed: false };
    tasksList.push(newTask);
    renderTasks(tasksList);
    countActiveTasks();
    e.target.value = '';
  }
})

const span = document.querySelector('span');
function countActiveTasks (){
tasksListC = tasksList.filter(function(task){
  return task.completed === false
})
const activeTasks = tasksListC.length;
span.textContent = 'Active Tasks: ' + activeTasks;
}
countActiveTasks();

function renderTasks(tasks) {
  ul.innerHTML = '';
  tasks.forEach(task => {
    renderTask(task);
  })
}


document.querySelector('a').onclick = function(){
  renderTasks(tasksList);
}

function FilterCompleted(){
  tasksListF = tasksList.filter(function(task){
    return task.completed === true
  })
  renderTasks(tasksListF);
}

function FilterActive(){
  tasksListF = tasksList.filter(function(task){
    return task.completed === false
  })
  renderTasks(tasksListF);
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
    tasksList = tasksList.filter(function(task){
      return task.id !== id
    })
    renderTasks(tasksList);
    countActiveTasks();
    }

  ul.appendChild(listItem);
  listItem.appendChild(div);
  div.appendChild(input);
  div.appendChild(label);
  div.appendChild(button);
}