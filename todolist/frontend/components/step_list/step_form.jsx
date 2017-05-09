import React, { Component} from 'react';

import uniqueId from '../../util/utils';

class StepForm extends Component {
  constructor(props) {
    super(props);

    this.state = {title: '', body: ''};
    this.changeTitle = this.changeTitle.bind(this);
    this.changeBody = this.changeBody.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changeTitle(e){
    e.preventDefault();
    this.setState({title: e.target.value});
  }

  changeBody(e){
    e.preventDefault();
    this.setState({body: e.target.value});
  }

  submitForm(e){
    e.preventDefault();

    const newStep = {
      id: uniqueId(),
      todo_id: this.props.todoId,
      title: this.state.title,
      body: this.state.body,
      done: false

    };
    console.log(newStep);
    this.props.receiveStep(newStep);
    this.setState({title: '', body: ''});

  }

  render() {
    return (
      <form>
        <label>Title:
          <input type="text" onChange={this.changeTitle} value={this.state.title} />
        </label>
        <label>Body:
          <input type="text" onChange={this.changeBody} value={this.state.body} />
        </label>
        <button type="submit" onClick={this.submitForm}>Create step!</button>
      </form>
    );
  }
}

export default StepForm;
