// تحديد العناصر من الـ DOM
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const tasksList = document.getElementById('tasks-list');
const taskCountDisplay = document.getElementById('task-count');


let totalTasks = 0;


function updateTaskCount() {
    taskCountDisplay.textContent = totalTasks;
}

function addTask() {
    const taskText = taskInput.value.trim();
    

    if (taskText === "") return;


    const li = document.createElement('li');


    const span = document.createElement('span');
    span.textContent = taskText;
    
    
    span.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delet";
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', function() {
        li.remove();
        totalTasks--;
        updateTaskCount();
    });


    li.appendChild(span);
    li.appendChild(deleteBtn);
    tasksList.appendChild(li);


    totalTasks++;
    updateTaskCount();

  
    taskInput.value = "";
}

addBtn.addEventListener('click', addTask);


taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});