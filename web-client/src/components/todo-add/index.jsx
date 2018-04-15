import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.scss';

class Add extends Component {
  static propTypes = {
    addTitle: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.descriptionInput = React.createRef();
  }

  render() {
    this.handleClick = () => {
      const { addTitle } = this.props;
      const title = this.titleInput.current.value;
      const description = this.descriptionInput.current.value;

      addTitle(title, description);

      this.titleInput.current.value = '';
      this.descriptionInput.current.value = '';
    };

    return (
      <div>
        <input ref={this.titleInput} />
        <textarea ref={this.descriptionInput} />
        <button onClick={this.handleClick}>add</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    list: state,
  }),
  dispatch => ({
    addTitle: (title, description) => {
      const item = { title, description };
      dispatch({ type: 'ADD', item });
    },
  }),
)(Add);
