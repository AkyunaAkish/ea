import React, { Component } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { AppBar, Tabs, Tab } from 'material-ui'

class Layout extends Component {

  checkDimensions(dimensions) {
    if (dimensions < 414) {
      this.props.toggleTabs(false)
    } else {
      this.props.toggleTabs(true)
    }
  }
  
  componentWillMount() {
    this.checkDimensions(window.innerWidth)
    window.addEventListener('resize', () => {
      this.checkDimensions(window.innerWidth)
    })
  }


  render() {
    const underLineStyle = {
      backgroundColor: 'rgb(201,249,253)'
    }

    return (
      <div>

        <AppBar
          className='navBar'
          title={<img src='images/ElenaAkishLotus.png' className='navLogo'/>}
          showMenuIconButton={!this.props.showTabs}
          children={this.props.showTabs ? [
            <Tabs
              key={1}
              initialSelectedIndex={0}
              inkBarStyle={underLineStyle}
              >
              <Tab
                label='LOGIN'
                className='navTabs'
                />
              <Tab
                label='SIGN UP'
                className='navTabs'
                />
            </Tabs>
          ] : []}
          />
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    showTabs: state.material_ui.showTabs
  }
}

export default connect(mapStateToProps, actions)(Layout)
