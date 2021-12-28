import initialState from './initialState';
import { getTodoById, replaceTodoById } from './utils';
import { createSlice } from '@reduxjs/toolkit'


export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoSave(state, action) {
      const todo = getTodoById(state, action.payload.id);
      if (todo === undefined) {
        return [...state, action.payload]; // Add new todo
      } else {
        const editedTodo = action.payload;
        let newState = replaceTodoById(state, editedTodo);
        return newState;
      }
    },
    todoChangeStatus(state, action) {
      const todo = getTodoById(state, action.payload.id);
      if (todo === undefined) {
        console.error('todosReducer case: todoChangeStatus');
        return state;
      }
      const newTodo = { ...todo, status: action.payload.status };
      let newState = replaceTodoById(state, newTodo);
      return newState;
    }
  }
});

export const { todoSave, todoChangeStatus } = todosSlice.actions;

export default todosSlice.reducer;