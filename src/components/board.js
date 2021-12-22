import Card from '../features/todos/card';
import { useSelector } from 'react-redux'


export default function Board(props) {
    const todos = useSelector(state => state.todos);

    const filteredTodos = todos.filter(todo => todo.status === props.title);

    const todoCards = filteredTodos.map(todo => {
        return <Card key={todo.id} content={todo.title} id={todo.id}/>;
    });

    return (
        <div className='board board_theme-1'>
            <div className="board__title">{props.title}</div>

            {todoCards}
        </div>
    );
}