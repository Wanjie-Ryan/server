const express = require('express')
const router = express.Router()
const {register, login} = require('../../Controllers/Aspirants/Auth')


router.route('/register').post(register)


router.route('/login').post(login)


module.exports = router