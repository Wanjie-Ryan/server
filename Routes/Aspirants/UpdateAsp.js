const express = require('express')
const router = express.Router()
const {updateAspirant} = require('../../Controllers/Aspirants/UpdateAsp')
const verifyJwt = require('../../Authmiddleware/authmid')



router.route('/updateaspirant').patch(verifyJwt, updateAspirant)


module.exports = router