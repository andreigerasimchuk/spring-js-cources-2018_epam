import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Item } from '../item';
import TodoAdd from '../todo-add';
import './index.scss';

export class TodoContainer extends PureComponent {
  render() {
    const { list } = this.props;
    const items = list.map(item => <Item key={item._id} item={item} />);
    return (
      <div className="todo-wrap">
        <TodoAdd />
        <div className="todo-list">
          {items}
        </div>
      </div>
    );
  }
}

TodoContainer.propTypes = {
  list: PropTypes.arrayOf, // todo
};

export default connect(state => ({
  list: state,
}))(TodoContainer);

