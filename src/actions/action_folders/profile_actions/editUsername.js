import axios from 'axios'
import { HOST } from '../../../helpers/constants'

import {
  EDIT_USERNAME
} from '../../types'

export default function() {
  return {
    type: EDIT_USERNAME,
    payload: null
  }
}
