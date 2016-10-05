@videos.each do |video|
  json.set! video.id do
    json.title video.title
    json.description video.description
    json.username video.user.username
  end
end
