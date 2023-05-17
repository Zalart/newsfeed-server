const express = require('express')

const router = express.Router()

router.get('/profile', (req, res, next) => {
    console.log('profile route')
})

module.exports = router
