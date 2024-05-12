document.getElementById('new-task').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    var taskInput = document.getElementById('new-task');
    var newTask = taskInput.value.trim();
    if (newTask) {
        var li = document.createElement('li');
        li.innerText = newTask;
        li.onclick = function() {
            this.parentNode.removeChild(this);
        }
        document.getElementById('task-list').appendChild(li);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}
