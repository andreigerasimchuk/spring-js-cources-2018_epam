import React, { Component } from 'react';
import Comment from './comment';
import './index.scss';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      titleCommentIsEmpty: false,
    };
  }
  onAddingComment = () => {
    const comment = this.input.current.value;

    if (!comment) {
      this.setState({ titleCommentIsEmpty: true });
    } else {
      this.input.current.value = '';
      this.setState({ titleCommentIsEmpty: false });
      this.props.handleCommentingItem(this.props.id, comment);
    }
  }
  onClickRemove = () => {
    this.props.handleRemovingComment(this.props.id);
  }
  render() {
    return (
      <div className="item-comments">
        <div className="item-comments_form">
          <input
            className="comments_form__input input"
            placeholder="Do you want to comment?"
            ref={this.input}
          />
          <button className="form-comments__btn btn" onClick={this.onAddingComment}>add</button>
        </div>
        { this.state.titleCommentIsEmpty
          && <div className="comments_form_error" >Error. The comment text is empty.</div> }
        <div className="comments-list">
          {this.props.comments.map(comment => (
            <Comment
              key={comment.id}
              todoId={this.props.id}
              date={comment.date}
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
