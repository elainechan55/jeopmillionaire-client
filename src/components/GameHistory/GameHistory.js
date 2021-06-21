import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { gameboardIndex, gameboardDelete } from '../../api/gameboard'
const _ = require('lodash')

class GameHistory extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: props.user,
      gameboards: []
    }
  }

  onGameClick = (event) => {
    const history = this.props.history
    history.push(`/gameboards/${event.currentTarget.id}`)
  }

  onGameDelete= (event) => {
    const id = event.currentTarget.id
    const { msgAlert } = this.props
    gameboardDelete(id, this.state.user)
      .then(() => {
        const updatedGameboards = this.state.gameboards.filter(gameboard => {
          return gameboard._id !== id
        })
        this.setState({
          gameboards: updatedGameboards
        })
        this.forceUpdate()
      })
      .then(() => msgAlert({
        heading: 'Game deleted',
        message: 'You have successfully deleted a game!',
        variant: 'success'
      }))
      .catch(error => msgAlert({
        heading: 'Failed to delete game. Error: ' + error.message,
        message: 'Your game did not delete. Please try again.',
        variant: 'danger'
      }))
  }

  componentDidMount () {
    const { msgAlert } = this.props
    gameboardIndex(this.state.user) // axios request
      .then(res => {
        this.setState({
          gameboards: res.data.gameboards
        })
      })
      .catch(error => msgAlert({
        heading: 'Failed to load game history. Error: ' + error.message,
        message: 'Your game history could not load. Please try again.',
        variant: 'danger'
      }))
  }

  render () {
    if (this.state.gameboards.length > 0) {
      return (
        <div className="row h-100 board">
          {this.state.gameboards.map(gameboard => {
            const categories =
              _.uniqBy(gameboard.questions, 'category')
                .map(q => q.category)
            return (
              <div id={gameboard._id} key={gameboard._id} className="col-4 box">
                <ul>
                  <li>{'Categories: ' + categories}</li>
                  <li>{'Score: ' + gameboard.totalScore}</li>
                  <li>{gameboard.isOver ? 'Status: Complete' : 'Status: NOT complete'}</li>
                </ul>
                <button id={gameboard._id} onClick={this.onGameClick}>Resume Game</button>
                <button id={gameboard._id} onClick={this.onGameDelete}>Delete Game</button>
              </div>
            )
          })}
        </div>
      )
    }
    return (
      <div>
        <h1>No games found...</h1>
      </div>
    )
  }
}

export default withRouter(GameHistory)
