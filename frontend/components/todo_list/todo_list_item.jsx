import React, { Component } from 'react';

const TodoListItem = (props) => {
  console.log(props);
  return (
    <li>{props.item.title}</li>
  );
};

export default TodoListItem;
