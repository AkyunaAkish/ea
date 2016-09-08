import axios from 'axios'
import { HOST } from '../helpers/constants'

import {
  TOGGLE_TABS,
  TOGGLE_SIDE_NAV,
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  UPDATE_LOCATION,
  SET_CURRENT_TAB,
  TOGGLE_SIGN_IN_DIALOG,
  TOGGLE_SIGN_UP_DIALOG
} from './types'


export function toggleTabs(bool) {
  return {
    type: TOGGLE_TABS,
    payload: bool
  }
}

export function toggleSideNav(bool) {
  return {
    type: TOGGLE_SIDE_NAV,
    payload: bool
  }
}

export function toggleSignInDialog(bool, dialogValue) {
  return {
    type: TOGGLE_SIGN_IN_DIALOG,
    payload: {
      bool: bool,
      dialogValue: dialogValue
    }
  }
}

export function toggleSignUpDialog(bool, dialogValue = '') {
  console.log('TOGGLE SIGNUP DIALOG', bool, dialogValue);
  return {
    type: TOGGLE_SIGN_UP_DIALOG,
    payload: {
      bool: bool,
      dialogValue: dialogValue
    }
  }
}

export function signIn(userInfo) {
  const request = axios.post(`${HOST}/users/signIn`, userInfo)
  return {
    type: SIGN_IN,
    payload: request
  }
}

export function signUp(userInfo) {
  const request = axios.post(`${HOST}/users/signUp`, userInfo)
  return {
    type: SIGN_UP,
    payload: request
  }
}

export function signOut() {
  delete window.localStorage['user_id']
  delete window.localStorage['username']
  delete window.localStorage['token']
  return {
    type: SIGN_OUT
  }
}

export function updateLocation(newLocation) {
  return {
    type: UPDATE_LOCATION,
    payload: newLocation
  }
}

export function setCurrentTab(currentTab) {
  return {
    type: SET_CURRENT_TAB,
    payload: currentTab
  }
}
