const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const task = taskInput.value.trim();
    const date = taskDate.value;

    if (task && date) {

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${task} - ${new Date(date).toLocaleString()}</span>
            <button class="delete">X</button>
        `;


        taskItem.querySelector('.delete').addEventListener('click', () => {
            taskItem.remove();
        });

        taskList.appendChild(taskItem);

        taskInput.value = '';
        taskDate.value = '';
    }
});
