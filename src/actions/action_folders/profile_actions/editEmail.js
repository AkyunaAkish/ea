import axios from 'axios'
import { HOST } from '../../../helpers/constants'

import {
  EDIT_EMAIL
} from '../../types'

export default function() {
  return {
    type: EDIT_EMAIL,
    payload: null
  }
}
