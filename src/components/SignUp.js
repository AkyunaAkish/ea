import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm, change, submitting, asyncValidating } from 'redux-form'
import * as actions from '../actions'
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
  static contextTypes = {
    router: PropTypes.object,
    store: PropTypes.object.isRequired
  }

  onSubmit(userData) {
    this.props.signUp(userData)
    .then((response) => {
      if (response.data.user) {
        if (
          response.data.user.id &&
          response.data.user.token &&
          response.data.user.username) {
            window.localStorage['user_id'] = response.data.user.id
            window.localStorage['username'] = response.data.user.username
            window.localStorage['token'] = response.data.user.token
            const { dispatch } = this.context.store
            const actions = bindActionCreators(this.props.setCurrentTab, dispatch)
            actions(0)
            this.context.router.push('/')
          } else {
            alert('Signup Failed: server could not add you to the database')
          }
        } else if(response.data.error){
          alert(`Signup Failed: ${response.data.error}`)
        }
      })
      .catch((err) => {
        alert(`Signup Failed: ${err}`)
      })
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
              <Field name='username' type='text' component={renderTextInput} label='Username'/>
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
                disabled={submitting || asyncValidating}
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

    if (!values.username) errors.username = 'Please enter your username'
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
      },
      signUp: actions.signUp,
      setCurrentTab: actions.setCurrentTab
    }
  }

  export default connect(null, mapDispatchToProps)(reduxForm({
    form: 'SignUp',
    fields: ['username', 'email', 'password', 'confirmpassword', 'notifications'],
    validate: validate
  })(SignUp))
