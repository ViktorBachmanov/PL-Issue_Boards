import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import EditForm from './editForm';
import { useSelector } from 'react-redux'
import { getTodoById } from './utils'
import PriorityPic from './priorityPic'



export default function Description() {
    const { todoId } = useParams();
    const todo = useSelector(state => getTodoById(state.todos, todoId));       

    let readView = (
        <Fragment>
            <h2>{todoId} {todo.title}</h2>
            <div className="description-bar">
                <PriorityPic level={todo.priority} />
                <div className="story-points-pic story-points-pic_theme-1">{todo.storyPoints}</div>
                <div className="description-bar__status">{todo.status}</div>
                
                <button className="button button_orange description-bar__button" 
                        onClick={handleEdit}>Edit</button>
            </div>
            <div className="description-text">{todo.description}</div>
        </Fragment>
    );

    let [view, setView] = useState(readView);
    

    function handleEdit() {
        setView(<EditForm initialTodo={todo} />);
       
    };


    
    return view;

};