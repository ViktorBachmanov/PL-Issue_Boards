import { getNextId } from './utils'
import { useSelector, useDispatch } from 'react-redux'
import EditForm from './editForm';
import { priorLevels, statusTypes } from '../../types'


export default function NewTodo() {

    const todos = useSelector(state => state.todos);

    const newTodo = {
        id: getNextId(todos),
        title: '',
        description: '',
        priority: priorLevels.NONE,
        storyPoints: 1,
        status: statusTypes.NOT_SET,
    };

    const dispatch = useDispatch();

    return <EditForm initialTodo={newTodo} dispatch={dispatch}/>;

}