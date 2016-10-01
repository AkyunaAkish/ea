import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class AddBlog extends Component {

  render() {
    return (
      <div>
        <h1>AddBlog</h1>
      </div>
    )
  }
}

export default connect(null, actions)(AddBlog)
