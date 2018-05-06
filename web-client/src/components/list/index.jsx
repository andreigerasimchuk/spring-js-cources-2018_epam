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

  return list.length ? todoList : <div className="list-stub__wrap"><Stub text="No todos" /></div>;
};

export default List;
