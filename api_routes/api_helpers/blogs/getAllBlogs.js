require('dotenv').config()
var knex = require('../../../db_config/knex')

exports.getAllBlogs = function() {
  return new Promise(function(resolve, reject) {
    return knex('blogs')
    .then(function(blogs) {
      resolve(blogs)
    })
    .catch(function(err) {
      reject(err)
    })
  })
}
