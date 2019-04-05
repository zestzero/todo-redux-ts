import { once } from 'lodash';
import { getStore, registerReducer } from '../redux-utils/store';
import { TODO_NAMESPACE_KEY } from '../redux-utils/types';
import { hydrateTodoNamespace } from './actions';
import reducer from './reducer';
import { TodoNamespaceShape } from './types';

export const getStoreForTodoApp = once(
  (initialData?: TodoNamespaceShape) => {
    registerReducer({ [TODO_NAMESPACE_KEY]: reducer });
    const store = getStore();
    if (initialData) {
      store.dispatch(hydrateTodoNamespace(initialData));
    }

    return store;
  },
);
