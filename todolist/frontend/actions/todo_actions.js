export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

import { receiveErrors, clearErrors } from './error_actions';

import { requestTodos, postTodo, patchTodo, deleteTodo } from '../util/todo_api_util';

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id
  };
};

export const fetchTodos = () => dispatch => {
  requestTodos().then((response) => dispatch(receiveTodos(response)));
};

export const createTodo = (todo) => dispatch => (
  postTodo(todo).then(
    response => dispatch(receiveTodo(response)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const updateTodo = (todo) => dispatch => (
  patchTodo(todo).then(
    response => dispatch(receiveTodo(response)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const destroyTodo = (id) => dispatch => (
  deleteTodo(id).then(
    response => dispatch(removeTodo(response.id)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);
