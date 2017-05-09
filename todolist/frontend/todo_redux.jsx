import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import { allTodos } from './reducers/selectors';
import { fetchTodos } from './actions/todo_actions';

import Root from './components/root';

const store = configureStore();

window.store = store;
window.fetchTodos = fetchTodos;

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  ReactDOM.render(<Root store={store}/>, content);
});
