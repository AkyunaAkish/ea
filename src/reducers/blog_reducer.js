import {
  GET_ALL_BLOGS
} from '../actions/types'

const initialState = {
  blogs: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_BLOGS:
    return { blogs: action.payload.data }
    break
  }
  return { ...state }
}
