const express = require('express')
const router = express.Router()
const {register, login, logout,verifyToken } = require('../../Controllers/Aspirants/Auth')


router.route('/register').post(register)

router.route('/verify').get(verifyToken)

router.route('/login').post(login)

router.route('/logout').delete(logout)


module.exports = router