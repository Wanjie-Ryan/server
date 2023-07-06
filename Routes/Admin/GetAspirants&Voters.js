const express = require('express')
const router = express.Router()
const {getAllAspirants, getSingleAspirant, updateAspirant, getVoters} = require('../../Controllers/Admin/GetAspirants&Voters')


// ROUTES FOR ASPIRANTS

router.route('/allaspirants').get(getAllAspirants)
router.route('/allaspirants/:id').get(getSingleAspirant)
router.route('/updateaspirants/:id').patch(updateAspirant)


// ROUTES FOR VOTERS


router.route('/allvoters').get(getVoters)


module.exports = router