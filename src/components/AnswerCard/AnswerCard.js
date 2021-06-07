import React, { Component } from 'react'

class AnswerCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answer: props.value,
      gameboard: props.gameboard,
      onClick: props.onClick
    }
  }

  render () {
    return (
      <button id={this.state.answer._id} className="answer" onClick={this.state.onClick}>{this.state.answer.answerText}</button>
    )
  }
}

export default AnswerCard
