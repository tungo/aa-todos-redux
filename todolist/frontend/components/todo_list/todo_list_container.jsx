import { connect } from 'react-redux';

import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { createTodo, removeTodo, fetchTodos, updateTodo } from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  removeTodo: (id) => dispatch(removeTodo(id)),
  updateTodo: (todo) => dispatch(updateTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
