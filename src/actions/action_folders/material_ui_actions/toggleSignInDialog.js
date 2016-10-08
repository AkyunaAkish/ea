import {
  TOGGLE_SIGN_IN_DIALOG
} from '../../types'

export default function(bool, dialogValue) {
  return {
    type: TOGGLE_SIGN_IN_DIALOG,
    payload: {
      bool: bool,
      dialogValue: dialogValue
    }
  }
}
