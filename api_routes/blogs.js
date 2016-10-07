var express = require('express')
var router = express.Router()
var insertBlog = require('./api_helpers/blogs/insertBlog').insertBlog
var getAllBlogs = require('./api_helpers/blogs/getAllBlogs').getAllBlogs

router.get('/', function(req, res, next) {
  getAllBlogs()
  .then(function(resolve) {
    res.status(200).json(resolve)
  })
  .catch(function(reject) {
    res.status(200).json(reject)
  })
})

router.post('/insertBlog', function(req, res, next) {
  insertBlog(req.body)
  .then(function(resolve) {
    res.status(200).json({ success: true, blog: resolve })
  })
  .catch(function(reject) {
    res.status(200).json({ error: reject })
  })
})

module.exports = router
