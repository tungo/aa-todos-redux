import React, { Component } from 'react';

import StepForm from './step_form';
import StepListItemContainer from './step_list_item_container';

class StepList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchSteps(this.props.todoId);
  }

  render() {
    const stepItems = this.props.steps.map((step, idx) => {
      return <StepListItemContainer key={idx} item={step} todoId ={this.props.todoId} />;
    });
    return (
      <div>
        <ul>
          {stepItems}
        </ul>
        <h3> Add Step</h3>
        <StepForm receiveStep={this.props.receiveStep} todoId={this.props.todoId} />
      </div>
    );
  }
}

export default StepList;
