const router = require('express').Router()

const { getAllTasks, getTasks, createTask, updateTask, deleteTask } = require('../controller/taskController')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').put(updateTask).get(getTasks).delete(deleteTask)


module.exports = router