# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result.

##Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SessionForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback

* `logIn`
  0. invoked from `SessionForm` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.

* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the callback

* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state

* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycle

### Error API Response Actions

* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's stte; `errors` are mapped to their respective forms

* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Video Cycles

### Video API Request Actions

* `fetchVideos`
  0. invoked from `HomeIndex` `didMount`/`willReceiveProps`
  0. `GET /api/videos` is called
  0. `receiveVideos` is set as the success callback

* `uploadVideo`
  0. invoked from upload video button `onClick`
  0. `POST /api/videos` is called
  0. `receiveSingleVideo` is set as the success callback

* `fetchSingleVideo`
  0. invoked from `VideoDetail` `didMount`/`willReceiveProps`
  0. `GET /api/videos/:id` is called
  0. `receiveSingleVideo` is set as the success callback

* `destroyVideo`
  0. invoked from delete video button `onClick`
  0. `DELETE /api/videos/:id` is called
  0. `removeVideo` is set as the success callback

### Video API Response Actions

* `receiveVideos`
  0. invoked from an API callback
  0. the `VideoReducer` updates `videos` in the application's state.

* `receiveSingleVideo`
  0. invoked from an API callback
  0. the `VideoReducer` updates `currentVideo` in the application's state.

* `removeVideo`
  0. invoked from an API callback
  0. the `VideoReducer` updates `videos` in the application's state.

### Comment API Request Actions

* `fetchAllComments`
  0. invoked from `Comments` `didMount`/`willReceiveProps`
  0. `GET /api/video/:videoId/comments` is called
  0. `receiveComments` is set as the success callback

* `createComment`
  0. invoked from post comment form `onSubmit`
  0. `POST /api/video/:videoId/comments` is called
  0. `receiveSingleComment` is set as the success callback

* `updateComment`
  0. invoked from a edit comment form `onSubmit`
  0. `PATCH /api/video/:videoId/comment/:id` is called
  0. `receiveSingleComment` is set as the success callback

* `destroyComment`
  0. invoked from a delete comment button `onClick`
  0. `DELETE /api/video/:videoId/comment/:id` is called
  0. `removeComment` is set as the success callback

### Comment API Response Actions

* `receiveComments`
  0. invoked from an API callback
  0. the `CommentReducer` updates `comments` in the application's state

* `receiveSingleComment`
  0. invoked from an API callback
  0. the `CommentReducer` updates `comments` in the application state
    - if commentId does not exist it is added to the front of the list

* `removeComment`
  0. invoked from an API callback
  0. the `CommentReducer` updates `comments` in the application state

### Likes API Request Actions

* `addVideoLikes`
  0. invoked from a thumbsUp button on the `VideoDetail` - `onClick`
  0. `POST /api/video/:videoId/likes` is called
  0. `updateLikes` is set as the success callback

* `addVideoDislike`
  0. invoked from a thumbsDown button on the `VideoDetail` - `onClick`
  0. `POST /api/video/:videoId/likes` is called
  0. `updateLikes` is set as the success callback

* `destroyLike`
  0. invoked from clicking an active thumbsUp or thumbsDown button
  0. `DELETE /api/video/:videoId/like/:id` or `DELETE /api/comment/:commentId/like/:id` is called
  0. `removeLike` is set as the success callback

* `addCommentLikes`
  0. invoked from a thumbsUp button on the `Comments` - `onClick`
  0. `POST /api/comment/:commentId/likes` is called
  0. `updateLikes` is set as the success callback

* `addCommentDislike`
  0. invoked from a thumbsDown button on the `Comments` - `onClick`
  0. `POST /api/comment/:commentId/likes` is called
  0. `updateLikes` is set as the success callback

### Likes API Response Actions

* `updateLikes`
  0. invoked from an API callback
  0. the `LikeReducer` updates `currentVideo/likes` or `currentVideo/comments[id]/likes` in the application's state appropriately

* `removeLike`
  0. invoked from an API callback
  0. the `LikeReducer` updates `currentVideo/likes[id]` or `currentVideo/comments[id]/likes[id]` in the application's state appropriately
