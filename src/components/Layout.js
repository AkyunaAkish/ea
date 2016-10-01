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
import { browserHistory } from 'react-router'
import { determineTab } from '../helpers/determineTab'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.props.setCurrentTab(determineTab(this.props.location.pathname))
    this.props.checkIfSignedIn()
    setTimeout(() => {
      this.checkToRedirect()
    }, 500)
  }

  static contextTypes = {
    router: PropTypes.object
  }

  checkToRedirect() {
    this.props.checkIfSignedIn().payload
    .then((resolve) => {
      if(!resolve.payload && this.props.location.pathname === '/profile' || !resolve.payload && this.props.location.pathname === '/addPost') {
        this.context.router.push('/')
      }
    })
  }

  checkDimensions(dimensions) {
    if (dimensions < 450) {
      this.props.toggleTabs(false)
    } else {
      if (this.props.showSideNav) {
        this.toggleSideNav()
      }
      this.props.checkIfSignedIn()
      this.props.setCurrentTab(determineTab(this.props.location.pathname))
      this.props.toggleTabs(true)
    }
  }

  componentWillMount() {
    this.checkDimensions(window.innerWidth)
    window.addEventListener('resize', () => {
      this.checkDimensions(window.innerWidth)
    })
    browserHistory.listen((location) => {
      this.props.checkIfSignedIn()
      this.props.setCurrentTab(determineTab(location.pathname))
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

  handleTabChange(tabValue) {
    this.props.setCurrentTab(tabValue)
  }

  signOut() {
    console.log('SIGN OUT CALLED');
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
          children={this.props.showTabs && !this.props.signedIn ? [
            <Tabs
              key={1}
              inkBarStyle={underLineStyle}
              value={this.props.currentTab}
              onChange={this.handleTabChange.bind(this)}
              >
              <Tab
                label='BLOGS'
                value={0}
                className='navTabs'
                onClick={() => this.switchComponent('/')}
                />
              <Tab
                label='SIGN IN'
                value={1}
                className='navTabs'
                onClick={() => this.switchComponent('/signin')}
                />
              <Tab
                label='SIGN UP'
                value={2}
                className='navTabs'
                onClick={() => this.switchComponent('/signup')}
                />
            </Tabs>
          ] : this.props.signedIn && this.props.showTabs ? [
            <Tabs
              key={1}
              inkBarStyle={underLineStyle}
              value={this.props.currentTab}
              onChange={this.handleTabChange.bind(this)}
              >
              <Tab
                label='BLOGS'
                value={0}
                className='navTabs'
                onClick={() => this.switchComponent('/')}
                />
              <Tab
                label='PROFILE'
                value={1}
                className='navTabs'
                onClick={() => this.switchComponent('/profile')}
                />
              <Tab
                label='SIGN OUT'
                value={2}
                className='navTabs'
                onClick={() => this.signOut()}
                />
            </Tabs>
          ] : null}
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
            BLOGS
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
    showTabs: state.material_ui.showTabs,
    showSideNav: state.material_ui.showSideNav,
    routerLocation: state.location_reducer.routerLocation,
    currentTab: state.material_ui.currentTab,
    signedIn: state.user_reducer.signedIn
  }
}

export default connect(mapStateToProps, actions)(Layout)
