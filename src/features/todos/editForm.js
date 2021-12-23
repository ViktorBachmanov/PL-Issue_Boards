import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useState } from "react";
import { priorLevels } from '../../types'
import StoryPoints from '../../components/storyPoints'


export default function EditForm() {
    const dispatch = useDispatch();

    let [ isValid, setValid ] = useState(false);

    const handleInput = (e) => {
        if(e.target.value) {
            setValid(true);
        } else {
            setValid(false);
        }
    }

    const handleSave = (e) => {
        dispatch({
            type: 'todos/todoSave',
            payload: {
                id: 'ABC'
            }
        });
    };

    return (
        <form className='edit-form' onSubmit={e => { e.preventDefault()}}>
            <input placeholder='Title *' 
                    maxLength='100' 
                    className='edit-form__input-title_theme-1'
                    onInput={handleInput}
            />

            <select placeholder='Priority'>
                <option hidden value={priorLevels.NONE}>Priority</option>
                <option value={priorLevels.CRITICAL}>Critical</option>
                <option value={priorLevels.MAJOR}>Major</option>
                <option value={priorLevels.MINOR}>Minor</option>
                <option value={priorLevels.NORMAL}>Normal</option>
            </select>

            <StoryPoints/>

            <textarea placeholder='Description' maxLength='300' className='edit-form__textarea_theme-1'/>

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