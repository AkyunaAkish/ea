import {
  TOGGLE_EDIT_USERNAME,
  TOGGLE_EDIT_EMAIL,
  TOGGLE_EDIT_NOTIFICATIONS,
  UPDATE_EDIT_USERNAME_VALUE,
  UPDATE_EDIT_EMAIL_VALUE,
  UPDATE_EDIT_NOTIFICATIONS_VALUE
} from '../actions/types'

const initialState = {
  showEditUsername: false,
  showEditEmail: false,
  showEditNotifications: false,
  editUsernameValue: '',
  editEmailValue: '',
  editNotificationsValue: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_EDIT_USERNAME:
    return { ...state, showEditUsername: !state.showEditUsername }
    break
    case TOGGLE_EDIT_EMAIL:
    return { ...state, showEditEmail: !state.showEditEmail }
    break
    case TOGGLE_EDIT_NOTIFICATIONS:
    return { ...state, showEditNotifications: !state.showEditNotifications }
    break
    case UPDATE_EDIT_USERNAME_VALUE:
    return { ...state, editUsernameValue: action.payload }
    break
    case UPDATE_EDIT_EMAIL_VALUE:
    return { ...state, editEmailValue: action.payload }
    break
    case UPDATE_EDIT_NOTIFICATIONS_VALUE:
    return { ...state, editNotificationsValue: action.payload }
    break
  }
  return { ...state }
}
