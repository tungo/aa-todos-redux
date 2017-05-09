export const requestTodos = () => (
  $.ajax({
    method: "GET",
    url: "/api/todos"
  })
);

export const postTodo = (todo) => (
  $.ajax({
    method: "POST",
    url: "/api/todos",
    data: todo
  })
);
