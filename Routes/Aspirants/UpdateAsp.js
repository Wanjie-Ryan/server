const express = require('express')
const router = express.Router()
const {updateAspirant} = require('../../Controllers/Aspirants/UpdateAsp')



router.route('/updateaspirant').patch()


module.exports = router