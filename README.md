# Movie-store
react nodejs project for movie search and booking by user.

# Tech stack
- Javascript language
- Node.js environment with Express framework for backend
- React for frontend
- MongoDB database along with Mongoose structure

# Description
It contains:
- Navigation (logo clickable takes to homepage)
- Home page (shows a list of movies for a specific user, a search bar for movies by title, filter by language, filter by location, book/unbook a movie. The image and the title are clickable)
- Movie details page
- Login page (under construction)
- Sign Up page (pending)

# Database: MonggoDB, Mongoose

  ## Schemas:
  - user
  - movie
  - booking

  ## Structures:
  ### user
      name: {
          type: String,
          required: [true, 'Name is required']
        },
        password: {
          type: String,
          required: [true, 'Created date is required']
        }

  ### movie
      title: {
        type: String,
        required: [true, 'Name is required']
      },
      language: {
        type: String,
        required: [true, 'language is required']
      },
      location: {
        type: String,
        required: [true, 'location is required']
      },
      plot: {
        type: String,
        required: [true, 'plot is required']
      },
      poster: {
        type: String
      },
      soundEffects: {
        type: [String]
      },
      stills: {
        type: [String]
      },
      imdbId: {
        type: String
      },
      listingType: {
        type: String
      },
      imbdRating: {
        Number
      }

  ### booking
      userId: {
        type: mongoose.Types.ObjectId,
        required: [true, 'userId is required'],
        ref: 'user'
      },
      movieId: {
        type: mongoose.Types.ObjectId,
        required: [true, 'movieId is required'],
        ref: 'movie'
      },
      date: {
        type: Date
      }

  Data Instances:
  - user
    {
      "name": "test-user",
      "password": "test"
    } 
  - movie
     {
    "imdbRating": "9.9",
    "soundEffects": [
      "RX6",
      "SDDS"
    ],
    "stills": [
      "https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_UY99_CR24,0,99,99_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BNzAwOTk3MDg5MV5BMl5BanBnXkFtZTcwNjQxNDY3Mw@@._V1_UY99_CR29,0,99,99_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._"
    ],
    "title": "The Shawshank Redemption",
    "language": "ENGLISH",
    "location": "DELHI",
    "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._",
    "imdbId": "tt01111161",
    "listingType": "NOW_SHOWING"    
  }
   

# Notes
- The server/app.js calls the function "controllers.home.initialize()" that initializes the process of creating a user and a list of movies. It runs automatically when the server runs. The user and the movies that are migrated to the DB can be found in sever/data folder.
- A user can create and delete a booking that can be checked in DB now (the rendering of it is under construction) 


# Instructions to run
- download and install mongoDB compass from https://www.mongodb.com/try/download/compass

- To run the server in Terminal 1:
    - cd server
    - npm i or npm install
    - npm start
    - check http://localhost:5000 to see if it's running

- To run the client in Terminal 2:
    - cd client
    - npm i or npm install
    - npm start

Go to http://localhost:3000

# Instructions for Unit Test
- cd server
- npm test
