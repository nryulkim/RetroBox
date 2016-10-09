json.extract! comment, :id, :video_id, :updated_at, :body
json.set! :author do
  json.partial! './api/users/user', user: comment.user
end
