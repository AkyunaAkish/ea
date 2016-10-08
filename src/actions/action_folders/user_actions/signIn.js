import axios from 'axios'
import { HOST } from '../../../helpers/constants'

import {
  SIGN_IN
} from '../../types'

export default function(userInfo) {
  const request = axios.post(`${HOST}/users/signin`, userInfo)
  return {
    type: SIGN_IN,
    payload: request
  }
}
