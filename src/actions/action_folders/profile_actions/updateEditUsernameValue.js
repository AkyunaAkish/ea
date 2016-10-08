import {
  UPDATE_EDIT_USERNAME_VALUE
} from '../../types'

export default function(value) {
  return {
    type: UPDATE_EDIT_USERNAME_VALUE,
    payload: value
  }
}
