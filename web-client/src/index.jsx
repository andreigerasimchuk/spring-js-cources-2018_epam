import React from 'react';
import ReactDOM from 'react-dom';
import { TodoApp } from './components/todo-app';
import './index.scss';

const App = () => (
  <div className="page">
    <TodoApp />
  </div>
);

ReactDOM.render(<App />, document.getElementById('react-root'));
