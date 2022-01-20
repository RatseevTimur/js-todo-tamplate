const task = {id: "1", text: "выучить html", completed: true};
const ul = document.querySelector('.todo-list')


function createListItem (){ 


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

createListItem();

/*
<li>
    <div>
        <input>
        <label></label>
       <button></button>
   </div>
</li>
*/