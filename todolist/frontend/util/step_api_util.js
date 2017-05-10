export const requestSteps = (todoId) => (
  $.ajax({
    method: "GET",
    url: `/api/todos/${todoId}/steps`
  })
);

export const postStep = (step) => (
  $.ajax({
    method: "POST",
    url: `/api/todos/${step.todoId}/steps`,
    data: step
  })
);

export const patchStep = (step) => (
  $.ajax({
    method: "PATCH",
    url: `/api/todos/${step.step.todoId}/steps/${step.step.id}`,
    data: step
  })
);

export const deleteStep = (todoId, id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/todos/${todoId}/steps/${id}`
  })
);
