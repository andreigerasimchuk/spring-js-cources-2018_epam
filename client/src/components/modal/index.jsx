import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.scss';

export class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="madal-title">
          <div className="madal-title__close-button" onClick={this.props.onClose}>
            <i className="fas fa-window-close" />
          </div>
        </div>
        <div className="modal-content">
          {this.props.children}
        </div>
      </div>,
      document.getElementById('react-root'),
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};
