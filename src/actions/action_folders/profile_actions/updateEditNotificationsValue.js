import {
  UPDATE_EDIT_NOTIFICATIONS_VALUE
} from '../../types'

export default function(value) {
  return {
    type: UPDATE_EDIT_NOTIFICATIONS_VALUE,
    payload: value
  }
}
