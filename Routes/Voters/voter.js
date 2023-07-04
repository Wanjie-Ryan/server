const express = require('express')
const router = express.Router()
const {postdetails} = require('../../Controllers/Voters/voters')


router.route('/submission').post(postdetails)


module.exports = router