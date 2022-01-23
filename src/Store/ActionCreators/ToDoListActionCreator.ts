import { ToDoActionType } from '../Actions/ToDoListActions';

interface ToDoPayload {
  label: string;
  text: string;
  id: string;
}

interface AddToDo {
  type: ToDoActionType.ADD_TODO;
  payload: ToDoPayload;
}

interface ToggleToDo {
  type: ToDoActionType.TOGGLE_TODO;
  payload: string;
}

export function addToDo(payload: ToDoPayload) {
  const action: AddToDo = {
    type: ToDoActionType.ADD_TODO,
    payload: payload,
  };
  return action;
}

export function toggleToDo(id: string) {
  const action: ToggleToDo = {
    type: ToDoActionType.TOGGLE_TODO,
    payload: id,
  };
  return action;
}

export type ToDoAction = AddToDo | ToggleToDo;
