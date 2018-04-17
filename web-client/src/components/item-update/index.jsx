import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.scss';
import { Modal } from '../modal';

class ItemUpdate extends PureComponent {
  state = {
    isOpen: false,
    title: '',
    description: '',
  };
  componentWillMount = () => {
    const { title, description } = this.props;
    this.setState({ title, description });
  }
  handleOnUpdate = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };
  handleClick = () => {
    const { updateItem, _id } = this.props;
    const { title, description } = this.state;
    const item = { _id, title, description };
    updateItem(item);
    this.handleOnUpdate();
  }
  render() {
    return (
      <div>
        <div
          className="todo-item__header-update"
          onClick={this.handleOnUpdate}
        >
          <i className="fas fa-pencil-alt" />
        </div>
        {this.state.isOpen &&
          <Modal onClose={this.handleOnUpdate}>
            <input
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
            />
            <textarea
              value={this.state.description}
              onChange={e => this.setState({ description: e.target.value })}
            />
            <button onClick={this.handleClick}>save</button>
          </Modal >}
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    updateItem: (item) => {
      dispatch({ type: 'UPDATE_ITEM', item });
    },
  }),
)(ItemUpdate);

ItemUpdate.propTypes = {
  updateItem: PropTypes.func,
  _id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
