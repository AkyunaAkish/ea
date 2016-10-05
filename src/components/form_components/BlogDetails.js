import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import {
  Paper,
  TextField,
  FlatButton,
  RaisedButton
} from 'material-ui'

class BlogDetails extends Component {

  inputChange(type,e, val) {
    if(type.title) {
      this.props.updateBlogDetails({
        title: val,
        thumbnail_url: this.props.thumbnail_url
      })
    }
    if(type.thumbnail) {
      this.props.updateBlogDetails({
        title: this.props.title,
        thumbnail_url: val
      })
    }
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
            <h1>Blog Details</h1>
          </div>
          <TextField
            className='authTextField'
            type='text'
            style={textFieldStyle}
            floatingLabelText='Title'
            hintText='Title'
            onChange={this.inputChange.bind(this, {title: true})}
            />
          <TextField
            className='authTextField'
            type='text'
            style={textFieldStyle}
            floatingLabelText='Thumbnail URL'
            hintText='Thumbnail URL'
            onChange={this.inputChange.bind(this, {thumbnail: true})}
            />
        </Paper>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.add_blog_reducer.blogDetails.title,
    thumbnail_url: state.add_blog_reducer.blogDetails.thumbnail_url
  }
}

export default connect(mapStateToProps, actions)(BlogDetails)
