import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'


export default function BreadCrumbs() {
    const todos = useSelector(state => state.todos);
    const location = useLocation();

    const [pathname, setPathname] = useState('');


    React.useEffect(() => {
        console.log('handle route change here', location)
        switch(location.pathname) {
            case '/':
                setPathname('');
                break;
            case '/new':
                setPathname(' > New Issue');
                break;
            default:
                let id = location.pathname.substring(1);    // strip leading slash
                let todo = getTodoById(todos, id);
                if(todo !== undefined) {
                    setPathname(` > ${id} ${todo.title}`);
                }
        }
    }, [location]);

    return (
        <h3>
            <Link to='/'>Issue Boards</Link>{pathname}
        </h3>
    );
}


function getTodoById(todos, id) {
    return todos.find(todo => todo.id === id);
}