import React from 'react';
import ItemTitle from './item-title';
import ItemDescription from './item-description';

const Item = ({
  title, description, handleRemovingItem, id,
}) => (
  <li className="todo-list" >
    <ItemTitle title={title} handleRemovingItem={handleRemovingItem} id={id} />
    <ItemDescription description={description} />
  </li>
);

export default Item;
