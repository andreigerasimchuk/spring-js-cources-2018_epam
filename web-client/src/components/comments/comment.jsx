import React, { Component } from 'react';

class Comment extends Component {
  onClickRemove = () => {
    this.props.handleRemovingComment(this.props.todoId, this.props.id);
  }
  render() {
    return (
      <div>
        <div className="comments-title">
          {this.props.title}
        </div>
        <span onClick={this.onClickRemove}>
          <i className="far fa-trash-alt" />
        </span>
      </div>
    );
  }
}

export default Comment;
