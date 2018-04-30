import React, { Component } from 'react';
import './index.scss';

class ItemTitle extends Component {
  removeItem = () => {
    this.props.handleRemovingItem(this.props.id);
  }
  render() {
    return (
      <div className="item__title" >
        <div className="item__title-header">
          {this.props.title}
        </div>
        <div className="item-title-footer">
          {Date()}
        </div>
        <button onClick={this.removeItem}>remove</button>
      </div>);
  }
}

export default ItemTitle;
