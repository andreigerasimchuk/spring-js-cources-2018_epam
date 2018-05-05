import React from 'react';
import Item from '../item';
import './index.scss';

const List = ({ list }) => (
  <ul className="list" >
    {list.map(item => (
      <Item
        key={item.id}
        {...item}
      />
    ))}
  </ul>
);

export default List;
