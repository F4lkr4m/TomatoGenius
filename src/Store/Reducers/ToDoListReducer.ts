import { ToDoAction } from '../ActionCreators/ToDoListActionCreator';
import { ToDoActionType } from '../Actions/ToDoListActions';

interface ToDo {
  label: string;
  text: string;
  id: string;
  completed: boolean;
}

interface State {
  todos: Array<ToDo>;
}

const initialState = {
  todos: [],
};

export const ToDoListReducer = (state: State = initialState, action: ToDoAction): State => {
  switch (action.type) {
    case ToDoActionType.ADD_TODO: {
      console.log('ADDING TODO');
      return state;
    }
    case ToDoActionType.TOGGLE_TODO: {
      console.log('TOGGLE TODO');
      return state;
    }
    default:
      return state;
  }
};
