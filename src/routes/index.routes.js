const { Router } = require('express')
const router = Router()

const userController = require('../controllers/index.controller')

router.get('/', userController.getUsers)

module.exports = router
