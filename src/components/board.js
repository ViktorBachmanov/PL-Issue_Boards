import Card from '../features/todos/card';
import { connect } from 'react-redux';
import { todoChangeStatus as todoChangeStatusAction } from '../features/todos/todosSlice';

function Board(props) {
  const filteredTodos = props.todos.filter((todo) => todo.status === props.title);

  const todoCards = filteredTodos.map((todo) => {
    return (
      <Card key={todo.id} content={todo.title} id={todo.id} level={todo.priority} storyPoints={todo.storyPoints} />
    );
  });

  const handleDragOver = (ev) => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (ev) => {
    ev.preventDefault();
    const todoId = ev.dataTransfer.getData('plain/text');
    props.todoChangeStatusAction({
      id: todoId,
      status: props.title,
    });
  };

  return (
    <div className="board board_theme-1" onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className="board__title">{props.title}</div>

      {todoCards}
    </div>
  );
}

export default connect(null, { todoChangeStatusAction })(Board);
