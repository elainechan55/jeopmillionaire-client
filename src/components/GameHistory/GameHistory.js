import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// import CategoryCard from '../CategoryCard/CategoryCard'
import { gameboardIndex } from '../../api/gameboard'

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
    console.log('GameClickEvent', event)
    // const gameboardToRedirectTo = this.state.gameboards.find(gameboard => gameboard._id === event.target.id)
    // this.setState({
    //   redirect: true,
    //   gameboardToRedirectTo: gameboardToRedirectTo
    // })
    history.push(`/gameboards/${event.target.id}`)
  }

  componentDidMount () {
    gameboardIndex(this.state.user)
      .then(res => {
        this.setState({
          gameboards: res.data.gameboards
        })
      })
      .catch(err => console.error(err))
  }

  render () {
    // if (this.state.redirect) {
    //   return (
    //     <Redirect to={{
    //       pathname: '/gameboards',
    //       state: { gameboard: this.state.gameboardToRedirectTo }
    //     }}/>
    //   )
    // }
    if (this.state.gameboards.length > 0) {
      return (
        <div>
          {this.state.gameboards.map(gameboard => (
            <div id={gameboard._id} onClick={this.onGameClick} key={gameboard._id} className="col-4 box category">{gameboard.isOver ? gameboard._id + ' Complete' : gameboard._id + ' NOT complete'}</div>
          ))}
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
