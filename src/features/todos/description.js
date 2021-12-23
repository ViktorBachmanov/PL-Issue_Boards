import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import EditForm from './editForm';
//import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'


export default function Description() {
    
    

    const { todoId } = useParams();
       

    let readView = (
        <Fragment>
            <h2>{todoId}</h2>
            <button className="button button_orange" onClick={handleEdit}>Edit</button>
        </Fragment>
    );

    let [view, setView] = useState(readView);
    

    function handleEdit() {
        setView(<EditForm/>);
       
    };


    
    return view;

};