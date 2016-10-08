import {
  UPDATE_BLOG_DETAILS
} from '../../types'

export default function(blogDetails) {
  return {
    type: UPDATE_BLOG_DETAILS,
    payload: blogDetails
  }
}
