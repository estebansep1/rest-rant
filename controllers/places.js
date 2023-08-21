const router = require('express').Router()

router.get('/', (req, res) =>{
    res.send('GET /places... this is a test')
})

module.exports = router 