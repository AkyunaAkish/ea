import React, { Component } from 'react'
import {
  Paper,
  TextField,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  FlatButton,
  RaisedButton
} from 'material-ui'

class SignIn extends Component {
  render() {
    const textFieldStyle = {
      width: '70%'
    }

    const raisedButtonStyle = {
      margin: 12
    }

    return (
      <div className='authContainer'>
        <Card className='authCard'>
          <CardMedia
            overlay={<CardTitle title='SIGN IN' />}
            >
          </CardMedia>
        </Card>
        <Paper className='authForm' zDepth={5}>
          <TextField
            className='authTextField'
            style={textFieldStyle}
            floatingLabelText='Email'
            hintText='Email'
            errorText='This field is required'
            />
          <TextField
            className='authTextField'
            style={textFieldStyle}
            floatingLabelText='Password'
            hintText='Password'
            errorText='This field is required'
            />
          <RaisedButton
            label='SIGN IN'
            className='authButton'
            style={raisedButtonStyle} />
        </Paper>
      </div>
    )
  }
}

export default SignIn
