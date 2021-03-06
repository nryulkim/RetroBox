export const fetchAllVideos = (success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/videos",
    data: {query: "%"},
    success,
    error
  });
};

export const fetchSomeVideos = (filter, success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/videos",
    data: filter,
    success,
    error
  });
};

export const newVideo = (video, success, error) => {
  $.ajax({
    method: "POST",
    url: "/api/videos",
    dataType: "json",
    contentType: false,
    processData: false,
    data: video,
    success,
    error
  });
};

export const fetchVideo = (id, success, error) => {
  $.ajax({
    method: "GET",
    url: `/api/videos/${id}`,
    success,
    error
  });
};

export const editVideo = (video, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `/api/videos/${video.id}`,
    dataType: "json",
    contentType: false,
    processData: false,
    data: video,
    success,
    error
  });
};

export const destroyVideo = (id, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/videos/${id}`,
    success,
    error
  });
};
