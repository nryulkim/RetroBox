if @user
  result_videos = @videos
else
  vid_like_arr = [];
  vid_hash = {};
  @videos.each do |video|
    vid_like_arr.push([video.id, video.like_sum])
    vid_hash[video.id] = video
  end

  vid_like_arr.sort! { |a, b| b[1] <=> a[1] }

  result_videos = [];
  10.times do |i|
    result_videos.push(vid_hash[vid_like_arr[i][0]])
  end
end

json.list_videos result_videos.each do |video|
  json.id video.id
  json.title video.title
  json.description video.description
  json.username video.user.username
  json.thumbnail_url asset_path(video.thumbnail.url)
  json.views video.views
  json.created_at video.created_at
end
