import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Blog extends Component {

  render() {
    return (
      <div>
        <h1>Blog</h1>
      </div>
    )
  }
}

export default connect(null, actions)(Blog)
