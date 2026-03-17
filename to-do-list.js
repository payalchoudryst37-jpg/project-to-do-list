const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if(taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        li.appendChild(deleteBtn);

       
        li.addEventListener('click', (e) => {
            if(e.target !== deleteBtn) {
                li.classList.toggle('completed');
            }
        });

        
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        todoList.appendChild(li);
        todoInput.value = '';
    } else {
        alert("Please enter a task!");
    }
});

todoInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        addBtn.click();
    }
});