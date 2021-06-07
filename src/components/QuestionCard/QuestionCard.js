import React, { Fragment, Component } from 'react'
import { Card } from 'react-bootstrap'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import AnswerCard from '../AnswerCard/AnswerCard'

class QuestionCard extends Component {
// const QuestionCard = props => {
  constructor (props) {
    super(props)
    this.state = {
      question: props.value,
      open: false,
      isAnswered: false
    }
    this.updateGameboard = props.updateGameboard

    // this.onOpenModal = this.onOpenModal.bind(this)
    // this.onCloseModal = this.onCloseModal.bind(this)
    // this.handleAnswerClick = this.handleAnswerClick.bind(this)
  }
  // const [question] = useState(props.value)
  // const [open, setOpen] = useState(false)
  onOpenModal = () => {
    if (!this.state.isAnswered) {
      this.setState({ open: true })
    }
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }
  // const onOpenModal = () => setOpen(true)
  // const onCloseModal = () => setOpen(false)

  // const [isAnswered, setIsAnswered] = useState(false)

  handleAnswerClick = (event) => {
    if (this.state.isAnswered) {
      return
    }
    this.setState({ isAnswered: true })

    console.log('event', event)
    const clickedAnswer = this.state.question.answers.find(answer => answer._id === event.target.id)

    if (clickedAnswer.isCorrect) {
      event.target.style.backgroundColor = 'green'
      // this.updateScore(this.state.question.score)
    } else {
      event.target.style.backgroundColor = 'red'
      // this.updateScore(-this.state.question.score)
    }
    this.updateGameboard(this.state.question, clickedAnswer)
  }

  render () {
    return (
      <Fragment>
        <Card className="col-4 box question" onClick={this.onOpenModal}>
          {this.state.isAnswered ? '' : this.state.question.score}
        </Card>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <h2>{this.state.question.title}</h2>
          {this.state.question.answers.map(answer => (
            // <h2 key="">{answer.answerText}</h2>
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
