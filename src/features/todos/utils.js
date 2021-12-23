export function getTodoById(todos, id) {
    return todos.find(todo => todo.id === id);
}

export function replaceTodoById(todos, newTodo) {
    let newTodos = todos.map(todo => {
        if(todo.id === newTodo.id) {
            return newTodo;
        } else {
            return todo;
        }
    });

    return newTodos;
}