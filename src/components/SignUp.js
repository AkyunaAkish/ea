import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, change } from 'redux-form'
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
  RaisedButton,
  Checkbox
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

const renderCheckbox = ({ input, label }) => {
  return (
    <Checkbox
      label={label}
      checked={input.value ? true : false}
      onCheck={input.onChange}
      className='signUpCheckBox'/>
  )
}

class SignUp extends Component {

  onSubmit(formData) {
    // console.log('FORM SIGN UP DATA!!!!', formData)
  }
  componentWillMount() {
    this.props.changeFieldValue('notifications', true)
  }

  render() {
    const { handleSubmit } = this.props

    const raisedButtonStyle = {
      margin: 12
    }

    const checkBoxStyle = {
      block: {
        maxWidth: 250
      },
      checkbox: {
        marginBottom: 16
      }
    }

    return (
      <div className='authContainer'>
        <Card className='authCard' key={0}>
          <CardMedia
            overlay={<CardTitle title='SIGN UP' />}
            >
          </CardMedia>
        </Card>
        <Paper className='authForm' zDepth={5}>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field name='username' type='text' component={renderTextInput} label='User Name'/>
            <Field name='email' type='email' component={renderTextInput} label='Email'/>
            <Field name='password' type='password' component={renderTextInput} label='Password'/>
            <Field name='confirmpassword' type='password' component={renderTextInput} label='Re-Type Password'/>
            <Field
              name='notifications'
              value={true}
              component={renderCheckbox}
              label='Get email notifications when new blog posts are published?'/>
            <RaisedButton
              label='SIGN UP'
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

  if (!values.username) errors.username = 'Please enter your user name'
  if (values.username && values.username.length > 20) errors.username = 'Username cannot exceed 20 characters'

  if (!values.email) errors.email = 'Please enter your email'
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if(!re.test(values.email) && values.email) errors.email = 'Please enter a valid email address'

  if (!values.password) errors.password = 'Please enter your password'
  if (!values.confirmpassword) errors.confirmpassword = 'Please re-enter your password'
  if (values.confirmpassword !== values.password && values.confirmpassword) errors.confirmpassword = 'This password does not match'

  return errors
}

function mapDispatchToProps(dispatch) {
  return {
    changeFieldValue: function(field, value) {
      dispatch(change('SignUp', field, value))
    }
  }
}

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'SignUp',
  fields: ['username', 'email', 'password', 'confirmpassword', 'notifications'],
  validate: validate
})(SignUp))
