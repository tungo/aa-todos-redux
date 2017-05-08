import React, { Component } from 'react';

class TodoListItem extends Component {
  constructor(props){
    super(props);
    this.updateTodo = this.updateTodo.bind(this);
  }

  updateTodo(e){
    e.preventDefault();
    this.props.item.done = !this.props.item.done;
    this.props.receiveTodo(this.props.item);
  }

  render(){
    return (
      <li>
        {this.props.item.title}
        <button onClick ={ this.updateTodo }> {this.props.item.done ? "UNDO" : "DONE"}</button>
        <button onClick={() => this.props.removeTodo(this.props.item.id)}>Delete Todo</button>
      </li>
    );
  }
}

export default TodoListItem;
