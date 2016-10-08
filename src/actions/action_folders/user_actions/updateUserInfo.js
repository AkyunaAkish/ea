import {
  UPDATE_USER_INFO
} from '../../types'

export default function(userInfo) {
  return {
    type: UPDATE_USER_INFO,
    payload: userInfo
  }
}
