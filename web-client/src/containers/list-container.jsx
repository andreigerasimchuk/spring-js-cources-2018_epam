import React, { Component } from 'react';
import List from '../components/list';
import AddForm from '../components/add-form';

import { TodosListService } from '../services';

import { Context } from './context';

export class ListContainer extends Component {
  handleAddingItem = (data) => {
    this.props.todosListService.createTodoItem(data);
  };

  handleRemovingItem = (id) => {
    this.props.todosListService.removeTodoItem(id);
  };

  handleCommentingItem = (id, comment) => {
    this.props.todosListService.commentingItem(id, comment);
  };

  handleLikingItem = (id) => {
    this.props.todosListService.likingItem(id);
  };

  handleRemovingComment = (id, commentId) => {
    this.props.todosListService.removeComment(id, commentId);
  };

  handleUpdatingItem = (id, data) => {
    this.props.todosListService.updatingItem(id, data);
  };

  render() {
    return (
      <div>
        <Context.Provider value={{
          handleRemovingItem: this.handleRemovingItem,
          handleLikingItem: this.handleLikingItem,
          handleUpdatingItem: this.handleUpdatingItem,
          handleCommentingItem: this.handleCommentingItem,
          handleRemovingComment: this.handleRemovingComment,
        }}
        >
          <AddForm handleAddingItem={this.handleAddingItem} />
          {this.props.list.length ? <List list={this.props.list} /> : <p>no todos</p>}
        </Context.Provider>
      </div>
    );
  }
}
