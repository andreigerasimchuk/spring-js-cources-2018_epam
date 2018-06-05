import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../modal';
import './index.scss';

export class ItemUpdate extends PureComponent {
  state = {
    title: '',
    description: '',
    titleIsEmpty: false,
  };
  componentWillMount = () => {
    const { title, description } = this.props;
    this.setState({ title, description });
  }
  handleClick = () => {
    const { updateItem, id } = this.props;
    const { title, description } = this.state;
    if (!title) {
      this.setState({ titleIsEmpty: true });
    } else {
      this.setState({ titleIsEmpty: false });
      const item = { title, description };
      this.props.updateItem(id, item);
      this.props.onClose();
    }
  }
  render() {
    return (
      <Modal onClose={this.props.onClose}>
        <div className="item-update">
          <input
            className="item-update__title input"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
          <textarea
            className="item-update__description textarea"
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
          />
          { this.state.titleIsEmpty
            && <div className="item-update_error" >Error. Title is empty.</div> }
          <button
            className="item-update__save btn"
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
