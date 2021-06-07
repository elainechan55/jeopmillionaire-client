import React, { Component } from 'react'
// import { Card } from 'react-bootstrap'

class CategoryCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gameId: props.gameId
    }
  }
  render () {
    return (
      <div id={this.state.gameId} className="col-4 box category">{this.props.value}</div>
    )
  }
}

export default CategoryCard
