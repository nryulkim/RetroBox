json.subscriptions @subscriptions.each do |subscription|
  json.partial! './api/subscriptions/subscription', subscription: subscription
end
