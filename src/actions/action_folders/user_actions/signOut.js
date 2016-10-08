import {
  SIGN_OUT
} from '../../types'

export default function() {
  delete window.localStorage['user_id']
  delete window.localStorage['username']
  delete window.localStorage['token']
  return {
    type: SIGN_OUT,
    payload: null
  }
}
