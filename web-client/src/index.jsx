'use super-mega-strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { redlist } from './reducers';
import TodoApp from './components/todo-app';
import './index.scss';

const store = createStore(
  redlist,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => (
  <div className="page">
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </div>
);

ReactDOM.render(<App />, document.getElementById('react-root'));
