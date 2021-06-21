import React, { Fragment, Component } from 'react'
import { Card } from 'react-bootstrap'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import AnswerCard from '../AnswerCard/AnswerCard'

class QuestionCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      question: props.value,
      open: false,
      isAnswered: false,
      gameboard: props.gameboard
    }
    this.updateGameboard = props.updateGameboard
  }
  onOpenModal = () => {
    if (!this.state.isAnswered) {
      this.setState({ open: true })
    }
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  handleAnswerClick = (event) => {
    if (this.state.isAnswered) {
      return
    }
    this.setState({ isAnswered: true })

    const clickedAnswer = this.state.question.answers.find(answer => answer._id === event.target.id)

    if (clickedAnswer.isCorrect) {
      event.target.style.backgroundColor = 'green'
    } else {
      event.target.style.backgroundColor = 'red'
    }
    this.updateGameboard(this.state.question, clickedAnswer)
    setTimeout(() => {
      this.onCloseModal()
    }, 1800)
  }

  isAnswered = (questionId) => {
    const result = this.state.gameboard.responses.some(response => response.question[0] === questionId || this.state.isAnswered)
    return result
  }

  render () {
    return (
      <Fragment>
        <Card className="col-4 box question" onClick={this.onOpenModal}>
          {this.isAnswered(this.state.question._id) ? '' : this.state.question.score}
        </Card>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <h2>{this.state.question.title}</h2>
          {this.state.question.answers.map(answer => (
            <div key={answer.answerText}>
              <AnswerCard onClick={this.handleAnswerClick} value={answer}/>
            </div>
          ))}
        </Modal>
      </Fragment>
    )
  }
}
export default QuestionCard
