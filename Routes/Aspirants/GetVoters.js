const express = require('express')
const router = express.Router()
const {AllVoters} = require('../../Controllers/Aspirants/GetVoters')
const verifyJwt = require('../../Authmiddleware/authmid')
const {veirfyToken} = require('../../Controllers/Aspirants/Auth')

router.route('/allvoters').get( AllVoters)


module.exports = router