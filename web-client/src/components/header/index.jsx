import React from 'react';
import './index.scss';

export const Header = () => (
  <div className="header">
    <p className="header__add-todo">
      <i id="plus" className="fas fa-plus-circle header-plus" />
      <label htmlFor="plus" className="header-label">add todo</label>
    </p>
  </div>
);
