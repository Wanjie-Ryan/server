const express = require('express')
const router = express.Router()
const {register, login, logout} = require('../../Controllers/Aspirants/Auth')


router.route('/register').post(register)


router.route('/login').post(login)

router.route('/logout').delete(logout)


module.exports = router