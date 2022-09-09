const express = require('express')
const router = express.Router()

const { sendMessage } = require('../controllers/messages.js')

router.route('/').post(sendMessage)

module.exports = router
