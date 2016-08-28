import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import materialUIReducer from './material_ui_reducer'
import userReducer from './user_reducer'
import locationReducer from './location_reducer'

const rootReducer = combineReducers({
  form: formReducer,
  material_ui: materialUIReducer,
  user_reducer: userReducer,
  location_reducer: locationReducer
})

export default rootReducer
