import {
  UPDATE_BLOG_DETAILS,
  ADD_FORM_COMPONENT,
  UPDATE_FORM_COMPONENT,
  ADD_ERROR,
  DELETE_FORM_COMPONENT
} from '../actions/types'

const initialState = {
  blogDetails: {
    title: '',
    thumbnail_url: ''
  },
  formComponents: [],
  error: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BLOG_DETAILS:
    return { ...state, blogDetails: action.payload }
    break
    case ADD_FORM_COMPONENT:
    return { ...state, formComponents: [ ...state.formComponents, action.payload ] }
    break
    case ADD_ERROR:
    return { ...state, error: action.payload }
    break
    case UPDATE_FORM_COMPONENT:
    state = { ...state, formComponents: state.formComponents.map((component) => {
      if (component.id === action.payload.id) {
        component.content = action.payload.content
      }
      return component
    })
  }
  window.localStorage.blogDevelopmentContent = JSON.stringify(state)
  return state
  break
  case DELETE_FORM_COMPONENT:
  return { ...state, formComponents: [
    ...state.formComponents.filter((component) => component.id !== action.payload)
  ]
}
break
}
return { ...state }
}
