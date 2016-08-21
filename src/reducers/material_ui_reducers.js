import { TOGGLE_TABS, TOGGLE_SIDE_NAV } from '../actions/types'
import { List, Map } from 'immutable'

const initialState = Map({
  showTabs: true,
  showSideNav: false,
  initialTab: 0
})

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_TABS:
    state = state.set('showTabs', action.payload)
    break
    case TOGGLE_SIDE_NAV:
    state = state.set('showSideNav', action.payload)
    break
  }
  return state
}
