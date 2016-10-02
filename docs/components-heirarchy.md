## Component Heirarchy

**SessionFormContainer**
  - SessionForm

**HeaderContainer**
  - Header
    + Searchbar
      - SearchbarForm
    + Hamburger Dropdown
  - AppBar

**HomeContainer**
  - Home
    + HomeIndex
    + Feeds

**SearchContainer**
  - SearchResults
    + VideoIndex

**VideoUploadContainer**
  - VideoUpload
    + FileUpload
    + UploadForm

**VideoShowContainer**
  - VideoPlayer
  - VideoDetail
    + Likes
  - VerticalFeed
  - Comments

**UserHomeContainer**
  - ChannelHeader
  - VideoPlayer
  - VideoDetail
  - VideoIndex
  - Feeds



## Routes
| Path | Component |
|------|-----------|
| `/sign-up` | `SessionFormContainer` |
| `/sign-in` | `SessionFormContainer` |
| `/` | `HomeContainer` |
| `/results` | `SearchContainer` |
| `/upload` | `VideoUploadContainer` |
| `/watch/:videoId` | `VideoShowContainer` |
| `/user/:userId` | `UserHomeContainer` |
