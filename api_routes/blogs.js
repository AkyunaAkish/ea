const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({blogs: 'blogs'})
})

module.exports = router
