import React, { Component } from 'react';

import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchTodos();
  }
  render(){
    const items = this.props.todos.map((el) => (
      <TodoListItem key={el.id} item={el} receiveTodo={this.props.receiveTodo} removeTodo={this.props.removeTodo}/>
    ));
    return (
      <div>
        <ul>
          {items}
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo} />
      </div>
    );
  }
}

export default TodoList;
