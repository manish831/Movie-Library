# Steps to Run this Project.

- Clone this project and run `npm install` in root folder.
- Change directory to "client folder" by running `cd client` and run `npm install`.
- The above command will install all dependencies of this project.
- Now run `node index.js` in root folder (this will run backend server) and to run frontend change directory to "client" and run `npm start`.
There is another way of run this project, in root folder, run `npm run dev`.

<br>

# Features of this project.
## Backend-Tech Used : NodeJS, ExpressJS
## Database used: MongoDB
Backend follows below MVC Architecture:

```
movie-playlist-api/
├── config/
│   └── db.js
│   └── .env 
├── controllers/
│   ├── userController.js     // Controller for user-related operations
│   └── playlistController.js // Controller for playlist-related operations
├── models/
│   ├── User.js       // model related to user
│   └── Playlist.js   // model related to playlist
├── routes/
│   ├── userRoutes.js         // Routes related to users
│   └── playlistRoutes.js     // Routes related to playlists
├── index.js       // Main server file
└── package.json    // Project dependencies and scripts

```




