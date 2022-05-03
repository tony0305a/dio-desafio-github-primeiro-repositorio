const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function(e){
    e.preventDefault();
    const inputField = document.getElementById('task-input');
    addTask(inputField.value);
    form.reset();
};


function addTask(description){
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const TaskLabel = document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);

    newTask.setAttribute('type','checkbox');
    newTask.setAttribute('name',description);
    newTask.setAttribute('class','checkbox');
    newTask.setAttribute('id',description);

    TaskLabel.setAttribute('for',description);
    TaskLabel.appendChild(taskDescriptionNode);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(TaskLabel);

    taskList.appendChild(taskContainer);
};

