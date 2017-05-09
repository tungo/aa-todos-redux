import React, { Component } from 'react';

class StepList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stepItems = this.props.steps.map((step, idx) => {
      return <StepListItemContainer key={idx} item={step} todoid ={this.props.todo_id} />;
    });
    return (
      <div>
        <ul>
          {stepItems}
        </ul>
        <StepForm />
      </div>
    );
  }
}

export default StepList;
