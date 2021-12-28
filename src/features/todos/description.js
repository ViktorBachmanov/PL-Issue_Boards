import { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditForm from './editForm';
import { useSelector } from 'react-redux';
import { getTodoById } from './utils';
import PriorityPic from './priorityPic';
import { Button } from '@mui/material';

import { useBreadcrumbs } from '../../components/breadCrumbs';


export default function Description() {
  const { todoId } = useParams();
  useBreadcrumbs(todoId);
  const todo = useSelector((state) => getTodoById(state.todos, todoId));

  const [mode, setMode] = useState('READ'); // READ / EDIT

  function handleEdit() {
    setMode('EDIT');
  }

  //console.log('Description render');

  return mode === 'READ' ? (
    <Fragment>
      <h2>
        {todoId} {todo.title}
      </h2>
      <div className="description-bar">
        <PriorityPic level={todo.priority} />
        <div className="story-points-pic story-points-pic_theme-1">{todo.storyPoints}</div>
        <div className="description-bar__status">{todo.status}</div>

        <Button onClick={handleEdit} variant="contained" style={{ background: '#F2994A' }}>
          Edit
        </Button>
      </div>
      <div className="description-text">{todo.description}</div>
    </Fragment>
  ) : (
    <EditForm initialTodo={todo} />
  );
}
