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
      <div className="test-wrap" >
        <div className="test">
          <Context.Provider value={{
            handleRemovingItem: this.handleRemovingItem,
            handleLikingItem: this.handleLikingItem,
            handleUpdatingItem: this.handleUpdatingItem,
            handleCommentingItem: this.handleCommentingItem,
            handleRemovingComment: this.handleRemovingComment,
          }}
          >
            <List list={this.props.list} />
            <AddForm handleAddingItem={this.handleAddingItem} />
          </Context.Provider>
        </div>
      </div>
    );
  }
}
