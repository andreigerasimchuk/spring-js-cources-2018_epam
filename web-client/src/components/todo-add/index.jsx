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
  };
  render() {
    return (
      <div className="todo-add">
        <button onClick={this.toggleModal}>add</button>
        {this.state.isModalOpen &&
        <Modal onClose={this.toggleModal}>
          <div className="todo-add__modal">
            <input ref={this.titleInput} />
            <textarea ref={this.descriptionInput} />
            <button onClick={this.handleClick}>add</button>
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
