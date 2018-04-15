import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Add from '../todo-add';
import Item from '../item';
import './index.scss';

class Description extends Component {
  static propTypes = {
    addComment: PropTypes.func,
    item: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      comments: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })),
    }),
  }

  constructor(props) {
    super(props);
    this.commentInput = React.createRef();
  }

  render() {
    const { item } = this.props;
    const comments = item.comments.map(comment => (
      <Item item={comment} key={comment._id} />
    ));

    this.handleAddComment = () => {
      const { addComment } = this.props;
      const { value } = this.commentInput.current;
      this.commentInput.current.value = '';
      addComment(item._id, value);
    };

    return (
      <div className="todo-description">
        <Add />
        <div className="todo ">
          <div className="todo__view ">
            <div className="todo__view-title-wrap">
              <div className="todo__view-title ">
                {item.title}
              </div>
              <div className="list__todo-like ">
                <i className="far fa-thumbs-up" />
              </div>
              <div className="list__todo-btn-update">
                <i className="fas fa-pencil-alt" />
              </div>
              <div className="list__todo-btn-remove ">
                <i className="fas fa-trash" />
              </div>
            </div>
            <div className="todo__view-description ">
              <p>{item.description}</p>
            </div>
            <div className="todo__comments ">
              <input
                id="comment"
                className="input todo__comments-input "
                placeholder="Add new comment:"
                ref={this.commentInput}
              />
              <button className="btn todo__comments-btn " onClick={this.handleAddComment}>send</button>
            </div>
            <ul className="todo__view-comments ">
              Comments:
              {comments}
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default connect(
  state => ({
    item: state.item,
  }),
  dispatch => ({
    addComment: (_id, comment) => {
      const obj = { _id, comment };
      dispatch({ type: 'ADD_COMMENT', obj });
    },
  }),
)(Description);
