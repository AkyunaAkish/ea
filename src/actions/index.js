import axios from 'axios'
import { HOST } from '../helpers/constants'

import {
  TOGGLE_TABS,
  TOGGLE_SIDE_NAV,
  SIGN_IN,
  SIGN_UP,
  UPDATE_LOCATION,
  SET_CURRENT_TAB
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

export function signIn(userInfo) {
  const request = axios.post(`${HOST}/users/signIn`, userInfo)

  return {
    type: SIGN_IN,
    payload: request
  }
}

export function signUp(userInfo) {
  const request = axios.post(`${HOST}/users/signUp`, userInfo)
  return request
}

export function updateLocation(newLocation) {
  return {
    type: UPDATE_LOCATION,
    payload: newLocation
  }
}

export function setCurrentTab(currentTab) {
  console.log('CURRENT TAB!!!', currentTab);
  return {
    type: SET_CURRENT_TAB,
    payload: currentTab
  }
}
