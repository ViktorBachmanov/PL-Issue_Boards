import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import EditForm from './editForm';
//import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { getTodoById } from './utils'


export default function Description() {
    const { todoId } = useParams();
    const todo = useSelector(state => getTodoById(state.todos, todoId));       

    let readView = (
        <Fragment>
            <h2>{todoId}</h2>
            <button className="button button_orange" onClick={handleEdit}>Edit</button>
        </Fragment>
    );

    let [view, setView] = useState(readView);
    

    function handleEdit() {
        setView(<EditForm todo={todo} />);
       
    };


    
    return view;

};