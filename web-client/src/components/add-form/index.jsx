import React, { Component } from 'react';
import './index.scss';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.descriptionInput = React.createRef();
  }
  onAddingItem = (event) => {
    event.preventDefault();
    const title = this.titleInput.current.value;
    const description = this.descriptionInput.current.value;

    this.titleInput.current.value = '';
    this.descriptionInput.current.value = '';

    this.props.handleAddingItem({ title, description });
  }
  render() {
    return (
      <div className="todo-add-wrap">
        <form className="todo-add" onSubmit={this.onAddingItem}>
          <input ref={this.titleInput} />
          <textarea ref={this.descriptionInput} />
          <button type="submit">add</button>
        </form>
      </div>
    );
  }
}

export default AddForm;
