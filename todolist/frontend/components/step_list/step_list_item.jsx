import React, { Component } from 'react';

class StepListItem extends Component {
  constructor(props){
    super(props);

    this.updateStep = this.updateStep.bind(this);
    this.deleteStep = this.deleteStep.bind(this);
  }

  updateStep(e) {
    e.preventDefault();

    let newStep = Object.assign(
      {},
      this.props.item,
      {done: !this.props.item.done}
    );

    this.props.receiveStep(newStep);
  }

  deleteStep(e) {
    e.preventDefault();
    this.props.removeStep(this.props.item.id);
  }

  render(){
    return (
      <li>
        <h3> {this.props.item.title} </h3>
        <p>{this.props.item.body}</p>
        <button onClick ={this.updateStep}> {this.props.item.done ? "UNDO" : "DONE"}</button>
        <button onClick={this.deleteStep}>Delete Step</button>
      </li>
    );
  }
}

export default StepListItem;
