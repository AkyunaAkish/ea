import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
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

const renderTextInput = (field) => {
  const textFieldStyle = {
    width: '70%'
  }
  return (
    <TextField
      className='authTextField'
      type={field.type}
      style={textFieldStyle}
      floatingLabelText={field.label}
      hintText={field.label}
      errorText={field.meta.touched ? field.meta.error : null}
      {...field.input}
      />
  )
}

class SignIn extends Component {

  onSubmit(formData) {
    console.log('FORM SIGN IN DATA!!!!', formData)
  }

  render() {
    const { handleSubmit } = this.props

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
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field name='email' type='email' component={renderTextInput} label='Email'/>
            <Field name='password' type='password' component={renderTextInput} label='Password'/>
            <RaisedButton
              label='SIGN IN'
              className='authButton'
              type='submit'
              style={raisedButtonStyle} />
          </form>
        </Paper>
      </div>
    )
  }
}

function validate(values) {
  const errors = {}
  if (!values.email) errors.email = 'Please enter your email'
  if (!values.password) errors.password = 'Please enter your password'
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if(!re.test(values.email) && values.email) errors.email = 'Please enter a valid email address'
  return errors
}

export default connect(null, null)(reduxForm({
  form: 'SignIn',
  fields: ['username', 'email', 'password', 'confirmpassword', 'notifications'],
  validate: validate
})(SignIn))
