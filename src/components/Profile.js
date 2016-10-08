import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {
  Paper,
  RaisedButton,
  TextField,
  Checkbox
} from 'material-ui'

class Profile extends Component {

  componentWillMount() {
    this.props.updateEditUsernameValue(this.props.username)
    this.props.updateEditEmailValue(this.props.email)
    this.props.updateEditNotificationsValue(this.props.notifications)
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.editUsernameValue && !this.props.editEmailValue && this.props.editNotificationsValue === undefined) {
      this.props.updateEditUsernameValue(nextProps.username)
      this.props.updateEditEmailValue(nextProps.email)
      this.props.updateEditNotificationsValue(nextProps.notifications)
    }
  }

  renderEditUsername() {
    const textFieldStyle = {
      width: '50%',
      margin: '0 auto',
      display: 'block'
    }

    if (this.props.showEditUsername) {
      return (
        <div>
          <TextField
            className='authTextField'
            type='text'
            style={textFieldStyle}
            floatingLabelText='Edit Username'
            hintText='Edit Username'
            value={this.props.editUsernameValue}
            onChange={(e, val) => this.props.updateEditUsernameValue(val)} />
          <RaisedButton
            label='Submit Changes To Username'
            className='authButton profileButton'
            onTouchTap={() => console.log('submit username changes')} />
        </div>
      )
    }
  }

  renderEditEmail() {
    const textFieldStyle = {
      width: '50%',
      margin: '0 auto',
      display: 'block'
    }

    if (this.props.showEditEmail) {
      return (
        <div>
          <TextField
            className='authTextField'
            type='text'
            style={textFieldStyle}
            floatingLabelText='Edit Email'
            hintText='Edit Email'
            value={this.props.editEmailValue}
            onChange={(e, val) => this.props.updateEditEmailValue(val)} />
          <RaisedButton
            label='Submit Changes To Email'
            className='authButton profileButton'
            onTouchTap={() => console.log('submit email changes')} />
        </div>
      )
    }
  }

  renderEditNotifications() {
    if (this.props.showEditNotifications) {
      return (
        <div className='profileCheckboxContainer'>
          <Checkbox
            label='Receive notifications?'
            checked={this.props.editNotificationsValue}
            onCheck={(e, val) => this.props.updateEditNotificationsValue(val)}
            className='profileCheckbox'/>
          <RaisedButton
            label='Submit Changes To Notifications'
            className='authButton profileButton'
            onTouchTap={() => console.log('submit notifications changes')} />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className='profileContainer'>
          <Paper className='profilePaper' zDepth={5}>
            <div className='paperHeaderContainer'>
              <h1>Profile Details</h1>
            </div>
            <div className='profileDetailContainer'>
              <h3>Username: {this.props.username}</h3>

              {this.renderEditUsername()}

              <RaisedButton
                label={this.props.showEditUsername ? 'Close' : 'Edit Username'}
                className='authButton profileButton'
                onTouchTap={() => this.props.toggleEditUsername()} />
            </div>
            <div className='profileDetailContainer'>
              <h3>Email: {this.props.email}</h3>

              {this.renderEditEmail()}

              <RaisedButton
                label={this.props.showEditEmail ? 'Close' : 'Edit Email'}
                className='authButton profileButton'
                onTouchTap={() => this.props.toggleEditEmail()} />
            </div>
            <div className='profileDetailContainer'>
              <h3>Receive Notifications?: {this.props.notifications ? 'Yes' : 'No'}</h3>

              {this.renderEditNotifications()}

              <RaisedButton
                label={this.props.showEditNotifications ? 'Close' : 'Edit Notifications'}
                className='authButton profileButton'
                onTouchTap={() => this.props.toggleEditNotifications()} />
            </div>
          </Paper>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    username: state.user_reducer.user.username,
    email: state.user_reducer.user.email,
    notifications: state.user_reducer.user.notifications,
    showEditUsername: state.profile_reducer.showEditUsername,
    showEditEmail: state.profile_reducer.showEditEmail,
    showEditNotifications: state.profile_reducer.showEditNotifications,
    editUsernameValue: state.profile_reducer.editUsernameValue,
    editEmailValue: state.profile_reducer.editEmailValue,
    editNotificationsValue: state.profile_reducer.editNotificationsValue
  }
}

export default connect(mapStateToProps, actions)(Profile)
