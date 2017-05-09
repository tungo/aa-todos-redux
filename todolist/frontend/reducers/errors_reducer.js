import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';
import { RECEIVE_TODO } from '../actions/todo_actions';

const errorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_TODO:
      return [];
    default:
      return state;
  }
};

export default errorsReducer;
