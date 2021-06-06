/* CREATE - create a gameboard */

import React, { useState /*, useEffect */ } from 'react'
// import { Link } from 'react-router-dom'
import { Button, Container, Spinner, Card } from 'react-bootstrap'
import { gameboardCreate } from '../../api/gameboards'
// import messages from '../AutoDismissAlert/messages'

const GameboardCreate = props => {
  const [gameboard, setGameboard] = useState(null)


  const handleSubmit = event => {
    event.preventDefault()

    gameboardCreate(gameboard, props.user) // axios request to API
      .then(res => setGameboard(res.data.gameboard))
  }

  // useEffect(() => {
  //   event.preventDefault()
  //   gameboardCreate(props.match.params.id) // axios request to API
  //     .then(res => setGameboard(res.data.gameboard))
  //     .catch(console.error)
  // }, [])

  // if a gameboard did not load, show the loading animation
  if (!gameboard) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }
}

export default GameboardCreate
