import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Blogs extends Component {

  render() {
    return (
      <div>
        <h1>Blogs</h1>
      </div>
    )
  }
}

export default connect(null, actions)(Blogs)
