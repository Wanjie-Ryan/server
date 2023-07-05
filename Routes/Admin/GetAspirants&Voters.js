const express = require('express')
const router = express.Router()
const {getAspirants, getVoters} = require('../../Controllers/Admin/GetAspirants&Voters')



router.route('/allaspirants').get(getAspirants)
router.route('/allvoters').get(getVoters)


module.exports = router