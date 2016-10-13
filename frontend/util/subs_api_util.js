export function getSubscriptions(id, success){
  $.ajax({
    method: "GET",
    url: "/api/subscriptions",
    data: { id },
    success
  });
}

export function newSubscription(subscription, success){
  $.ajax({
    method: "POST",
    url: "/api/subscriptions",
    data: { subscription },
    success
  });
}

export function destroySubscription(id, success){
  $.ajax({
    method: "DELETE",
    url: `/api/subscriptions/${id}`,
    success
  });
}
