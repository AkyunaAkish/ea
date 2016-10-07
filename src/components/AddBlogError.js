import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {
  Paper
} from 'material-ui'

class AddBlogError extends Component {
  render() {
    return (
      <div className='addBlogContainer'>
        <Paper className='addBlogPaper' zDepth={5}>
          <div className='paperHeaderContainer'>
            <h1 className='errorText'>ERROR</h1>
          </div>
          <h5 className='errorText errorHeader'>
            {this.props.error}
          </h5>
        </Paper>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    error: state.add_blog_reducer.error
  }
}

export default connect(mapStateToProps, actions)(AddBlogError)
