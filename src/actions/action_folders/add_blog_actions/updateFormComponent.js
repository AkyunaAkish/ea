import {
  UPDATE_FORM_COMPONENT
} from '../../types'

export default function(newContent) {
  return {
    type: UPDATE_FORM_COMPONENT,
    payload: newContent
  }
}
