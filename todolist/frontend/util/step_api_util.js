export const requestSteps = () => (
  $.ajax({
    method: "GET",
    url: "/api/steps"
  })
);

export const postStep = (step) => (
  $.ajax({
    method: "POST",
    url: "/api/steps",
    data: step
  })
);

export const patchStep = (step) => (
  $.ajax({
    method: "PATCH",
    url: `/api/steps/${step.step.id}`,
    data: step
  })
);

export const deleteStep = (id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/steps/${id}`
  })
);
