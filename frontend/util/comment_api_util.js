export const newComment = (comment, success, error) => {
  $.ajax({
    method: "POST",
    url: "/api/comments",
    data: { comment },
    success,
    error
  });
};

export const getComment = (id, success, error) => {
  $.ajax({
    method: "GET",
    url: `/api/comments/${id}`,
    success,
    error
  });
};

export const editComment = (comment, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `/api/comments/${comment.id}`,
    data: { comment },
    success,
    error
  });
};

export const destroyComment = (id, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/comments/${id}`,
    success,
    error
  });
};
