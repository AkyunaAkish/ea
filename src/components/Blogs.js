import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Blogs extends Component {

  componentWillMount() {
    this.props.getAllBlogs()
  }

  renderBlogs() {
    return this.props.blogs.map((blog, i) => {
      return (
        <div key={i} className='col-md-3 blogGridItem'>
          <img src={blog.thumbnail_url} className='img-responsive' />
          <h3>{blog.title}</h3>
        </div>
      )
    }).reverse()
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          {this.renderBlogs()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    blogs: state.blog_reducer.blogs
  }
}

export default connect(mapStateToProps, actions)(Blogs)
