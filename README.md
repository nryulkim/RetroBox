# RetroBox

[RetroBox Live][heroku]

[heroku]: http://retro-box.herokuapp.com

RetroBox is a full-stack web application using Ruby on Rails as its backend, PostgreSQL as its database, and React.js with a Redux architectural framework on the frontend.

## Features and Implementation

### Likes
  Users are able to like or dislike videos or comments. The likes are stored in one table for both videos and comments using a polmorphic association. Each like is stored in the table with its `id`, `likeable_type`, `likeable_id`, `like_type`, and `user_id`. The `user_id` and `likeable` combination has to be unique. When a new Like is created, the backend determines if that particular user has a like or dislike for the likeable. If so, the previous like is modified to the new status; if not a new like is created.

  When the user clicks on the like or dislike button, they are redirected to the login page if they are not currently logged in. If they are, they will be able to like or dislike and receive immediate feedback. An AJAX request to alter the database is not sent until the user moves from the current page to another video, another page within the app, or a completely different website. This is sent only if the user's like is different from its initial state.

  Allowing for all the likes statuses to change when the user moves to a completely new webpage was particularly tricky. `window.onbeforeunload` had to not only send the AJAX for one particular likeable's likes, but also every altered likes on the page and the subscription status. This was done by giving the `window.onbeforeunload` function properties that refer to other functions and calling those properties inside the function if they do exist. As there is an undetermined number of likes on the page, this was set as an object of functions with their property name being a combination of the `likeable_type` and `likeable_id`.

  ![alt tag](https://raw.githubusercontent.com/nryulkim/RetroBox/master/app/assets/images/readme/gif/video_likes_demo.gif)


### Subscriptions
  Users are able to subscribe to other users through the video show page. When the user subscribes to another user, they get a link on their burger drop down menu with a link to all of that particular user's videos. Subscriptions are stored in the PostgreSQL database with the `id`, `subscriber_id`, and `subscribee_id`.

  When the current user clicks on the subscribe or unsubscribe button, the AJAX request to the database is not sent immediately. By utilizing the state, the AJAX request when the user either moves to another video, moves to another part of the website, or unloads the window entirely. This AJAX request is also sent only if the user changed their current subscription status. This was done by utilizing the state of each subscription component and the following events: `componentWilLReceiveProps`, `componentDidMount`, `componentDidUpdate`, and `window.onbeforeunload`.

  Sending an AJAX request when the window is unloaded was especially tricky. The overall store state is edited when the user clicks the subscribe button. This allows the burger dropdown to rerender with the change in the user's subscriptions. However, this also makes the subscribe button receive new props and rerender. The subscribe button had to retain its state when the user clicks the subscribe button but reset its state when the video changes and when the current user first receives the subscriptions from the database. Finally, the AJAX request had to be synchronous only when the window is unloaded so that the AJAX actually fires correctly on Chrome browsers.

  ![subgif](./app/assets/images/readme/gif/subscribe_demo_gif.gif)


### User Accounts
  Users are able to create their own accounts and upload an icon image that will represent them. If they choose not to do so, they will be using a default icon. A demo account is provided to allow people to test the website without having to make a fresh account. The login animation for the demo account was done using a combination of a higher order function and closures. Upon login the current user is held by the store until the session is destroyed. Users are stored in the database in one table containing their `id`, `username`, `email`, `password_digest`, `icon`, and `session_token`. The `icon` image is stored on AWS with paperclip if a custom image is used. If not, the default image is utilized from the asset pipeline.

  ![alt tag](https://raw.githubusercontent.com/nryulkim/RetroBox/master/app/assets/images/readme/gif/user_signup_demo_gif.gif)

### Videos
  Users are also able to upload videos to the site. A reference to the video is stored in one table in our PostgreSQL database. Each video is stored with the following information: `id`, `title`, `description`, `video`, `thumbnail`, `views`, and `user_id`. The `video` and `thumbnail` are setup with the paperclip gem and the actual video and image are stored on AWS.

  Each video can then be rendered on the page as either a `VideoItem` or `Video`. As a `VideoItem`, only the `thumbnail`, `views`, and `username` are displayed. When a user views a full video, all of its information is displayed, including its `comments` and `likes`. In order to reduce the number of SQL database queries, when pulling a video item, the video's user is greedily loaded. Also, when the detailed video is loaded, the video's user, comments, and likes are greedily loaded. Also, each of the comment's user and likes and each like's user are greedily loaded as well. This way there isn't multiple SQL queries for each like, user, and comment.

  ![alt tag](https://raw.githubusercontent.com/nryulkim/RetroBox/master/app/assets/images/readme/gif/video_upload_demo_gif.gif)

#### ViewBar
  The `ViewBar` is created using the `npm` package `nuka-carousel`. Each `ViewBar` has a random assortment of `VideoItem`s and displays between 2 - 5 videos at a time depending on the window size. Once the window changes to a certain size, the `ViewBar` will rerender with a different number of videos. In order to control the size of the `VideoItem`s in the `ViewBar` the title of the video is constrained to 2 lines with webkit.

  ![alt tag](https://raw.githubusercontent.com/nryulkim/RetroBox/master/app/assets/images/readme/gif/view_bar_demo_gif.gif)

### Video Searching
  Users are able to search for any video by a substring of its title or description. They can also chain substrings together to search for multiple videos at once. The search is done with an `OR` relationship between the substrings. As the user types into the searchbar, suggestions are generated utilizing all the possible words that would generate a hit. As the search utilizes the URL query, this search page is also used to generate the `Most viewed videos` list and the `Most liked videos` list. When a user is logged in, they are also able to access all the videos that they have liked or disliked utilizing this type of search.

  Once there are videos on the search page, the videos can be sorted depending on their title, username, or view count. This can be organized in either ascending or descending order. This was done by altering the state of the video show page component and sorting the videos accordingly.

### Adding Comments
  Users are also able to add comments to any video. Each comment is stored in a table containing their `id`, `body`, `video_id` and `user_id`. After submitting a comment to a video, users are able to either delete or edit their own comments. They will not be able to delete or edit comments that they do not own.

  ![alt tag](https://raw.githubusercontent.com/nryulkim/RetroBox/master/app/assets/images/readme/gif/comment_demo.gif)

## Future Directions for the Project

### Suggestion Engine
  Currently, the suggested videos and the videos in the viewbar are a random assortment of the videos currently in the database. I plan to build my own suggestion engine utilizing the user's likes and comment history to determine similar users. However, for this to be effective, I would need a larger video and user database.

### Video Editing
  Currently, after a user uploads a video to the website, they are unable to edit or delete the video. I would like to add this simple feature.

### User Editing
  Currently, after a user creates a new account, they are unable to change their icon or change their user information. I would like to add this simple feature.

### Playlists
  I would like to have Users be able to create their own playlists and add videos to their playlists. This can be done by creating 2 more models; one would be the playlist which would know the owner and the other would be joining each particular playlist with all of the videos that they may have.

### Automatic Video Thumbnails
  I would like to have the video thumbnail to be generated automatically from the video that is uploaded to the website. This can be done using the FFMPEG buildpack that is currently being used to process the videos for paperclip.

### Nested Comments
  Currently, users can only comment on videos. I would like to change comments to be polymorphic and have videdos or other comments to be commentable.

### History
  I would like to keep track of what videos the user has watched so that they can have a `Watch Again` list.

### Video Tags
  I would like to have Users be able to add tags to their own videos. This way other users can search using tags and these tags can be utilzed in the suggestion engine.
