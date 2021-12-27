import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Board from './board';
import { statusTypes } from '../types';
import Search from './search';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';


export default function MainBoard() {
  let todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const pattern = new RegExp(filter.pattern);
  let filteredTodos = [];
  todos.forEach((todo) => {
    let rslt1 = todo.id.match(pattern);
    let rslt2 = todo.title.match(pattern);
    if (rslt1 || rslt2) {
      filteredTodos.push({ ...todo });
    }
  });

  return (
    <Fragment>
      <div className="main-board__title">
        <h1 style={{marginRight: '1.5rem'}}>Issue Boards</h1>
        <Link to="/new" >
          <Button variant="contained" style={{background: '#F2994A'}} >
            New issue
          </Button>
        </Link>
      </div>

      <Search dispatch={useDispatch()} />

      <div className="boards-container">
        <Board title={statusTypes.TO_DO} todos={filteredTodos} />
        <Board title={statusTypes.IN_PROGRESS} todos={filteredTodos} />
        <Board title={statusTypes.TEST} todos={filteredTodos} />
        <Board title={statusTypes.DONE} todos={filteredTodos} />
      </div>
    </Fragment>
  );
}
