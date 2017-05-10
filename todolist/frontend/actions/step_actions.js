export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

import { receiveErrors, clearErrors } from './error_actions';
import { requestSteps, postStep, patchStep, deleteStep } from '../util/step_api_util';

export const receiveSteps = (steps) => {
  return {
    type: RECEIVE_STEPS,
    steps
  };
};

export const receiveStep = (step) => {
  return {
    type: RECEIVE_STEP,
    step
  };
};

export const removeStep = (id) => {
  return {
    type: REMOVE_STEP,
    id
  };
};

export const fetchSteps = (todoId) => dispatch => {
  requestSteps(todoId).then((response) => dispatch(receiveSteps(response)));
};

export const createStep = (step) => dispatch => (
  postStep(step).then(
    response => dispatch(receiveStep(response)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const updateStep = (step) => dispatch => (
  patchStep(step).then(
    response => dispatch(receiveStep(response)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const destroyStep = (todoId, id) => dispatch => (
  deleteStep(todoId, id).then(
    response => dispatch(removeStep(response.id)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);
