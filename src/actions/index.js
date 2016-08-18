import { TOGGLE_TABS, TOGGLE_SIDE_NAV } from './types'

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
