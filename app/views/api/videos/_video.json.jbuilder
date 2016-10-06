json.extract! video, :id, :title, :description, :views

json.user video.user
json.created_date video.created_at.to_date
json.thumbnail_url asset_path(video.thumbnail.url)
json.video_url asset_path(video.video.url)
