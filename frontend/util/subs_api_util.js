export function getSubscriptions(id, success){
  $.ajax({
    method: "GET",
    url: "/api/subscriptions",
    data: { id },
    success
  });
}
