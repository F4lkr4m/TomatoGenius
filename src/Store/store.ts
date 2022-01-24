import { Store, combineReducers, createStore } from 'redux';
import { ToDoAction } from './ActionCreators/ToDoListActionCreator';
import { ToDoListReducer } from './Reducers/ToDoListReducer';

const reducer = combineReducers({
  todos: ToDoListReducer,
});

export type Actions = ToDoAction;
export type RootReducer = ReturnType<typeof reducer>;

const store: Store<RootReducer, Actions> = createStore(reducer);

export default store;
