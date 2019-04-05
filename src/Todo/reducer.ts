import { TodoAction, TodoActionTypes, TodoNamespaceShape } from './types';

const defaultState: TodoNamespaceShape = {
  sample: {
      title: 'Example #1',
      description: '',
      deleted: false,
  },
};

export default function reducer(
  state: TodoNamespaceShape,
  action: TodoAction,
) {
  switch (action.type) {
    case TodoActionTypes.Hydrate: {
      return {
        ...action.payload,
      };
    }
    case TodoActionTypes.Create: {
      const { id } = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          title: action.payload.title,
          description: action.payload.description,
        },
      };
    }
    default: {
      return state;
    }
  }
}
