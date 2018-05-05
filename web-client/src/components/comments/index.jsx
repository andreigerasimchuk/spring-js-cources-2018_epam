import React, { Component } from 'react';
import Comment from './comment';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  onAddingComment = () => {
    const comment = this.input.current.value;
    this.input.current.value = '';

    this.props.handleCommentingItem(this.props.id, comment);
  }
  onClickRemove = () => {
    this.props.handleRemovingComment(this.props.id);
  }
  render() {
    return (
      <div className="item-description__comments">
        <div className="form-comments">
          <input className="form-comments__input" ref={this.input} />
          <button className="form-comments__btn" onClick={this.onAddingComment}>add</button>
        </div>
        <div className="comments">
          {this.props.comments.map(comment => (
            <Comment
              key={comment.id}
              todoId={this.props.id}
              id={comment.id}
              title={comment.title}
              handleRemovingComment={this.props.handleRemovingComment}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Comments;
