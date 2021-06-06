import React, { Component } from 'react'

class CategoryCard extends Component {
  render () {
    return (
      <div className="col-4 box category">{this.props.value}</div>
    )
  }
}

export default CategoryCard
