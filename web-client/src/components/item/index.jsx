import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export class Item extends PureComponent {
  state = { isOpen: false };
  handleOnClickOpen = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };
  render() {
    const {
      title,
      description,
      date,
    } = this.props.item;
    return (
      <div className="todo-item">
        <div className="todo-item__header">
          {title}
        </div>
        <div className="todo-item__footer">
          <div>{date}</div>
          <button onClick={this.handleOnClickOpen}>развернуть</button>
        </div>
        {this.state.isOpen && (
          <div className="todo-item__description">
            {description}
          </div>
        )}
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
  }),
};
