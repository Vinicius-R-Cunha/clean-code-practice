function renderActiveTodos(todos) {
    const ulElement = document.querySelector("ul");
    renderLis(todos, ulElement);
}

function renderLis(todos, ulElement) {
    todos.forEach(todo => {
        if (todo.active || todo.daysFinished < 0) {
            const liElement = document.createElement("li");
            liElement.innerHTML = todo.text;
            ulElement.appendChild(liElement);
        }
    });
}