import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {
  Paper
} from 'material-ui'

class Blog extends Component {
  render() {
    return (
      <div>
        <Paper className='blogListItemPaper' zDepth={5}>
          <div className='paperHeaderContainer'>
            <h1>{this.props.title}</h1>
          </div>
          <img src={this.props.thumbnail_url}/>
        </Paper>
      </div>
    )
  }
}

export default connect(null, actions)(Blog)
