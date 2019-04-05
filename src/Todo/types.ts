import { AnyAction } from 'redux';

export type Todo = {
  title: string,
  description: string,
  deleted: boolean,
};

export enum TodoActionTypes {
  Hydrate = 'TODO/HYDRATE',
  Create = 'TODO/CREATE',
  Delete = 'TODO/DELETE',
}

export type TodoNamespaceShape = {
  [id: string]: Todo;
};

export interface IHydrateAction extends AnyAction {
  type: TodoActionTypes.Hydrate;
  payload: TodoNamespaceShape;
}

export interface ICreateAction extends AnyAction {
  type: TodoActionTypes.Create;
  payload: { id: string; title: string, description: string };
}

export interface IDeleteAction extends AnyAction {
  type: TodoActionTypes.Delete;
  payload: { id: string; };
}

export type TodoAction =
  | IHydrateAction
  | ICreateAction
  | IDeleteAction;
