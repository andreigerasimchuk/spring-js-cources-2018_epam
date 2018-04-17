import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.scss';

export class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className="modal">
        <button className="modal__close-button" onClick={this.props.onClose}>Закрыть</button>
        {this.props.children}
      </div>,
      document.getElementById('react-root'),
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};
