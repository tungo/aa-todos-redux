import React, { Component } from 'react';

import TodoDetailViewContainer from './todo_detail_view_container';

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
        <button onClick ={this.updateTodo}> {this.props.item.done ? "UNDO" : "DONE"}</button>
        <TodoDetailViewContainer item={this.props.item} />
      </li>
    );
  }
}

export default TodoListItem;
