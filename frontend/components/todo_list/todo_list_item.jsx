import React, { Component } from 'react';

class TodoListItem extends Component {
  constructor(props){
    super(props);
    // this.state = {done: this.props.item.done};

    this.updateTodo = this.updateTodo.bind(this);
  }

  updateTodo(e){
    e.preventDefault();
    let newTodo = Object.assign({},this.props.item);
    newTodo.done = !this.props.item.done;
    this.props.receiveTodo(newTodo);

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
