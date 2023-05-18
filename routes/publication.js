const express = require('express')

const router = express.Router();

router.get('/list', (req, res, next) => {
    console.log('publications')
})

module.exports = router;
