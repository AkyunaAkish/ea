import {
  TOGGLE_SIDE_NAV
} from '../../types'

export default function(bool) {
  return {
    type: TOGGLE_SIDE_NAV,
    payload: bool
  }
}
