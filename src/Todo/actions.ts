import { TodoActionTypes, TodoNamespaceShape } from './types';

export function hydrateTodoNamespace(initialData: TodoNamespaceShape) {
  return {
    type: TodoActionTypes.Hydrate,
    payload: initialData,
  };
}

export function createTodoNamespace(payload: { title: string, description: string }) {
    return {
      type: TodoActionTypes.Create,
      payload,
    };
}
