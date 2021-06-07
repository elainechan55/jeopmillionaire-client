import React, { Component } from 'react'
import { gameboardCreate, gameboardUpdate, responseCreate } from '../../api/gameboard'
import CategoryCard from '../CategoryCard/CategoryCard'
import QuestionCard from '../QuestionCard/QuestionCard'
const _ = require('lodash')

class Gameboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: props.user,
      gameboard: null,
      isLoaded: false
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (event) {
    console.log(event)
    gameboardCreate(this.state.user) // axios request
      .then(res => {
        this.setState({
          isLoaded: true,
          gameboard: res.data.gameboard
        })
        this.render()
      })
      .catch(err => console.error(err))
  }

  // renderCategory (i) {
  //   return <CategoryCard value={i} />
  // }

  // renderQuestion (q) {
  //   return <QuestionCard />
  // }

  // updateScore = (number) => {
  //   this.setState(prevState => {
  //     const gameboard = Object.assign({}, prevState.gameboard)
  //     gameboard.totalScore += number
  //     return { gameboard }
  //   })
  //   this.render()
  // }

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
    if (!this.state.isLoaded) {
      return <button onClick={this.onSubmit}>New Game!</button>
    } else {
      const categories =
        _.uniqBy(this.state.gameboard.questions, 'category')
          .map(q => q.category)
      // const categories = this.state.gameboard.questions.map(q => q.category)
      return (
        // <div>
        //   <div className="board-row">
        //     {categories.map(category => (
        //       // this.renderCategory(category)
        //       <CategoryCard key="" value={category} />
        //     ))}
        //   </div>
        //   <div className="board-row">
        //     <QuestionCard value={this.state.gameboard.questions[0]} />
        //     <QuestionCard value={this.state.gameboard.questions[1]} />
        //     <QuestionCard value={this.state.gameboard.questions[2]} />
        //   </div>
        //   <div className="board-row">
        //     <QuestionCard value={this.state.gameboard.questions[3]} />
        //     <QuestionCard value={this.state.gameboard.questions[4]} />
        //     <QuestionCard value={this.state.gameboard.questions[5]} />
        //   </div>
        //   <div className="board-row">
        //     <QuestionCard value={this.state.gameboard.questions[6]} />
        //     <QuestionCard value={this.state.gameboard.questions[7]} />
        //     <QuestionCard value={this.state.gameboard.questions[8]} />
        //   </div>
        // </div>
        <div className="game-board">
          <h1>Score: {this.state.gameboard.totalScore}</h1>
          <div className="row h-100 board">
            {categories.map(category => (
              <CategoryCard key={category} value={category} />
            ))}

            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[0]} updateGameboard={this.updateGameboard}></QuestionCard>
            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[3]} updateGameboard={this.updateGameboard}></QuestionCard>
            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[6]} updateGameboard={this.updateGameboard}></QuestionCard>

            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[1]} updateGameboard={this.updateGameboard}></QuestionCard>
            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[4]} updateGameboard={this.updateGameboard}></QuestionCard>
            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[7]} updateGameboard={this.updateGameboard}></QuestionCard>

            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[2]} updateGameboard={this.updateGameboard}></QuestionCard>
            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[5]} updateGameboard={this.updateGameboard}></QuestionCard>
            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[8]} updateGameboard={this.updateGameboard}></QuestionCard>
          </div>
        </div>
      )
    }
  }
}

// class CreateGame extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       user: props.user
//     }
//   }
//   onSubmit () {
//     gameboardCreate(this.state.user)
//       .then(gameboard => {

//       })
//   }

//   render () {
//     return (
//         <Button onSubmit={this.onSubmit}/>
//       )
//   }
// }

export default Gameboard
