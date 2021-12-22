import { Fragment } from "react";
import { Link } from "react-router-dom";


export default function MainBoard() {
    return (
        <Fragment>
            <h1>Issue Boards</h1>

            <Link to="/new" className='button button_orange'>New issue</Link>
        </Fragment>
    );
}