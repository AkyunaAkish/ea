import {
  ADD_ERROR
} from '../../types'

export default function(error) {
  return {
    type: ADD_ERROR,
    payload: error
  }
}
