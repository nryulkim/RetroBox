export const signup = (user, success, error) => {
  $.ajax({
    method: "POST",
    url: "/api/users",
    contentType: false,
    processData: false,
    data: user,
    success,
    error
  });
};

export const login = (user, success, error) => {
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user },
    success,
    error
  });
};

export const logout = (success, error) => {
  $.ajax({
    method: "DELETE",
    url: "/api/session",
    success,
    error
  });
};
