import React, { Component } from 'react';

import TodoListItem from './todo_list_item';

const TodoList = ({ todos, receiveTodo }) => {
  const items = todos.map((el) => (
    <TodoListItem key={el.id} item={el}/>
  ));
  return (
    <ul>
      {items}
    </ul>
  );
};

export default TodoList;
