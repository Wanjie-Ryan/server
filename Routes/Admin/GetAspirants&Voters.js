const express = require('express')
const router = express.Router()
const {getAllAspirants, getSingleAspirant, updateAspirant, deleteAspirant, getVoters, getSingleVoter} = require('../../Controllers/Admin/GetAspirants&Voters')


// ROUTES FOR ASPIRANTS

router.route('/allaspirants').get(getAllAspirants)
router.route('/allaspirants/:id').get(getSingleAspirant)
router.route('/updateaspirants/:id').patch(updateAspirant)
router.route('/deleteaspirants/:id').delete(deleteAspirant)

// ROUTES FOR VOTERS


router.route('/allvoters').get(getVoters)
router.route('/singlevoter/:id').get(getSingleVoter)


module.exports = router