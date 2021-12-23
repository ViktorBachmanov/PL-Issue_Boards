import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useState } from "react";


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