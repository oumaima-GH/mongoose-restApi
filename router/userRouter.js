const router = require('express').Router()

const { getAllUsers, getUser, createUser, deleteUser, updateUser,bodyChecker } = require('../controller/userController')

router.route('/').get(getAllUsers).post(bodyChecker,createUser)

router.route('/:id').get(getUser).delete(deleteUser).put(updateUser)


module.exports = router