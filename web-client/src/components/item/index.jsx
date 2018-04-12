import React from 'react';
import './index.scss';

export const Item = () => (
  <div className="todo-list__item">
    <div className="todo-list__todo-title ">Lorem.</div>
    <div className="todo-list__todo-like ">
      <i className="far fa-thumbs-up" />
    </div>
    <div className="todo-list__todo-btn-remove ">
      <i className="fas fa-trash" />
    </div>
  </div>
);
