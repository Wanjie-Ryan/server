const express = require('express')
const router = express.Router()
const {getAspirants, getVoters} = require('../../Controllers/Admin/GetAspirants&Voters')



router.route('/allvoters').get(getAspirants)
router.route('/allaspirants').get(getVoters)


module.exports = router