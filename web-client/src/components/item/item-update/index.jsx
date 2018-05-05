import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../modal';
import './index.scss';

export class ItemUpdate extends PureComponent {
  state = {
    title: '',
    description: '',
  };
  componentWillMount = () => {
    const { title, description } = this.props;
    this.setState({ title, description });
  }
  handleClick = () => {
    const { updateItem, id } = this.props;
    const { title, description } = this.state;
    const item = { title, description };
    this.props.updateItem(id, item);
    this.props.onClose();
  }
  render() {
    return (
      <Modal onClose={this.props.onClose}>
        <div className="item-update">
          <input
            className="item-update__title"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
          <textarea
            className="item-update__description"
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
          />
          <button
            className="item-update__save"
            onClick={this.handleClick}
          >
            save
          </button>
        </div>
      </Modal >
    );
  }
}

ItemUpdate.propTypes = {
  updateItem: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
