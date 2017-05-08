import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

const store = configureStore();
window.store = store;

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  ReactDOM.render(<h1>ToDos App</h1>, content);
});
