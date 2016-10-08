import {
  SET_CURRENT_TAB
} from '../../types'

export default function (currentTab) {
  return {
    type: SET_CURRENT_TAB,
    payload: currentTab
  }
}
