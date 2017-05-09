import { connect } from 'redux';
import StepListItem from './StepListItem';

import { removeStep, receiveStep } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch) => ( {
  receiveStep: dispatch(receiveStep()),
  removeStep: dispatch(removeStep())
  }
);

export default connect(null, mapDispatchToProps)(StepListItem);
