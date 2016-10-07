import axios from 'axios'
import { HOST } from './constants'

export default function(packagedBlog) {
  return axios.post(`${HOST}/blogs/insertBlog`, { user: {
    token: window.localStorage['token'],
    user_id: window.localStorage['user_id'],
    username: window.localStorage['username']
  }, blog: packagedBlog })
}
