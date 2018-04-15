import React from 'react';
import PropTypes from 'prop-types';
import Item from '../item';
import './index.scss';

export const TodoList = ({ list }) => {
  const items = list.map(item => <Item key={item._id} item={item} />);

  return (
    <div className="todo-list">
      {items}
    </div>
  );
};

TodoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })),
  })),
};
