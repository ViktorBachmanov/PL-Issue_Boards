export function getTodoById(todos, id) {
  let todo = todos.find((todo) => todo.id === id);

  if (todo !== undefined) {
    todo = { ...todo };
  }

  return todo;
}

export function replaceTodoById(todos, newTodo) {
  let newTodos = todos.map((todo) => {
    if (todo.id === newTodo.id) {
      return newTodo;
    } else {
      return todo;
    }
  });

  return newTodos;
}

export function getNextId(todos) {
  let lastId = todos.reduce((prevResult, todo) => {
    const currentVal = parseIntId(todo.id);
    return Math.max(prevResult, currentVal);
  }, -1);

  lastId++;

  return `FC-${lastId}`;
}

function parseIntId(id) {
  const index = id.indexOf('-');

  const val = id.substring(index + 1);

  return val;
}
