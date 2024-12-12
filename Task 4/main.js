const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${task}</span>
            <button class="delete">X</button>
        `;
        taskList.appendChild(taskItem);

        taskItem.querySelector('.delete').addEventListener('click', () => {
            taskItem.remove();
        });

        taskInput.value = '';
    }
});
