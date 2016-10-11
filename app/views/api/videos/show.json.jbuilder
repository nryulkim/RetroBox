json.partial! './api/videos/video', video: @video

json.set! :comments do
  json.array! @video.comments do |comment|
    json.id comment.id
    json.body comment.body
    json.video_id comment.video_id
    json.updated_at comment.updated_at
    json.set! :author do
      json.partial! './api/users/user', user: comment.user
    end
    json.set! :likes do
      json.array! comment.likes.each do |like|
        json.partial! './api/likes/like', like: like
      end
    end
  end
end

json.set! :likes do
  json.array! @video.likes.each do |like|
    json.partial! './api/likes/like', like: like
  end
end
