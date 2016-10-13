export const newLike = (like, success, error, isAsync = true) => {
  $.ajax({
    method: "POST",
    url: `/api/likes/`,
    success,
    error,
    data: { like },
    async: isAsync
  });
};

export const destroyLike = (id, success, error, isAsync = true) => {
  $.ajax({
    method: "DELETE",
    url: `/api/likes/${id}`,
    success,
    error,
    async: isAsync
  });
};
