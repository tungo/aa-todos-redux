import { connect } from 'react-redux';

import { destroyTodo } from '../../actions/todo_actions';
import { receiveSteps } from '../../actions/step_actions';

import TodoDetailView from './todo_detail_view';

const mapDispatchToProps = (dispatch) => ({
  destroyTodo: (id) => dispatch(destroyTodo(id)),
  receiveSteps: (steps) => dispatch(receiveSteps(steps))
});

export default connect(null, mapDispatchToProps)(TodoDetailView);
