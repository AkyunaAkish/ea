import axios from 'axios'
import { HOST } from '../../../helpers/constants'

import {
  EDIT_NOTIFICATIONS
} from '../../types'

export default function() {
  return {
    type: EDIT_NOTIFICATIONS,
    payload: null
  }
}
