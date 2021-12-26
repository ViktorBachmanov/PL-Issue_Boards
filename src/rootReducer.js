import { combineReducers } from 'redux';

import todosReducer from './features/todos/todosSlice';
import filterReducer from './features/filter/filterSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

export default rootReducer;
