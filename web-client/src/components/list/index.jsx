import React from 'react';
import Item from '../item';
import Stub from '../stub';
import './index.scss';

const List = ({ list }) => {
  const todoList = (
    <ul className="list" >
      {list.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );

  return list.length ? todoList : <Stub text="No todos" />;
};

export default List;
