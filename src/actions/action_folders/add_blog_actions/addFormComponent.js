import {
  ADD_FORM_COMPONENT
} from '../../types'

export default function(formComponent) {
  return {
    type: ADD_FORM_COMPONENT,
    payload: formComponent
  }
}
