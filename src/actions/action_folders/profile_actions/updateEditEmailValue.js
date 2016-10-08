import {
  UPDATE_EDIT_EMAIL_VALUE
} from '../../types'

export default function(value) {
  return {
    type: UPDATE_EDIT_EMAIL_VALUE,
    payload: value
  }
}
