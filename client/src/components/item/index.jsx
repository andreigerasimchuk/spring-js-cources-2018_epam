import React, { Component } from 'react';
import ItemTitle from './item-title';
import ItemDescription from './item-description';
import { ItemUpdate } from '../item/item-update';

import { Context } from '../../containers/context';

class Item extends Component {
  state = {
    isUpdating: false,
  }
  handleOnUpdate = () => {
    this.setState(({ isUpdating }) => ({ isUpdating: !isUpdating }));
  };
  render() {
    const {
      _id,
      title,
      description,
      isLiked,
      comments,
      isCompleted,
      createdDate,
      lastUpdateDate,
    } = this.props;
    return (
      <Context.Consumer>
        {context => (
          <li className="list__item" >
            <ItemTitle
              id={_id}
              title={title}
              isLiked={isLiked}
              isCompleted={isCompleted}
              createdDate={createdDate}
              lastUpdateDate={lastUpdateDate}
              handleOnUpdate={this.handleOnUpdate}
              handleLikingItem={context.handleLikingItem}
              handleRemovingItem={context.handleRemovingItem}
              handleCompletingItem={context.handleCompletingItem}
            />
            <ItemDescription
              id={_id}
              comments={comments}
              description={description}
            />
            {this.state.isUpdating &&
              <ItemUpdate
                id={_id}
                title={title}
                description={description}
                onClose={this.handleOnUpdate}
                updateItem={context.handleUpdatingItem}
              />}
          </li>
        )}
      </Context.Consumer>
    );
  }
}

export default Item;
