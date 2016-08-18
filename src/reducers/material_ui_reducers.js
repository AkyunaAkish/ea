import { TOGGLE_TABS, TOGGLE_SIDE_NAV } from '../actions/types';

const initialState = {
  showTabs: true,
  showSideNav: false
}
export default function(state = initialState, action) {
  // copying state which only works of state doesn't have a reference to itself like 'this'
  // this causes the state to be immutable and returns a copy instead of the original reference
  // so that react-redux can perform properly
  state = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case TOGGLE_TABS:
    state.showTabs = action.payload
    break
    case TOGGLE_SIDE_NAV:
    state.showSideNav = action.payload
    break
  }
  return state
}
