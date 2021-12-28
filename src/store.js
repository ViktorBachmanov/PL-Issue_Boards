//import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
//import rootReducer from './rootReducer';
import todosReducer from './features/todos/todosSlice'
import filterReducer from './features/filter/filterSlice'

//const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default configureStore({
    reducer: {
        todos: todosReducer,
        filter: filterReducer,
    }
})

//export default store;
