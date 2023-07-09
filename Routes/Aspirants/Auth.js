const express = require('express')
const router = express.Router()
const {register, login, logout,veirfyToken} = require('../../Controllers/Aspirants/Auth')


router.route('/register').post(register)

router.route('/verify').get(veirfyToken)

router.route('/login').post(login)

router.route('/logout').delete(logout)


module.exports = router