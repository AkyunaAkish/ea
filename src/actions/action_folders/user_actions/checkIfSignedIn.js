import axios from 'axios'
import { HOST } from '../../../helpers/constants'
import updateUser from './updateUserInfo'

export default function() {
  return (dispatch) => {
    if (
      !window.localStorage['user_id'] &&
      !window.localStorage['username'] &&
      !window.localStorage['token']
    ) {
      dispatch(updateUser({
        signedIn: false,
        user: {}
      }))
      return {
        type: 'none',
        payload: new Promise((resolve, reject) => {
          resolve({ payload: false })
        })
      }
    }
    const userInfo = {
      user_id: window.localStorage['user_id'],
      username: window.localStorage['username'],
      token: window.localStorage['token']
    }
    return {
      type: 'none',
      payload: axios.post(`${HOST}/users/validateUser`, userInfo)
      .then((response) => {
        if (response.data.success) {
          dispatch(updateUser({
            signedIn: true,
            user: response.data.user
          }))
          return {
            type: 'none',
            payload: true
          }
        } else {
          return {
            type: 'none',
            payload: false
          }
        }
      })
      .catch((err) => {
        return {
          type: 'none',
          payload: false
        }
      })
    }
  }
}
