const tasksList = [
  { id: "1", text: "выучить html", completed: true },
  { id: "2", text: "выучить css", completed: true },
  { id: "3", text: "выучить js", completed: false },
  { id: "4", text: "выучить фреймворк", completed: false },
  { id: "5", text: "написать несколько учебных проектов", completed: false },
  { id: "6", text: "пройти собеседование", completed: false },
  { id: "7", text: "получить работу", completed: false },
  ];
const ul = document.querySelector('.todo-list')


function getId(){
  let idsArray = tasksList.map(i => i.id)
  console.log(idsArray)
  let maxId = Math.max(...idsArray);
}
getId();


function renderTask (task){ 

  const listItem = document.createElement('li');

  const div = document.createElement('div');
  div.className = 'view';

  const input = document.createElement('input');
  input.className = "toggle"; 
  input.type = "checkbox";
  input.checked = task.completed
  
  const label = document.createElement('label');
  label.innerHTML = task.text


  const button = document.createElement('button');
  button.className = "destroy";


  ul.appendChild(listItem)
  listItem.appendChild(div)
  div.appendChild(input)
  div.appendChild(label)
  div.appendChild(button)

  console.log(ul)
}

tasksList.forEach(function(task) {
renderTask(task);
});

(function createNewTask() {
  const input = document.querySelector('.new-todo').addEventListener('keydown', function(e) {
    if (e.keyCode === 13 && this.value != '') {
      tasksList.push({ id:String.newId, text: this.value, completed: false },);
      let newTask = tasksList[tasksList.length - 1]
     
        const listItem = document.createElement('li');
    
        const div = document.createElement('div');
        div.className = 'view';
    
        const input = document.createElement('input');
        input.className = "toggle"; 
        input.type = "checkbox";
        input.checked = newTask.completed
        
        const label = document.createElement('label');
        label.innerHTML = newTask.text
    
    
        const button = document.createElement('button');
        button.className = "destroy";
    
    
        ul.appendChild(listItem)
        listItem.appendChild(div)
        div.appendChild(input)
        div.appendChild(label)
        div.appendChild(button)
    
        console.log(ul)

        this.value = '';
    }});})();
