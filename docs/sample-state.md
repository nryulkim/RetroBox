```js
{
  session{
    currentUser: {
      id: 1,
      username: "test"
    },
    forms: {
      signUp: {errors: []},
      logIn: {errors: []},
      addComment: {errors: []}
    }
  }
  videos: {
    forms:{
      uploadVideo: {errors: []},
      updateVideo: {errors: []},
    }
    currentVideo: {
      title: "Sample Video",
      description: "something something",
      video_url: "video_url",
      username: "test",
      views: 123456,
      created_date: Sep 24, 2044,
      likes: {
        likes: count,
        dislikes: count
      }
      comments: {
        1: {
          username: "test2",
          body: "something something something",
          likes: {
            likes: count,
            dislikes: count
          }
        }
      }
    }
    list_videos{
      1: {
        title: "Sample Video1",
        description: "something something2"
        thumbnail: "pic_url",
        username: "test2"
      }
    }
  }

}

```
