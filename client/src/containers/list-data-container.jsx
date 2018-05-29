import React, { Component } from 'react';
import { ListContainer } from './list-container';

import TodosListDAO from '../dao/TodosListDAO';
import { TodosListService, TodoService } from '../services';


export class ListDataContainer extends Component {
  state = {
    list: [],
  };

  componentWillMount() {
    this.todosListDAO = new TodosListDAO();
    this.todoService = new TodoService();
    this.todosListService = new TodosListService(this.todosListDAO, this.todoService);
  }

  componentDidMount() {
    this.todosListDAO.getAllTodos()
      .then((todos) => {
        this.setState({
          list: todos,
        });
      });

    this.unsubscribe = this.todosListDAO.subscribe((todos) => {
      this.setState({
        list: todos,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <ListContainer
        list={this.state.list}
        todosListService={this.todosListService}
      />
    );
  }
}
