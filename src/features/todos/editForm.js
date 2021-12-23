import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useState } from "react";
import { priorLevels, statusTypes } from '../../types'
import StoryPoints from '../../components/storyPoints'
import { getNextId } from './utils'


export default function EditForm(props) {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const initialValid = props.todo ? true : false;

    let [ isValid, setValid ] = useState(initialValid);

    let [ todo, setTodo ] = useState(props.todo || 
        {
            id: getNextId(todos),
            title: '',
            description: '',
            priority: priorLevels.NONE,
            storyPoints: 1,
            status: statusTypes.NOT_SET,
        })

    const handleChange = (e) => {
        setTodo(prevTodo => {
            return {...prevTodo, title: e.target.value};
        });
        
        if(e.target.value) {
            setValid(true);
        } else {
            setValid(false);
        }
    }

    const handleSave = (e) => {
        dispatch({
            type: 'todos/todoSave',
            payload: todo
        });
    };
/*
    let todo = {
        id: '',
        title: '',
        description: '',
        priority: priorLevels.NONE,
        storyPoints: 1,
        status: statusTypes.NOT_SET,
    }

    if(props.todo) {
        todo = { ...todo, ...props.todo };
    }
*/
    

    return (
        <form className='edit-form' onSubmit={e => { e.preventDefault()}}>
            <input placeholder='Title *' 
                    maxLength='100' 
                    className='edit-form__input-title_theme-1'
                    onChange={handleChange}
                    value={todo.title}
            />

            <select defaultValue={todo.priority}>
                <option hidden value={priorLevels.NONE}>Priority</option>
                <option value={priorLevels.CRITICAL}>Critical</option>
                <option value={priorLevels.MAJOR}>Major</option>
                <option value={priorLevels.MINOR}>Minor</option>
                <option value={priorLevels.NORMAL}>Normal</option>
            </select>

            <StoryPoints val={todo.storyPoints}/>

            <select defaultValue={todo.status}>
                <option hidden value={statusTypes.NOT_SET}>Status</option>
                <option value={statusTypes.TO_DO}>{statusTypes.TO_DO}</option>
                <option value={statusTypes.IN_PROGRESS}>{statusTypes.IN_PROGRESS}</option>
                <option value={statusTypes.TEST}>{statusTypes.TEST}</option>
                <option value={statusTypes.DONE}>{statusTypes.DONE}</option>
            </select>

            <textarea placeholder='Description' 
                        maxLength='300'
                        className='edit-form__textarea_theme-1'
                        defaultValue={todo.description}
            />

            <Link to='/'>
                <button type='submit' 
                        className="button button_blue" 
                        onClick={handleSave}
                        disabled={!isValid}
                >
                    Save
                </button>
            </Link>
        </form>
    );
}