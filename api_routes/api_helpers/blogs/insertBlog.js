require('dotenv').config()
var knex = require('../../../db_config/knex')
var validateUser = require('../users/validateUser').validateUser

exports.insertBlog = function(body) {
  return new Promise(function(resolve, reject) {
    validateUser(body.user)
    .then(function(resolved) {
      if (resolved.success && resolved.user.username === 'elena' &&
      body.blog && body.blog.title.length > 0 && typeof body.blog.title === 'string' &&
      body.blog.content.length > 0 && typeof body.blog.content === 'string' &&
      body.blog.thumbnail_url.length > 0 && typeof body.blog.thumbnail_url === 'string') {
        return knex('blogs')
        .insert({
          title: body.blog.title,
          thumbnail_url: body.blog.thumbnail_url,
          content: body.blog.content
        })
        .returning('*')
        .then(function(blog) {
          console.log('return from knex', blog)
          resolve(blog)
        })
        .catch(function(err) {
          console.log('err')
          reject(err)
        })
      } else {
        reject('Invalid user')
      }
    })
    .catch(function(rejected) {
      reject(rejected)
    })
  })
}
