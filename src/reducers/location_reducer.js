import { UPDATE_LOCATION, SET_LOCATION_CHANGE_TYPE } from '../actions/types'

const initialState = {
  routerLocation: '/'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOCATION:
    return { routerLocation: action.payload }
    break
  }
  return { ...state }
}
