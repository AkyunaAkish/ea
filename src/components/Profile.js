import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Profile extends Component {

  render() {
    return (
      <div>
        <h1>Profile</h1>
      </div>
    )
  }
}

export default connect(null, actions)(Profile)
