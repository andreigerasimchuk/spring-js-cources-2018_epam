import React, { Component } from 'react';
import List from '../components/list';
import AddForm from '../components/add-form';

import { TodosListService } from '../services';

export class ListContainer extends Component {
  handleAddingItem = (data) => {
    this.props.todosListService.createTodoItem(data);
  };

  handleRemovingItem = (id) => {
    this.props.todosListService.removeTodoItem(id);
  };

  render() {
    return (
      <div>
        <AddForm handleAddingItem={this.handleAddingItem} />
        <List
          list={this.props.list}
          handleRemovingItem={this.handleRemovingItem}
        />
      </div>
    );
  }
}
