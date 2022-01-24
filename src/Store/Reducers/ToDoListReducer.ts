import { genId } from '../../Utils/IdGenerator';
import { ToDoAction } from '../ActionCreators/ToDoListActionCreator';
import { ToDoActionType } from '../Actions/ToDoListActions';

export interface ToDoI {
  label: string;
  text: string;
  id: string;
  completed: boolean;
}

interface State {
  todos: Array<ToDoI>;
}

const todos = localStorage.getItem('todos');
let todosInitial: Array<ToDoI> = [];

if (todos) {
  todosInitial = JSON.parse(todos);
  todosInitial.map((todo) => {
    return {
      ...todo,
      id: genId.next().value,
    };
  });
}

export const TodosInitialState = {
  todos: todosInitial,
};

export const ToDoListReducer = (state: State = TodosInitialState, action: ToDoAction): State => {
  switch (action.type) {
    case ToDoActionType.ADD_TODO: {
      const newTodos = state.todos;
      newTodos.push({
        completed: false,
        ...action.payload,
      });
      localStorage['todos'] = JSON.stringify(newTodos);
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
      localStorage['todos'] = JSON.stringify(newTodos);
      return {
        todos: newTodos,
      };
    }
    default:
      return state;
  }
};
