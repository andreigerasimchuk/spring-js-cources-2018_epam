import React, { Component } from 'react';
import { ItemUpdate } from '../item-update';
import './index.scss';

class ItemTitle extends Component {
  removeItem = () => {
    this.props.handleRemovingItem(this.props.id);
  }
  likeItem = () => {
    this.props.handleLikingItem(this.props.id);
  }
  updateItem = () => {
    this.props.handleOnUpdate();
  }
  render() {
    return (
      <div className="list__item-title" >
        <div className="item-title__header">
          <div className="item-title__header-left">
            {this.props.title}
          </div>
          <div className="item-title__header-right">
            <span onClick={this.updateItem} className="icon">
              <i className="fas fa-pencil-alt" />
            </span>
            <span onClick={this.likeItem} className={`${this.props.isLiked && 'like'}`} >
              <i className="fas fa-heart" />
            </span>
            <span onClick={this.removeItem}>
              <i className="fas fa-trash" />
            </span>
          </div>
        </div>
        <div className="item-title__footer">
          <div>
            Create: {this.props.createdDate}
          </div>
          <div>
            Update: {this.props.lastUpdateDate}
          </div>
        </div>
      </div>
    );
  }
}

export default ItemTitle;
