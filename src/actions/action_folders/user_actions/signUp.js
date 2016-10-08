import axios from 'axios'
import { HOST } from '../../../helpers/constants'

import {
  SIGN_UP
} from '../../types'

export default function(userInfo) {
  const request = axios.post(`${HOST}/users/signup`, userInfo)
  return {
    type: SIGN_UP,
    payload: request
  }
}
