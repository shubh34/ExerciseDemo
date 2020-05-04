This project is a small responsive web application designed for demo purpose.
With this application User can see movie list based category and can view details of movie and can watch the trailer of the movie 

## Project Setup
- Unzip the folder and open it in any IDE like Visual studio code
- Install the dependencies using `npm install` install node if it complains
- create a custom domain called: localhost.rakuten.tv in your /etc/hosts pointing to localhost,eg: 127.0.0.1 localhost.rakuten.tv
- Run the application using `npm start`
- Build the production application using `npm build`


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run format`
Will format the source file.

### `npm run lint`
Will show linting issue

### `npm run coverage`
Will provide the test coverage

## Folder Structure


- `coverage`: output folder for test coverage reports.
- `dist`: production build of application.
- `src`: source code of project.
    - `components`- list of all components. Each component has its own scss and test file.
    - `configs` - configuration properties.
    - `constants` - string constants.
    - `sharedComponents` - resuable components. Each resuable component has its own scss and test file.
    - `states` - redux states that includes action, selector, reducer and their tests
    - `store` - redux setup combine reducer and store initialisation
    - `utils` - global resuable functions
- `tests-stub`: unit testing mock file only.

## Tech Stack
React, Redux, Jest, Enzyme, Webpack, Prettier, Eslint, Lodash 

## Requirement
- `Movie Listing`
    - `Show list of movies based on categories`
    -  `Each list should contain a title and should be scrollable horizontally by clicking on some buttons.`
    - `Each movie has a detail page. Users can visit this detail page by clicking on the artwork of each movie`
- `Movie Details`
    - ` Button to click to reproduce the trailer.`
    - `Nav bar to show title of the movie.`
    - `User details will be highlighted`
    - `Show points to reach to next available prize, hide when user at top position`
- `Movie Trailer`
     - `Plays the trailer of movie`

## Addition Features

- `Caching`
    - `The app caches the movie list until user closes the tab or browser. it reduces the number of api call`
- `Nav Bar to navigate through pages`
- `Short description on movie details page`


## Docker 
`image creation `: docker build -t image-name .
`image creation production`: docker build -f Dockerfile-prod -t image-name .
`run a docker image`: docker run -it -p 80:80 --rm image-name




