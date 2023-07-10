const express = require('express')
const router = express.Router()
const {postdetails,verifyToken} = require('../../Controllers/Voters/voters')


router.route('/submission').post(postdetails)

router.route('/verify').get(verifyToken)


module.exports = router