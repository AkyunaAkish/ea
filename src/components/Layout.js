import React, { Component, PropTypes } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { Router } from 'react-router'
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

    // this.state = {
    //   currentTab: 0
    // }

    switch (this.props.location.pathname) {
      case '/':
      this.props.setCurrentTab(0)
      // this.state.currentTab = 0
      break
      case '/signin':
      this.props.setCurrentTab(1)
      // this.state.currentTab = 1
      break
      case '/signup':
      this.props.setCurrentTab(2)
      // this.state.currentTab = 2
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
        this.props.setCurrentTab(0)
        // this.setState({
        //   currentTab: 0
        // })
        break
        case '/signin':
        this.props.setCurrentTab(1)
        // this.setState({
        //   currentTab: 1
        // })
        break
        case '/signup':
        this.props.setCurrentTab(2)
        // this.setState({
        //   currentTab: 2
        // })
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

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.routerLocation !== nextProps.location.pathname) {
  //     // nextProps.updateLocation(nextProps.location.pathname)
  //     switch (this.props.location.pathname) {
  //       case '/':
  //       this.setState({
  //         currentTab: 0
  //       })
  //       break
  //       case '/signin':
  //       this.setState({
  //         currentTab: 1
  //       })
  //       break
  //       case '/signup':
  //       this.setState({
  //         currentTab: 2
  //       })
  //       break
  //     }
  //   }
  // }

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
    // this.setState({
    //   currentTab: tabValue
    // })
    this.props.setCurrentTab(tabValue)
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
              inkBarStyle={underLineStyle}
              value={this.props.currentTab}
              onChange={this.handleTabChange.bind(this)}
              >
              <Tab
                label='BLOG'
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
    showTabs: state.material_ui.showTabs,
    showSideNav: state.material_ui.showSideNav,
    routerLocation: state.location_reducer.routerLocation,
    currentTab: state.material_ui.currentTab
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleSideNav: actions.toggleSideNav,
    setCurrentTab: actions.setCurrentTab,
    toggleTabs: actions.toggleTabs
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Layout)
