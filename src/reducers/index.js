import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import materialUIReducer from './material_ui_reducer'
import userReducer from './user_reducer'
import addBlogReducer from './add_blog_reducer'
import blogReducer from './blog_reducer'
import profileReducer from './profile_reducer'

const rootReducer = combineReducers({
  form: formReducer,
  material_ui: materialUIReducer,
  user_reducer: userReducer,
  add_blog_reducer: addBlogReducer,
  blog_reducer: blogReducer,
  profile_reducer: profileReducer
})

export default rootReducer
