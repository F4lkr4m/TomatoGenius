import { combineReducers, createStore } from 'redux';
import { ToDoListReducer } from './Reducers/ToDoListReducer';

const reducer = combineReducers({
  todos: ToDoListReducer,
});

const store = createStore(reducer);

export default store;
