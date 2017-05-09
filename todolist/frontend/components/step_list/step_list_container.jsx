import { connect } from 'react-redux';

import { stepsByTodoId } from '../../reducers/selectors';
import { receiveStep } from '../../actions/step_actions';

import StepList from './step_list';

const mapStateToProps = (state, { todoId }) => ({
  steps: stepsByTodoId(state, todoId),
  todoId
});

const mapDispatchToProps = (dispatch) => ({
  receiveStep: (step) => dispatch(receiveStep(step))
});

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
