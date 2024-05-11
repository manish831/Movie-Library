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

## End points:
-  SignUP end-point: `https://movie-library-l7p0.onrender.com/api/users/create` .
```
Method: POST
Body: 
{
    "username":"FinalTest",
    "email":"finaltest@test.com",
    "password":"finalTest"
}

Response: 
{
    "username": "FinalTest",
    "password": "$2a$10$zWR5hfhtASV3/J1e7EIdWOZCOJe6R9wlry8Nk4vhd726QV.WrFIPu",
    "email": "finaltest@test.com",
    "_id": "663e7664ad6ca6736e620d31",
    "__v": 0
}
```
![image](https://github.com/manish831/Movie-Library/assets/74316266/15a409ab-0211-48d6-9e5f-691c276b55c8)


- Login End-Point: `https://movie-library-l7p0.onrender.com/api/users/login`
```
Method: POST
Body:
{
    "username":"FinalTest",
    "password":"finalTest"
}

Response:
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjNlNzY2NGFkNmNhNjczNmU2MjBkMzEiLCJ1c2VybmFtZSI6IkZpbmFsVGVzdCIsImlhdCI6MTcxNTM2OTkzOSwiZXhwIjoxNzE1NDA1OTM5fQ.19AgvqMwhe8TneDin2A6QuDnTPwKitHfczG9ENkZVkY",
    "userId": "663e7664ad6ca6736e620d31"
}
```
![image](https://github.com/manish831/Movie-Library/assets/74316266/23081e0d-9e9d-496a-b4ae-f85c698380f2)

## Playlist related end-points
- Create Playlist : `https://movie-library-l7p0.onrender.com/api/playlist/create`
```
Method: POST
Body:
{
    "userId": "663e7664ad6ca6736e620d31",
    "name":"Thriller",
    "public": true,
    "movieId":"tty1287"
},
Header
{
    "Authorization" : "token"
}
For example:
Header
{
    "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjNlNzY2NGFkNmNhNjczNmU2MjBkMzEiLCJ1c2VybmFtZSI6IkZpbmFsVGVzdCIsImlhdCI6MTcxNTM2OTkzOSwiZXhwIjoxNzE1NDA1OTM5fQ.19AgvqMwhe8TneDin2A6QuDnTPwKitHfczG9ENkZVkY"
}
Response:
{
    "userId": "663e7664ad6ca6736e620d31",
    "name": "Thriller",
    "public": true,
    "movies": [
        "tty1287"
    ],
    "_id": "663ec3b19311cca047e6140e",
    "__v": 0
}
```
![image](https://github.com/manish831/Movie-Library/assets/74316266/875b95bb-43df-48bd-b2e5-a25e3e3b0103)

- Get Playlist: `https://movie-library-l7p0.onrender.com/api/playlist/${userId}`
- For Eg: `https://movie-library-l7p0.onrender.com/api/playlist/663e7664ad6ca6736e620d31`
```
Method: GET
Body:
{

},
Header
{
    "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjNlNzY2NGFkNmNhNjczNmU2MjBkMzEiLCJ1c2VybmFtZSI6IkZpbmFsVGVzdCIsImlhdCI6MTcxNTM2OTkzOSwiZXhwIjoxNzE1NDA1OTM5fQ.19AgvqMwhe8TneDin2A6QuDnTPwKitHfczG9ENkZVkY"
}
Response:
[
    {
        "_id": "663ec3b19311cca047e6140e",
        "userId": "663e7664ad6ca6736e620d31",
        "name": "Thriller",
        "public": true,
        "movies": [
            "tty1287"
        ],
        "__v": 0
    }
]
```
![image](https://github.com/manish831/Movie-Library/assets/74316266/794b0be4-0029-46e4-a15d-2c501047b94d)

- Update Playlist: `https://movie-library-l7p0.onrender.com/api/playlist/${playlistId}`
- For eg: `https://movie-library-l7p0.onrender.com/api/playlist/663ec3b19311cca047e6140e`

```
Method: PATCH
Body:
{
    "movieId": "yt12378"
},
Header
{
    "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjNlNzY2NGFkNmNhNjczNmU2MjBkMzEiLCJ1c2VybmFtZSI6IkZpbmFsVGVzdCIsImlhdCI6MTcxNTM2OTkzOSwiZXhwIjoxNzE1NDA1OTM5fQ.19AgvqMwhe8TneDin2A6QuDnTPwKitHfczG9ENkZVkY"
}
Response:
{
    "_id": "663ec3b19311cca047e6140e",
    "userId": "663e7664ad6ca6736e620d31",
    "name": "Thriller",
    "public": true,
    "movies": [
        "tty1287",
        "yt12378"
    ],
    "__v": 0
}
```

![image](https://github.com/manish831/Movie-Library/assets/74316266/fd6f4a5e-6531-45c4-a617-5cd7e7e9cee4)

## Similarly we can define another route related to playlist like, update playList(making playlist either Public or Private), Delete PlayList, etc.






