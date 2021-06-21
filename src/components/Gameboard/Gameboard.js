import React, { Component, Fragment } from 'react'
import { gameboardCreate, gameboardUpdate, responseCreate, gameboardShow } from '../../api/gameboard'
import CategoryCard from '../CategoryCard/CategoryCard'
import QuestionCard from '../QuestionCard/QuestionCard'
const _ = require('lodash')

class Gameboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: props.user,
      gameboard: null,
      isLoaded: false,
      gameboardId: props.match.params.id
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount (props) {
    if (!this.state.gameboardId) {
      return
    }
    gameboardShow(this.state.gameboardId, this.state.user) // axios request
      .then(res => {
        this.setState({
          gameboard: res.data.gameboard,
          isLoaded: true
        })
      })
      .catch(err => console.error(err))
  }

  onSubmit (event) {
    console.log(event)
    gameboardCreate(this.state.user) // axios request
      .then(res => {
        this.setState({
          isLoaded: true,
          gameboard: res.data.gameboard,
          gameboardId: res.data.gameboard._id
        })
        this.render()
      })
      .catch(err => console.error(err))
  }

  updateGameboard = (question, answer) => {
    const response = {
      answer: answer.answerText,
      game: this.state.gameboard._id,
      question: question._id,
      correct: answer.isCorrect
    }
    const gameboard = this.state.gameboard
    if (answer.isCorrect) {
      gameboard.totalScore += question.score
    } else {
      gameboard.totalScore -= question.score
    }

    responseCreate(response, this.state.user) // axios request
      .then(res => {
        gameboard.responses.push(res.data.response)
        gameboard.responses = gameboard.responses.map(r => r._id)
        if (gameboard.responses.length === gameboard.questions.length) {
          gameboard.isOver = true
        }
        gameboardUpdate(gameboard._id, gameboard, this.state.user) // axios request
          .then(res => {
            this.setState({
              gameboard: res.data.gameboard
            })
          })
          .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
  }

  render () {
    if (!this.state.isLoaded || !this.state.gameboardId) {
      // return <button id="newGameButton" onClick={this.onSubmit}>Start a Game!</button>
      // this.onSubmit()
      return (
        <Fragment>
          <div className="centered">
            <div className="logo">JeopMillionaire!?</div>
            <button className="homeButton" onClick={this.onSubmit}>Play a Game!</button>
          </div>
        </Fragment>
      )
    } else if (this.state.gameboard.isOver) {
      return (
        <div>
          <h2>Thanks for playing!</h2>
          <h2>Your total score is: {this.state.gameboard.totalScore}</h2>
          <button onClick={this.onSubmit}>Play Another!</button>
        </div>
      )
    } else {
      const categories =
        _.uniqBy(this.state.gameboard.questions, 'category')
          .map(q => q.category)
      return (
        <div className="game-board">
          <h1>Score: {this.state.gameboard.totalScore}</h1>
          <div className="row h-100 board">
            {categories.map(category => (
              <CategoryCard key={category} value={category} />
            ))}

            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[0]} updateGameboard={this.updateGameboard} gameboard={this.state.gameboard}></QuestionCard>
            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[3]} updateGameboard={this.updateGameboard} gameboard={this.state.gameboard}></QuestionCard>
            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[6]} updateGameboard={this.updateGameboard} gameboard={this.state.gameboard}></QuestionCard>

            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[1]} updateGameboard={this.updateGameboard} gameboard={this.state.gameboard}></QuestionCard>
            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[4]} updateGameboard={this.updateGameboard} gameboard={this.state.gameboard}></QuestionCard>
            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[7]} updateGameboard={this.updateGameboard} gameboard={this.state.gameboard}></QuestionCard>

            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[2]} updateGameboard={this.updateGameboard} gameboard={this.state.gameboard}></QuestionCard>
            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[5]} updateGameboard={this.updateGameboard} gameboard={this.state.gameboard}></QuestionCard>
            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[8]} updateGameboard={this.updateGameboard} gameboard={this.state.gameboard}></QuestionCard>
          </div>
        </div>
      )
    }
  }
}

export default Gameboard
