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
- `GET /api/video/:videoId/comments`
  - index of all comments for a video
- `POST /api/video/:videoId/comments`
- `PATCH /api/video/:videoId/comment/:id`
- `DELETE /api/video/:videoId/comment/:id`

### Likes
- `POST /api/video/:videoId/likes`
  - Add a like or dislike to a video
  - User cannot like or dislike a video more than once
- `POST /api/comment/:commendId/likes`
  - Add a like or dislike to a comment
  - User cannot like or dislike a comment more than once
- `DELETE /api/video/:videoId/like/:id`
- `DELETE /api/comment/:commentId/like/:id`
