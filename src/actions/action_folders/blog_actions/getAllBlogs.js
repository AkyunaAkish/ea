import axios from 'axios'
import { HOST } from '../../../helpers/constants'

import {
  GET_ALL_BLOGS
} from '../../types'

export default function() {
  const request = axios.get(`${HOST}/blogs`)
  return {
    type: GET_ALL_BLOGS,
    payload: request
  }
}
