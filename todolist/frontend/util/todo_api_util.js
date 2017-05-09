export const requestTodos = () => (
  $.ajax({
    method: "GET",
    url: "/api/todos"
  })
);
