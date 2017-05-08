import React, { Component } from 'react';

import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo }) => {
  const items = todos.map((el) => (
    <TodoListItem key={el.id} item={el}/>
  ));
  return (
    <div>
      <ul>
        {items}
      </ul>
      <TodoForm receiveTodo={receiveTodo} />
    </div>
  );
};

export default TodoList;
