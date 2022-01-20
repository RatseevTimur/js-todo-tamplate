const tasksList = [
    { id: "1", text: "выучить html", completed: true },
    { id: "2", text: "выучить css", completed: true },
    { id: "3", text: "выучить js", completed: false },
    { id: "4", text: "выучить фреймворк", completed: false },
    { id: "5", text: "написать несколько учебных проектов", completed: false },
    { id: "6", text: "пройти собеседование", completed: false },
    { id: "7", text: "получить работу", completed: false }
    ];
const ul = document.querySelector('.todo-list')

tasksList.forEach(function(text, i, tasksList) {
    for(let i = 0; i<8; i++){
            
        function renderTasks (){ 

            const listItem = document.createElement('li');

            const div = document.createElement('div');
            div.className = 'view';

            const input = document.createElement('input');
            input.className = "toggle"; 
            input.type = "checkbox";
            input.checked = tasksList[i,i].completed
            
            const label = document.createElement('label');
            label.innerHTML = tasksList[i,i].text


            const button = document.createElement('button');
            button.className = "destroy";


            ul.appendChild(listItem)
            listItem.appendChild(div)
            div.appendChild(input)
            div.appendChild(label)
            div.appendChild(button)

            console.log(ul)
        }

        renderTasks();


    }
    
  });
