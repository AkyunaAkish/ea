import React, { Component } from 'react'

class Layout extends Component {
  render() {
    return (
      <div>
        <h1>Elena Akish</h1>
          {this.props.children}
        </div>
      )
    }
  }

  export default Layout
