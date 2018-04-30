import React from 'react';
import Item from '../item';

const List = ({ list, handleRemovingItem }) => (
  <ul className="todo-list" >
    {list.map(item => (
      <Item
        handleRemovingItem={handleRemovingItem}
        key={item.id}
        {...item}
      />
    ))}
  </ul>
);

export default List;
