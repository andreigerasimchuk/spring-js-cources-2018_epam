import React, { Component } from 'react';
import './index.scss';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.descriptionInput = React.createRef();
    this.state = {
      titleIsEmpty: false,
    };
  }
  onAddingItem = (event) => {
    event.preventDefault();
    const title = this.titleInput.current.value;
    const description = this.descriptionInput.current.value;

    if (!title.trim().length) {
      this.setState({ titleIsEmpty: true });
    } else {
      this.setState({ titleIsEmpty: false });
      this.titleInput.current.value = '';
      this.descriptionInput.current.value = '';
      this.props.handleAddingItem({ title, description });
    }
  }
  render() {
    return (
      <div className="todo-add-wrap">
        <form className="todo-add" onSubmit={this.onAddingItem}>
          <div className="todo-add_inputs">
            <input
              className="todo-add_input input"
              ref={this.titleInput}
              placeholder="Please enter some title ..."
            />
            <textarea
              className="todo-add_textarea textarea"
              ref={this.descriptionInput}
              placeholder="And do not forget about the description ... "
            />
            { this.state.titleIsEmpty && <div className="todo-add_error" >Error. Title is empty.</div> }
          </div>
          <button type="submit" className="todo-add_btn btn">add</button>
        </form>
      </div>
    );
  }
}

export default AddForm;
