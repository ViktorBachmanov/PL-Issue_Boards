import { Fragment } from "react";
import { Link } from "react-router-dom";
import Board from './board';
import { statusTypes } from '../types'


export default function MainBoard() {
    return (
        <Fragment>
            <h1>Issue Boards</h1>

            <Link to="/new" className='button button_orange'>New issue</Link>

            <div className='boards-container'>
                <Board title={statusTypes.TO_DO}/>
                <Board title={statusTypes.IN_PROGRESS}/>
                <Board title={statusTypes.TEST}/>
                <Board title={statusTypes.DONE}/>
            </div>
        </Fragment>
    );
}