import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from '../modal';
import './index.scss';

class TodoAdd extends PureComponent {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.descriptionInput = React.createRef();
    this.state = {
      isModalOpen: false,
    };
  }
  toggleModal = () => {
    this.setState(state => ({ isModalOpen: !state.isModalOpen }));
  };
  handleClick = () => {
    const { addItem } = this.props;
    const title = this.titleInput.current.value;
    const description = this.descriptionInput.current.value;
    addItem({ title, description });
    this.toggleModal();
  };
  render() {
    return (
      <div className="todo-add">
        <div className="todo-add__btn" onClick={this.toggleModal}>
          <i className="fas fa-plus-square" />
        </div>
        {this.state.isModalOpen &&
        <Modal onClose={this.toggleModal}>
          <div className="todo-add__modal">
            <input
              className="todo-add__title"
              ref={this.titleInput}
            />
            <textarea
              className="todo-add__description"
              ref={this.descriptionInput}
            />
            <button
              className="todo-add__btn"
              onClick={this.handleClick}
            >
              add
            </button>
          </div>
        </Modal>}
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    addItem: (item) => {
      dispatch({ type: 'ADD_ITEM', item });
    },
  }),
)(TodoAdd);

TodoAdd.propTypes = {
  addItem: PropTypes.func,
};
