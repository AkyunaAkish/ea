// material ui actions
import toggleTabs from './action_folders/material_ui_actions/toggleTabs'
import setCurrentTab from './action_folders/material_ui_actions/setCurrentTab'
import toggleSideNav from './action_folders/material_ui_actions/toggleSideNav'
import toggleSignInDialog from './action_folders/material_ui_actions/toggleSignInDialog'
import toggleSignUpDialog from './action_folders/material_ui_actions/toggleSignUpDialog'

export {
  toggleTabs,
  setCurrentTab,
  toggleSideNav,
  toggleSignInDialog,
  toggleSignUpDialog
}

// user actions
import signUp from './action_folders/user_actions/signUp'
import signIn from './action_folders/user_actions/signIn'
import signOut from './action_folders/user_actions/signOut'
import updateUser from './action_folders/user_actions/updateUserInfo'
import checkIfSignedIn from './action_folders/user_actions/checkIfSignedIn'

export {
  signUp,
  signIn,
  signOut,
  updateUser,
  checkIfSignedIn
}

// blog actions
import getAllBlogs from './action_folders/blog_actions/getAllBlogs'

export {
  getAllBlogs
}

// add blog actions
import addError from './action_folders/add_blog_actions/addError'
import addFormComponent from './action_folders/add_blog_actions/addFormComponent'
import deleteFormComponent from './action_folders/add_blog_actions/deleteFormComponent'
import updateBlogDetails from './action_folders/add_blog_actions/updateBlogDetails'
import updateFormComponent from './action_folders/add_blog_actions/updateFormComponent'

export {
  addError,
  addFormComponent,
  deleteFormComponent,
  updateBlogDetails,
  updateFormComponent
}

// profile actions
import editEmail from './action_folders/profile_actions/editEmail'
import editUsername from './action_folders/profile_actions/editUsername'
import editNotifications from './action_folders/profile_actions/editNotifications'
import toggleEditEmail from './action_folders/profile_actions/toggleEditEmail'
import toggleEditUsername from './action_folders/profile_actions/toggleEditUsername'
import toggleEditNotifications from './action_folders/profile_actions/toggleEditNotifications'
import updateEditEmailValue from './action_folders/profile_actions/updateEditEmailValue'
import updateEditUsernameValue from './action_folders/profile_actions/updateEditUsernameValue'
import updateEditNotificationsValue from './action_folders/profile_actions/updateEditNotificationsValue'

export {
  editEmail,
  editUsername,
  editNotifications,
  toggleEditEmail,
  toggleEditUsername,
  toggleEditNotifications,
  updateEditEmailValue,
  updateEditUsernameValue,
  updateEditNotificationsValue
}
