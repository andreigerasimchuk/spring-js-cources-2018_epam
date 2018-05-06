import React, { Component } from 'react';

class Comment extends Component {
  onClickRemove = () => {
    this.props.handleRemovingComment(this.props.todoId, this.props.id);
  }
  render() {
    return (
      <div className="comments-list_item">
        <div className="comments-list_item-title">
          {this.props.title}
        </div>
        <div className="comments-list_item-utils">
          <div className="item-utils_date">
            {this.props.date}
          </div>
          <span onClick={this.onClickRemove} className="item-utils_icon">
            <i className="fas fa-trash" />
          </span>
        </div>
      </div>
    );
  }
}

export default Comment;
