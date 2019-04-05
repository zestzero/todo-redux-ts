import { getStateAtNamespaceKey } from 'redux-utils/selectors';
import { StoreShape, TODO_NAMESPACE_KEY } from 'redux-utils/types';
import { TodoNamespaceShape } from './types';

export const getTodos = (state: StoreShape): TodoNamespaceShape =>
  getStateAtNamespaceKey(state, TODO_NAMESPACE_KEY);
