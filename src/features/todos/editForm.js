import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";


export default function EditForm() {
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch({
            type: 'todos/todoSave',
            payload: {
                id: 'ABC'
            }
        });
    };

    return (
        <div>
            <input placeholder='Title *' maxLength='100'/>
            <textarea placeholder='Description' maxLength='300'/>
            <Link to='/' className="button button_blue" onClick={handleSave}>Save</Link>
        </div>
    );
}