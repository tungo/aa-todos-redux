import { connect } from 'react-redux';

import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { createTodo, removeTodo, fetchTodos } from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  removeTodo: (id) => dispatch(removeTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
