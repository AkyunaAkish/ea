require('dotenv').config()
var knex = require('../../../db_config/knex')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')

exports.validateUser = function(body) {
  return new Promise(function(resolve, reject) {
    try {
      var decoded = jwt.verify(body.token, process.env.SECRET)
      if (Number(decoded.id) === Number(body.user_id)) {
        return knex('users')
        .where({
          id: decoded.id
        })
        .then(function(user){
          if (user.length > 0 && user[0].username.toLowerCase() === body.username) {
            delete user[0].password
            resolve({ success: decoded, user: user[0] })
          } else {
            throw Error('Token doesn\'t match user');
          }
        })
        .catch(function(err) {
          reject({ error: err })
        })
      } else {
        throw Error('Token doesn\'t match user');
      }
    }
    catch(err) {
      reject({ error: err.message })
    }
  })
}
