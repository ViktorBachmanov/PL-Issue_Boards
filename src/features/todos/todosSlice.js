import initialState from './initialState'
import { getTodoById, replaceTodoById } from './utils'


export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case 'todos/todoSave': {
            const todo = getTodoById(state, action.payload.id);
            if(todo === undefined) {
                return [ ...state, action.payload ];    // Add new todo
            } else {
                const editedTodo = action.payload;
                let newState = replaceTodoById(state, editedTodo);
                return newState;
            }            
        }
        case 'todos/todoChangeStatus': {
            const todo = getTodoById(state, action.payload.id);
            if(todo === undefined) {
                console.error('todosReducer case: todoChangeStatus');
                return state;
            }
            const newTodo = { ...todo, status: action.payload.status };
            let newState = replaceTodoById(state, newTodo);
            return newState;
        }
        default: 
            return state;
    }
};