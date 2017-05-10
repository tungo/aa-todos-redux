import { connect } from 'react-redux';

import { stepsByTodoId } from '../../reducers/selectors';
import { receiveStep, fetchSteps } from '../../actions/step_actions';

import StepList from './step_list';

const mapStateToProps = (state, { todoId }) => ({
  steps: stepsByTodoId(state, todoId),
  todoId
});

const mapDispatchToProps = (dispatch) => ({
  receiveStep: (step) => dispatch(receiveStep(step)),
  fetchSteps: (todoId) => dispatch(fetchSteps(todoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
