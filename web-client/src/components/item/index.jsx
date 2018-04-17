import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ItemDescription from '../item-description';
import './index.scss';
import { Modal } from '../modal';

class Item extends PureComponent {
  state = {
    isOpen: false,
    isUpdate: false,
  };
  handleOnClickOpen = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };
  handleOnDelete = () => {
    const { deleteItem, item } = this.props;
    deleteItem(item._id);
  }
  handleOnLike = () => {
    const { likeItem, item } = this.props;
    likeItem(item._id);
  }
  handleOnDone = () => {
    const { complitedItem, item } = this.props;
    complitedItem(item._id);
  }
  handleOnUpdate = () => {
    this.setState(state => ({ isUpdate: !state.isUpdate }));
  }
  render() {
    const {
      title,
      description,
      date,
      isLike,
      complited,
      comments,
      _id,
    } = this.props.item;
    console.log(isLike);
    const itemComments = comments.map(comment => <div key={comment._id}>{comment.title}</div>);
    return (
      <div className="todo-item">
        <div className="todo-item__header">
          <div
            className={`todo-item__header-done ${complited && 'todo-item__header-done--active'}`}
            onClick={this.handleOnDone}
          >
            <i className="fas fa-check-circle" />
          </div>
          <div className="todo-item__header-title">{title}</div>
          <div
            className={`todo-item__header-like ${isLike && 'todo-item__header-like--active'}`}
            onClick={this.handleOnLike}
          >
            <i className="far fa-thumbs-up" />
          </div>
          <div
            className="todo-item__header-update"
            onClick={this.handleOnUpdate}
          >
            <i className="fas fa-pencil-alt" />
          </div>
          <div className="todo-item__header-remove" onClick={this.handleOnDelete}>
            <i className="fas fa-trash" />
          </div>
        </div>
        <div className="todo-item__footer">
          <div>{date}</div>
          <button onClick={this.handleOnClickOpen}>развернуть</button>
        </div>
        {this.state.isOpen &&
          <ItemDescription _id={_id} description={description} comments={comments} />}
        {this.state.isUpdate &&
          <Modal onClose={this.handleOnUpdate}>
            test
          </Modal >}
      </div>
    );
  }
}

Item.propTypes = {
  deleteItem: PropTypes.func,
  likeItem: PropTypes.func,
  complitedItem: PropTypes.func,
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    _id: PropTypes.string,
    isLike: PropTypes.bool,
    complited: PropTypes.bool,
    comments: PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
};

export default connect(
  state => ({}),
  dispatch => ({
    deleteItem: (_id) => {
      dispatch({ type: 'DELETE_ITEM', _id });
    },
    likeItem: (_id) => {
      dispatch({ type: 'LIKE_ITEM', _id });
    },
    complitedItem: (_id) => {
      dispatch({ type: 'COMPLITED_ITEM', _id });
    },
  }),
)(Item);
