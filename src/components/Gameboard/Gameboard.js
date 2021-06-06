import React, { Component } from 'react'
import { gameboardCreate } from '../../api/gameboard'
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
    gameboardCreate(this.state.user)
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

  renderQuestion (q) {
    return <QuestionCard />
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
          <div className="row h-100 board">
            {categories.map(category => (
              <CategoryCard key="" value={category} />
            ))}

            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[0]}></QuestionCard>
            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[3]}></QuestionCard>
            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[6]}></QuestionCard>

            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[1]}></QuestionCard>
            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[4]}></QuestionCard>
            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[7]}></QuestionCard>

            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[2]}></QuestionCard>
            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[5]}></QuestionCard>
            <QuestionCard className="col-4 box" value={this.state.gameboard.questions[8]}></QuestionCard>
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
