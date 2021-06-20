# JeopMillionaire!?
## About the Application
JeopMillionaire!? is a trivia game application based on the game-shows:
*Jeopardy!* and *Who Wants to be a Millionaire?*. This application allows users
to interact with a gameboard that is set up with (3) random categories that have
(3) questions to choose from. Each question has 4 multiple choice answers to choose
from that have varying points for the user to potentially accumulate or lose from
their total score.

This repository is the client application which utilizes React, Bootstrap,
Javascript and HTML with SCSS to display a gameboard. The api application utilizes
Express.js web framework and Mongoose to connect to MongoDB to view and track
the status of a game.

## Application-In-Action

## Installation
1. Fork and clone this repository.
2. Change into the new directory from the terminal.
3. Install any dependencies with `npm install`.
4. Run the client server with `npm start`.

## Deployment
1. Check that the `homepage` key in your `package.json` is pointing to the url
   of the deployed application.
2. Before deploying, ensure there you have a clean working status on the main
branch or the branch you want to deploy.
3. To deploy, use `npm run deploy`.

## Structure
* The `src/App.js` component stores the currently authenticated user in state and
renders the `Header` component, and a list of routes, each of which render a
component from `src/components`.
* The `src/api` directory contains component files: `auth.js` and `gameboards.js`
which contains the appropriate axios calls.

## Deployed Applications
The front-end of the application is deployed on [Github Pages](https://elainechan55.github.io/jeopmillionaire-client/) and the repository is on [Github](https://github.com/elainechan55/jeopmillionaire-client).

The back-end of the application is deployed on [Heroku](https://damp-oasis-97796.herokuapp.com/) and the repository is on [Github](https://github.com/elainechan55/jeopmillionaire-server).

## Technologies Used
Technology    | Front-End | Back-End |
:-----------: | :-------: | :------: |
**HTML**      | X         |          |
**CSS/SCSS**  | X         |          |
**Javascript**| X         | X        |
**Axios**     | X         |          |
**Bootstrap** | X         |          |
**React**     | X         |          |
**Express**   |           | X        |
**Mongoose**  |           | X        |
**MongoDB**   |           | X        |
**Lodash**    | X         | X        |

## Planning
### Process
Throughout the planning process, I utilized a [Trello project board](https://trello.com/b/3XPUSOPk/jeopmillionaire) to help with organization and development.

### Wireframes
* [Updated Wireframes](https://imgur.com/a/zGOiFI4)
* [Initial Wireframes and Entity Relationship Diagram](https://imgur.com/a/YP9ECE2)

### User Stories
#### Auth
- As an unregistered user, I would like to sign up for an account.
- As a registered user, I would like to sign into my account.
- As a signed in user, I would like to change my password.
- As a signed in user, I would like to sign out of my account.

#### GamePlay / GameHistory
- As a signed in user, I would like to start a new game.
- As a signed in user, I would like to interact with a game.
- As a signed in user, I would like to see the displayed results of a game after finishing.
- As a signed in user, I would like to be able to play more games.
- As a signed in user, I would like to be able to resume an uncompleted game from game-history.
- As a signed in user, I would like to view all past game results from game history.
- As a signed in user, I would like to delete a game result from game-history.

## Next Development
### Future Iterations / Unsolved Problems
- To have user choose gameboard size (minimum = 3 x 3, maximum = 6 x 5).
- To have a mobile application for mobile users rather than playing through a browser on mobile.
- To incorporate local multiplayer on web application.
- To incorporate networked multiplayer on web application.
- To include audio of [Trebek](https://github.com/elainechan55/jeopmillionaire-client/blob/main/public/dailyDouble.gif?raw=true)'s encourangement and responses to answers.
