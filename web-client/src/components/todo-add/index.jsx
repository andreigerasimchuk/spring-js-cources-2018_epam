import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TodoAdd extends PureComponent {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.descriptionInput = React.createRef();
  }
  handleClick = () => {
    const { addItem } = this.props;
    const title = this.titleInput.current.value;
    const description = this.descriptionInput.current.value;
    addItem({ title, description });
  };
  render() {
    return (
      <div className="todo-add">
        todo add // todo
        <input ref={this.titleInput} />
        <textarea ref={this.descriptionInput} />
        <button onClick={this.handleClick}>add</button>
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
