import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { TodoList } from '../todo-list';
import Description from '../description';
import { Footer } from '../footer';
import { Header } from '../header';
import './index.scss';

class TodoApp extends Component {
  static propTypes = {
    list: PropTypes.arrayOf,
  }

  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        <Header />
        <div className="page-wrap">
          <TodoList list={list} />
          <Description />
        </div>
        <Footer author="by Andrei Gerasimcuk" company="EPAM 2018" />
      </div>
    );
  }
}

export default connect(
  state => ({
    list: state.list,
  }),
  dispatch => ({
    addTitle: (title, description) => {
      const item = { title, description };
      dispatch({ type: 'ADD', item });
    },
  }),
)(TodoApp);
