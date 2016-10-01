var express = require('express')
var router = express.Router()
var knex = require('../db_config/knex')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')
var validateUser = require('./api_helpers/users/validateUser').validateUser

router.post('/signIn', function(req, res, next) {
  if (
    req.body.email && typeof req.body.email === 'string'
    && req.body.password && typeof req.body.password === 'string'
  ) {
    knex('users')
    .where({
      email: req.body.email
    })
    .first()
    .then(function(user) {
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        var user_obj = {id: user.id, username: user.username}
        var token = jwt.sign({ id: user.id}, process.env.SECRET)
        var userObj = {
          id: user_obj.id,
          username: user_obj.username,
          token: token
        }
        res.status(200).json({user: userObj})
      } else if(user){
        res.status(200).json({error: 'Email or password incorrect'})
      } else {
        res.status(200).json({error: `User with that email doesn\'t exist in the database`})
      }
    })
    .catch(function(err) {
      res.status(200).json({error: `User with that email doesn\'t exist in the database: ${err}`})
    })
  }
})

router.post('/signUp', function(req, res, next) {
  // check that the request body has the correct properties defined with the correct data types
  if (
    req.body.username && typeof req.body.username === 'string'
    && req.body.email && typeof req.body.email === 'string'
    && req.body.password && typeof req.body.password === 'string'
    && typeof req.body.notifications !== 'undefined' && typeof req.body.notifications === 'boolean'
  ) {
    // hash the password before inserting into the database
    var password_hash = bcrypt.hashSync(req.body.password, 10)
    // insert user into the database
    knex('users')
    .insert({
      username: req.body.username,
      email: req.body.email,
      password: password_hash,
      notifications: req.body.notifications
    })
    .returning('*')
    .then(function(user) {
      // if the user was inserted and returned by knex continue
      if (user[0]) {
        if (
          user[0].id && user[0].username
          && user[0].email && user[0].password
          && typeof user[0].notifications !== 'undefined' && user[0].created_at
        ) {
          // prepare object to send back new user's info to the front end with jwt
          try {
            var token = jwt.sign({ id: user[0].id }, process.env.SECRET)
            var newUser = {
              id: user[0].id,
              username: user[0].username,
              token: token
            }
            // send users data to the front end to start a jwt-based session
            res.status(200).json({ success: 'User successfully signed up', user: newUser })
          } catch (e) {
            res.status(200).json({ error: 'An error occurred when attempting to sign you up' })
          }
        }
      } else {
        // if user was not returned back properly from knex assume an issue occurred
        res.status(200).json({ error: 'An error occurred when attempting to sign you up' })
      }
    })
    .catch(function(err) {
      // if an error was thrown by knex with a uniqueness error code
      if (Number(err.code) === 23505) {
        var uniqueViolationColumn = err.constraint.split('_')
        uniqueViolationColumn = uniqueViolationColumn[1]
        res.status(200).json({ error: `${uniqueViolationColumn} already exists in the database` })
      } else {
        // any other type of knex error
        res.status(200).json({ error: 'An error occurred when attempting to sign you up' })
      }
    })
  } else {
    // if req.body didn't contain the correct defined properties or property data types were wrong
    res.status(200).json({ error: 'You did not properly fill out the sign up form' })
  }
})

router.post('/validateUser', function(req, res, next) {
  validateUser(req.body)
  .then(function(resolve) {
    res.status(200).json(resolve)
  })
  .catch(function(reject) {
    res.status(200).json(reject)
  })
})


module.exports = router
