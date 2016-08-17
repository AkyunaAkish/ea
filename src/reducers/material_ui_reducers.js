import { TOGGLE_TABS } from '../actions/types';

const initialState = {
  showTabs: true
}

export default function(state = initialState, action) {
  state = Object.create(state)
  switch (action.type) {
    case TOGGLE_TABS:
    state.showTabs = action.payload
    break
  }
  return state
}
