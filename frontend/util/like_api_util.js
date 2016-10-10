export const total = (likeable, success, error) => {
  const { like_type, id } = likeable;
  const path = `/api/${like_type.toLowerCase() + "s"}/${id}/likes/total`;
  $.ajax({
    method: "GET",
    url: path,
    success,
    error,
    data: {
      like: {
        likeable_type: like_type,
        likeable_id: id
      }
    }
  });
};

export const count = (likeable, success, error) => {
  const { like_type, id } = likeable;
  const path = `/api/${like_type.toLowerCase() + "s"}/${id}/likes/count`;

  $.ajax({
    method: "GET",
    url: path,
    success,
    error,
    data: {
      like: {
        likeable_type: like_type,
        likeable_id: id
      }
    }
  });
};

export const newLike = (like, success, error) => {
  $.ajax({
    method: "POST",
    url: `/api/likes/`,
    success,
    error,
    data: { like }
  });
};

export const destroyLike = (id, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/likes/${id}`,
    success,
    error
  });
};
