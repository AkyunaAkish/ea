import {
  TOGGLE_TABS
} from '../../types'

export default function(bool) {
  return {
    type: TOGGLE_TABS,
    payload: bool
  }
}
