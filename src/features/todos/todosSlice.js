import initialState from './initialState'


export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case 'todos/todoAdded': {
            return [ ...state, action.payload ];
        }
        default: 
            return state;
    }
};