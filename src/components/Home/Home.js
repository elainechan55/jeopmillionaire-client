import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: props.user
    }
  }

  onClick = (event) => {
    const history = this.props.history
    if (this.state.user) {
      history.push('/gameboards')
    } else {
      history.push('/sign-in')
    }
  }

  render () {
    return (
      <Fragment>
        <div className="centered">
          <div className="logo">JeopMillionaire!?</div>
          <button className="homeButton" onClick={this.onClick}>Play a Game!</button>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(Home)
