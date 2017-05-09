import React, { Component } from "react";

import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.hidden){
      return (
        <div></div>
      );
    }
    return (
      <div>
        <p>{this.props.item.body}</p>
        <StepListContainer todoId={this.props.item.id} />
        <button onClick={() => this.props.destroyTodo(this.props.item.id)}>Delete Todo</button>
      </div>
    );
  }
}

export default TodoDetailView;
