import { getNextId } from './utils';
import { useSelector } from 'react-redux';
import EditForm from './editForm';

import { useBreadcrumbs } from '../../components/breadCrumbs';

export default function NewTodo() {
  useBreadcrumbs('New Issue');

  const todos = useSelector((state) => state.todos);

  const nextId = getNextId(todos);

  const newTodo = {
    id: nextId,
    title: '',
    description: '',
    priority: '',
    storyPoints: 1,
    status: '',
  };

  return <EditForm initialTodo={newTodo} />;
}
