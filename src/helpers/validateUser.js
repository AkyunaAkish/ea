import axios from 'axios'
import { HOST } from './constants'

export default function() {
  return new Promise((resolve, reject) => {
    if (
      !window.localStorage['user_id'] &&
      !window.localStorage['username'] &&
      !window.localStorage['token']) {
        reject('You are not signed in')
      } else {

        const userInfo = {
          user_id: window.localStorage['user_id'],
          username: window.localStorage['username'],
          token: window.localStorage['token']
        }

        axios.post(`${HOST}/users/validateUser`, userInfo)
        .then((response) => {
          if (response.data.success) {
            if(response.data.user.username === 'elena') {
              resolve(true)
            } else {
              reject('You are not logged in as Elena and therefore cannot submit a blog post')
            }
          } else {
            reject('You are not logged in as Elena and therefore cannot submit a blog post')
          }
        })
        .catch((err) => {
          reject(err)
        })
      }
    })
  }
