## HTML API

### ROOT

- `GET /` - loads React Web App

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Videos
- `POST /api/videos`
- `GET /api/videos`
  - Videos index/search
  - accepts query param to list videos by title
- `GET /api/video/:id`
- `PATCH /api/video/:id`
- `DELETE /api/video/:id`

### Comments
- `GET /api/video/:video_id/comments`
  - index of all comments for a video
- `POST /api/video/:video_id/comments`
- `PATCH /api/comment/:id`
- `DELETE /api/comment/:id`

### Likes
- `POST /api/video/:video_id/likes`
  - Add a like or dislike to a video
  - User cannot like or dislike a video more than once
- `POST /api/comment/:comment_id/likes`
  - Add a like or dislike to a comment
  - User cannot like or dislike a comment more than once
- `DELETE /api//like/:id`
