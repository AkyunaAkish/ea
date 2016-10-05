import {
  UPDATE_BLOG_DETAILS,
  ADD_BLOG_SECTION,
  ADD_FORM_COMPONENT,
  DELETE_FORM_COMPONENT
} from '../actions/types'

const initialState = {
  blogDetails: {
    title: '',
    thumbnail_url: ''
  },
  blogPostSections: [],
  formComponents: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BLOG_DETAILS:
    return { ...state, blogDetails: action.payload }
    break
    case ADD_BLOG_SECTION:
    return { ...state, blogPost: [ ...state.blogPost, action.payload ] }
    break
    case ADD_FORM_COMPONENT:
    return { ...state, formComponents: [ ...state.formComponents, action.payload ] }
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
