import React, { Component } from 'react';
import './index.scss';

import Comments from '../../comments';
import Stub from '../../stub';

import { Context } from '../../../containers/context';

const ItemDescription = ({ id, description, comments }) => (
  <Context.Consumer>
    {context => (
      <div className="list__item-description" >
        <div className="item-description__content">
          { description || <Stub text="No description ..." /> }
        </div>
        <Comments
          id={id}
          comments={comments}
          handleCommentingItem={context.handleCommentingItem}
          handleRemovingComment={context.handleRemovingComment}
        />
      </div>
    )}
  </Context.Consumer>
);

export default ItemDescription;
