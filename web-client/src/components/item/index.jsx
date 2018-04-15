import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.scss';

class Item extends Component {
  static propTypes = {
    changeItem: PropTypes.func,
    item: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }

  render() {
    const { item } = this.props;

    this.handleChangeItem = () => {
      const { changeItem } = this.props;
      changeItem(item);
    };

    return (
      <div className="todo-list__item" onClick={this.handleChangeItem}>
        <div className="todo-list__todo-title ">{item.title}</div>
        <div className="todo-list__todo-like ">
          <i className="far fa-thumbs-up" />
        </div>
        <div className="todo-list__todo-btn-remove " >
          <i className="fas fa-trash" />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    item1: state.item,
  }),
  dispatch => ({
    changeItem: (item) => {
      dispatch({ type: 'CHANGE_ITEM', item });
    },
  }),
)(Item);
