import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {
  Drawer,
  MenuItem,
  Paper,
  TextField,
  FlatButton,
  RaisedButton,
  Menu,
  AppBar,
  Tabs,
  Tab
} from 'material-ui'

import { withRouter } from 'react-router'

import generateID from '../helpers/generateID'

import BlogDetails from './form_components/BlogDetails'
import BlogHeader from './form_components/BlogHeader'
import BlogImg from './form_components/BlogImg'
import BlogLink from './form_components/BlogLink'
import BlogParagraph from './form_components/BlogParagraph'

class AddBlog extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  confirmOnPageExit(e) {
    e = e || window.event
    const message = 'If you navigate away from this page you will lose the changes you have made, navigate anyways?'
    if (e) {
      e.returnValue = message
    }
    return message
  }

  componentWillMount() {
    window.onbeforeunload = this.confirmOnPageExit

    this.props.router.setRouteLeaveHook(this.props.route, () => {
      this.props.setCurrentTab(12)
      return 'If you navigate away from this page you will lose the changes you have made, navigate anyways?'
    })

    this.checkToRedirect()
  }

  componentWillUnmount() {
    window.onbeforeunload = null
  }

  checkToRedirect() {
    this.props.checkIfSignedIn().payload
    .then((resolve) => {
      if(!resolve.payload || window.localStorage['username'] !== 'elena') {
        this.context.router.push('/')
      }
    })
  }

  componentWillUpdate(nextProps) {
    this.props.checkIfSignedIn().payload
    .then((resolve) => {
      if(!resolve.payload || window.localStorage['username'] !== 'elena') {
        this.context.router.push('/')
      }
    })
  }

  addFormComponent(type) {
    switch (type) {
      case 'h1':
      this.props.addFormComponent({
        id: generateID(),
        type: 'Header',
        component: BlogHeader
      })
      break
      case 'p':
      this.props.addFormComponent({
        id: generateID(),
        type: 'Paragraph',
        component: BlogParagraph
      })
      break
      case 'a':
      this.props.addFormComponent({
        id: generateID(),
        type: 'Link',
        component: BlogLink
      })
      break
      case 'img':
      this.props.addFormComponent({
        id: generateID(),
        type: 'Image',
        component: BlogImg
      })
      break
    }
  }

  deleteFormComponent(component) {
    if(confirm(`Are you sure you want to delete this ${component.type}?`)) {
      this.props.deleteFormComponent(component.id)
    }
  }

  renderFormComponents() {
    return this.props.formComponents.map((formComponent) => {
      const Component = formComponent.component
      return (
        <Component key={formComponent.id} deleteButton={
            <FlatButton
              key={formComponent.id}
              label={`DELETE ${formComponent.type}`}
              className='authButton formComponentDeleteButton'
              keyboardFocused={true}
              onTouchTap={this.deleteFormComponent.bind(this, {type: formComponent.type, id: formComponent.id})}
              />}/>
          )
        })
      }

      render() {
        const underLineStyle = {
          backgroundColor: 'rgb(201,249,253)'
        }

        return (
          <div className='addBlogContainer'>
            <AppBar
              className='navBar secondaryNavBar'
              title={[
                <Tabs
                  key={1}
                  inkBarStyle={underLineStyle}
                  >
                  <Tab
                    label='<h1>'
                    className='navTabs'
                    onActive={this.addFormComponent.bind(this, 'h1')}
                    />
                  <Tab
                    label='<p>'
                    className='navTabs'
                    onActive={this.addFormComponent.bind(this, 'p')}
                    />
                  <Tab
                    label='<a>'
                    className='navTabs'
                    onActive={this.addFormComponent.bind(this, 'a')}
                    />
                  <Tab
                    label='<img>'
                    className='navTabs'
                    onActive={this.addFormComponent.bind(this, 'img')}
                    />
                </Tabs>
              ]}
              showMenuIconButton={false}
              />


            <BlogDetails />

            {this.renderFormComponents()}

            <div className='submitButtonContainer'>
              <FlatButton
                key={0}
                label='SUBMIT'
                className='authButton submitButton'
                keyboardFocused={true}
                onTouchTap={() => alert('yo')}
                />
            </div>

          </div>
        )
      }
    }

    function mapStateToProps(state) {
      return {
        formComponents: state.add_blog_reducer.formComponents
      }
    }

    export default withRouter(connect(mapStateToProps, actions)(AddBlog))
