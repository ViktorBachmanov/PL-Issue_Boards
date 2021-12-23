import initialState from './initialState'
import { getTodoById, replaceTodo } from './utils'


export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case 'todos/todoSave': {
            return [ ...state, action.payload ];
        }
        case 'todos/todoChangeStatus': {
            const todo = getTodoById(state, action.payload.id);
            if(todo === undefined) {
                console.error('todosReducer case: todoChangeStatus');
                return state;
            }
            const newTodo = { ...todo, status: action.payload.status };
            let newState = replaceTodo(state, newTodo);
            return newState;
        }
        default: 
            return state;
    }
};