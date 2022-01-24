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

interface ToggleToDoPayload {
  id: string;
}

interface ToggleToDo {
  type: ToDoActionType.TOGGLE_TODO;
  payload: ToggleToDoPayload;
}

export function addToDo(payload: ToDoPayload) {
  const action: AddToDo = {
    type: ToDoActionType.ADD_TODO,
    payload: payload,
  };
  return action;
}

export function toggleToDo(payload: ToggleToDoPayload) {
  const action: ToggleToDo = {
    type: ToDoActionType.TOGGLE_TODO,
    payload: payload,
  };
  return action;
}

export type ToDoAction = AddToDo | ToggleToDo;
