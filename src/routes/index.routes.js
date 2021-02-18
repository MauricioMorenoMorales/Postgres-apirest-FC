const { Router } = require('express')
const router = Router()

const userController = require('../controllers/index.controller')

router.get('/', userController.getUsers)
router.get('/:id', userController.getUserById)
router.post('/', userController.createUser)
router.delete('/:id', userController.deleteUser)
router.put('/:id', userController.updateUser)

module.exports = router
