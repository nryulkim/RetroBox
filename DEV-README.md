# RetroBox

Heroku Link: [RetroBox]

[RetroBox]: http://retro-box.herokuapp.com/

## Minimum Viable Product

RetroBox is a web application inspired by Youtube built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at the minimum, satisfy the following criteria.

### Major Features
- [X] Hosting on Heroku
- [X] New account creation, login, and guest/demo login
- [X] Videos
  * Users should also have the ability to upload videos
- [X] Comments
  * Users should have the ability to comment on videos
- [X] Likes
  * Users should be able to Like a Video/Comment
- [X] Video Searching
  * Users should be able to look up videos via the title
- [X] Production README
- [X] Adequate styling
- [X] Smooth, bug-free navigation
- [X] Adequate and appropriate seeds to demonstrate features


### Bonus Features
- [X] Scrolling
  * Lists of videos scroll sideways
  * Loads more videos at the bottom of the page once. After leaves a "Load More" button
- [ ] Feeds (User specific and global sets of videos)
  * User Specific
    - [X] Subscription
    - [ ] History
    - [ ] Watch Later
    - [ ] Recommended
  * Global
    - [X] Most Liked
    - [X] Most Viewed
- [X] Subscription (Users should be able to subscribe to other Users)
- [ ] Nested Comments (Can reply to comments)
- [ ] User created Libraries
- [ ] Ability to tag videos and search videos via tags



## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-heirarchy.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend Setup and Front End User Authentication (1 Day)

**Objective:** Functioning user authentication

- [X] New Rails Project
- [X] User model/migration
- [X] Back end Authentication
- [X] 'StaticPages' Controller and Root View
- [X] 'Webpack' and react/redux modules
- [X] APIUtil setup to interact with the backend API
- [X] Redux cycle for frontend authentication
- [X] User signup/signin components
- [X] Blank landing component after signup/signin
- [X] Style signup/signin components
- [X] User Seed
- [X] Review

### Phase 2: Video Model, API, and Components (3 Days)
**Objective:** Video can be created and updated through the API and by Users

- [X] Video Model
- [X] Seed database with video data.
- [X] CR API for videos
- [X] JBuilder views to format videos appropriately
- Video components and respective Redux loops
  - [X] 'Video Index'
    - Main page with videos listed.
  - [X] 'Video Index Row'
    - Row of videos with Scrolling
  - [X] 'Video Form'
    - Video upload form.
  - [X] 'Video Show Page'
    - Watch a Video

### Phase 3: Comment Model, API, and Components (2 Days)
**Objective:** Comments can be created and updated through the API and by Users. These comments are owned by a User and by a Video. They can be reordered on the Video by Date created.

- [X] Comment Model
- [X] Seed database with Comments
- [X] CRUD API for comments
- [X] JBuilder views to format the comment data appropriately
- Comment components and respective Redux loops
  - [X] 'Comment Index' Per video
    - Lists on the Video show page
    - Can be ordered by Date Created (ASC or DESC)
  - [X] 'Comment Item'
    - Individual comments displayed
  - [X] 'Comment Form'
    - Add a comment to the video

### Phase 4: Likes Model, API, and Components (1 Day)
**Objective:** Users should be able to "Like" or "Dislike" a video or comment. Comments can then be organized on the video by Likes as well.

- [X] Likes Model
- [X] Seed database with Likes
- [X] CRUD API for Likes
- [X] Jbuilder views to format the likes data
- Likes components and respective Redux loops
  - [X] 'Video Likes'
    - Shows both Likes and Dislikes
  - [X] 'Comment Likes'
    - Shows the difference between Likes and Dislikes
- Users should be able to see all videos/comments that they have liked.

### Phase 5: Video Searching (2 Days)
**Objective:** Video can be searched by title via the search bar.

- [X] JBuilder views to format videos appropriately
- [X] Video search result page
  - Video
    - Title
    - Username
    - Description
    - View Count
    - Date posted

### Bonus Phase: Pagination / Infinite Scrolling
**Objective:** Add semi-infinite scrolling to the main index page.

- [X] Paginate Videos Index API to send 42 Video Links at first.
  - In this phase, the videos will be picked randomly.
    - Divided in the following fashion
      - 12x -> [Recommended]
        - Displays 2 rows of 4-6 depending on window size.
      - 15x -> [Watch It Again]
        - Displays 4-6x with side scrolling to view more.
      - 15x -> [Subscription]
        - Displays 4-6x with side scrolling to view more.
- [X] Adds 1x subscription at a time as you scroll down until 14 subscriptions are reached.
  - Adds a Load More button once the above is loaded.
- [X] Add Trending Page
  - Lists 10 top liked videos
    - Thumbnail with picture depicting video
    - Title
    - User
    - Uploaded date (current time - upload time)
    - Number of views
    - Description
