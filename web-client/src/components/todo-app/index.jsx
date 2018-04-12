import React from 'react';
import { TodoList } from '../todo-list';
import { Description } from '../description';
import './index.scss';

export const TodoApp = () => (
  <div className="page-wrap">
    <TodoList />
    <Description />
  </div>
);

