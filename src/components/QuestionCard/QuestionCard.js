import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

class QuestionCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      question: props.value
    }
  }
  render () {
    return (
      <Card className="col-4 box question">
        {this.state.question.score}
      </Card>
    )
  }
}

export default QuestionCard
