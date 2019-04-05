import React, { Component } from 'react';

import { Provider, connect } from 'react-redux';
import { getStoreForTodoApp } from 'Todo/store';
import { Todo, TodoNamespaceShape } from 'Todo/types';
import { map } from 'lodash';
import { getTodos } from 'Todo/selectors';

type TodoProps = Todo;
function TodoComponent({ title, description, deleted }: TodoProps) {
  return (
    <>
      <span>title: {title}</span>
      <span>description: {description}</span>
      <span>deleted: {deleted}</span>
    </>
  );
}

type TodosProps = { todos: Todo[] };
function Todos({ todos }: TodosProps) {
  return (
    <>
      {todos.map(todoProps => (
        <TodoComponent {...todoProps} />
      ))}
    </>
  );
}

const mapStateToProps = (state: TodoNamespaceShape) => ({ todos: map(getTodos(state)) });

const ConnectedWizards = connect<TodosProps, {}, {}>(mapStateToProps)(
  Todos
);

class App extends Component<{}> {
  render() {
    return (
      <Provider store={getStoreForTodoApp()}>
        <ConnectedWizards />
      </Provider>
    );
  };
}

export default App;