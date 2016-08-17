import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import materialUIReducers from './material_ui_reducers'

const rootReducer = combineReducers({
  form: formReducer,
  material_ui: materialUIReducers
})

export default rootReducer
