import {
  TOGGLE_SIGN_UP_DIALOG
} from '../../types'

export default function(bool, dialogValue = '') {
  return {
    type: TOGGLE_SIGN_UP_DIALOG,
    payload: {
      bool: bool,
      dialogValue: dialogValue
    }
  }
}
