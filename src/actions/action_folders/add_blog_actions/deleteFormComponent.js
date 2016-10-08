import {
  DELETE_FORM_COMPONENT
} from '../../types'

export default function(formComponentID) {
  return {
    type: DELETE_FORM_COMPONENT,
    payload: formComponentID
  }
}
