import React, { Component, PropTypes } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import {
  AppBar,
  Tabs,
  Tab,
  Drawer,
  MenuItem
} from 'material-ui'

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      initialTab: 0
    }
    
    switch (this.props.location.pathname) {
      case '/':
      this.state.initialTab = 0
      break
      case '/signin':
      this.state.initialTab = 1
      break
      case '/signup':
      this.state.initialTab = 2
      break
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  checkDimensions(dimensions) {
    if (dimensions < 450) {
      this.props.toggleTabs(false)
    } else {
      if (this.props.showSideNav) {
        this.toggleSideNav()
      }
      switch (this.props.location.pathname) {
        case '/':
        this.setState({
          initialTab: 0
        })
        break
        case '/signin':
        this.setState({
          initialTab: 1
        })
        break
        case '/signup':
        this.setState({
          initialTab: 2
        })
        break
      }
      this.props.toggleTabs(true)
    }
  }

  componentWillMount() {
    this.checkDimensions(window.innerWidth)
    window.addEventListener('resize', () => {
      this.checkDimensions(window.innerWidth)
    })
  }

  toggleSideNav() {
    this.props.toggleSideNav(!this.props.showSideNav)
  }

  switchComponent(link) {
    this.context.router.push(link)
    if (this.props.showSideNav) {
      this.toggleSideNav()
    }
  }


  render() {
    const underLineStyle = {
      backgroundColor: 'rgb(201,249,253)'
    }

    return (
      <div>
        <AppBar
          className='navBar'
          title={this.props.showTabs ? <img src='images/ElenaAkishLotus.png' className='navLogo'/> : null}
          iconElementRight={!this.props.showTabs ? <img src='images/ElenaAkishLotus.png' className='navLogo'/> : null}
          showMenuIconButton={!this.props.showTabs}
          onLeftIconButtonTouchTap={this.toggleSideNav.bind(this)}
          children={this.props.showTabs ? [
            <Tabs
              key={1}
              initialSelectedIndex={this.state.initialTab}
              inkBarStyle={underLineStyle}
              >
              <Tab
                label='BLOG'
                className='navTabs'
                onClick={() => this.switchComponent('/')}
                />
              <Tab
                label='SIGN IN'
                className='navTabs'
                onClick={() => this.switchComponent('/signin')}
                />
              <Tab
                label='SIGN UP'
                className='navTabs'
                onClick={() => this.switchComponent('/signup')}
                />
            </Tabs>
          ] : []}
          />

        <Drawer
          open={this.props.showSideNav}
          docked={false}
          onRequestChange={() => this.toggleSideNav()}
          containerClassName='sideNav'
          >
          <MenuItem
            className='sideNavItem'
            onClick={this.toggleSideNav.bind(this)}
            id='closeNavItem'>
            <p className='iconText'>CLOSE MENU</p>
          </MenuItem>
          <MenuItem
            className='sideNavItem'
            onClick={() => this.switchComponent('/')}>
            BLOG
          </MenuItem>
          <MenuItem
            className='sideNavItem'
            onClick={() => this.switchComponent('/signin')}>
            SIGN IN
          </MenuItem>
          <MenuItem
            className='sideNavItem'
            onClick={() => this.switchComponent('/signup')}>
            SIGN UP
          </MenuItem>
        </Drawer>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    showTabs: state.material_ui.get('showTabs'),
    showSideNav: state.material_ui.get('showSideNav')
  }
}

export default connect(mapStateToProps, actions)(Layout)
