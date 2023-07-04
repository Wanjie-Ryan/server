const express = require('express')
const router = express.Router()
const {AllVoters} = require('../../Controllers/Aspirants/GetVoters')
const verifyJwt = require('../../Authmiddleware/authmid')


router.route('/allvoters').get(verifyJwt, AllVoters)


module.exports = router