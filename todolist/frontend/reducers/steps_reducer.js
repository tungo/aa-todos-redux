import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from "../actions/step_actions";

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);

  const newState = {};

  switch(action.type){
    case RECEIVE_STEPS:
      action.steps.forEach((el) => (newState[el.id] = el));
      return newState;

    case RECEIVE_STEP:
      Object.assign(newState, state);
      newState[action.step.id] = action.step;
      return newState;

    case REMOVE_STEP:
      Object.assign(newState, state);
      delete newState[action.id];
      return newState;

    default:
      return state;
  }
};

export default stepsReducer;
