import { ToDoAction } from '../ActionCreators/ToDoListActionCreator';
import { ToDoActionType } from '../Actions/ToDoListActions';

export interface ToDoI {
  label: string;
  text: string;
  id: string;
  completed: boolean;
}

export interface State {
  todos: Array<ToDoI>;
}

const initialState = {
  todos: [],
};

export const ToDoListReducer = (state: State = initialState, action: ToDoAction): State => {
  switch (action.type) {
    case ToDoActionType.ADD_TODO: {
      const newTodos = state.todos;
      newTodos.push({
        completed: false,
        ...action.payload,
      });
      return {
        todos: newTodos,
      };
    }
    case ToDoActionType.TOGGLE_TODO: {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todos: newTodos,
      };
    }
    default:
      return state;
  }
};
