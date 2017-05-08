import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import allTodos from './reducers/selectors';

const store = configureStore();
window.store = store;

window.allTodos = allTodos(store.getState());

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  ReactDOM.render(<h1>ToDos App</h1>, content);
});
