const express = require('express')
const router = express.Router()
const {getAllAspirants, getSingleAspirant, getVoters} = require('../../Controllers/Admin/GetAspirants&Voters')



router.route('/allaspirants').get(getAllAspirants)
router.route('/allaspirants/:id').get(getSingleAspirant)
router.route('/allvoters').get(getVoters)


module.exports = router