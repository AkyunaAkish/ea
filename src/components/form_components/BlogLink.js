import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import {
  Paper,
  TextField,
  FlatButton,
  RaisedButton
} from 'material-ui'

class BlogLink extends Component {

  inputChange(e, val) {
    this.props.updateFormComponent({
      id: this.props.id,
      content: val
    })
  }

  render() {
    const textFieldStyle = {
      width: '50%',
      margin: '0 auto',
      display: 'block'
    }

    return (
      <div className='addBlogContainer'>
        <Paper className='addBlogPaper' zDepth={5}>
          <div className='paperHeaderContainer'>
            <h1>Link URL Section: #{this.props.index}</h1>
          </div>
          <TextField
            className='authTextField'
            type='text'
            style={textFieldStyle}
            floatingLabelText='Link URL'
            hintText='Link URL'
            onChange={this.inputChange.bind(this)}
            />
            <div className='deleteButtonContainer'>
              {this.props.deleteButton}
            </div>
        </Paper>
      </div>
    )
  }
}

export default connect(null, actions)(BlogLink)
