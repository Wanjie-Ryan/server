const express = require('express')
const router = express.Router()
const {AllVoters} = require('../../Controllers/Aspirants/GetVoters')



router.route('/allvoters').get(AllVoters)


module.exports = router