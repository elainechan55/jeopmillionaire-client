# JeopMillionaire
## About the Application
JeopMillionaire!? is a trivia game application based on the game-shows 'Jeopardy!'
and 'Who Wants to be a Millionaire?'. This application allows users to interact
with a gameboard that is set up with (3) random categories that have (3) clues
to choose from. Each clue has 4 multiple choice answers to choose from that have
varying points for the user to potentially accumulate or lose from their total
score.
This repository is the client application which utilizes React, Bootstrap, HTML
with SCSS and Javascript. The api application utilizes Express API web framework
and Mongoose to connect to MongoDB to view and track user orders.

## Set-up/Installation


## Deployed Applications
The front-end of the application is deployed on [Github Pages]()
and the repository is on [Github]().

The back-end of the application is deployed on [Heroku]()
and the repository is deployed on [Github]().

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
Throughout the planning process, I utilized a [Trello project board]()
to help with organization.

### Wireframes
* [Wireframes]()

### User Stories
#### Auth
- As an unregistered user, I would like to sign up for an account.
- As a registered user, I would like to sign into my account.
- As a signed in user, I would like to change my password.
- As a signed in user, I would like to sign out of my account.
#### GamePlay
- As a signed in user, I would like to start a new game. POST
- As a signed in user, I would like to interact with a game. PATCH
- As a signed in user, I would like to see the displayed results of a game after finishing. GET
- As a signed in user, I would like to be able to play more games. POST
- As a signed in user, I would like to be able to restart a game. DELETE, POST
#### GameHistory (maybe)
- As a signed in user, I would like to view all past game results. GET
- As a signed in user, I would like to delete a game result. DELETE

## Application-In-Action

## Next Development
### Future Iterations
- In future versions, I would like to incorporate local multiplayer and networked
multiplayer.
-
### Unsolved Problems
