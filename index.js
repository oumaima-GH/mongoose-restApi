const express = require('express')
// const { v4: uuidv4 } = require('uuid');
const app = express()


// const router = express.Router()
const taskRouter = require('./router/taskRouter')
const userRouter = require('./router/userRouter')
const authRouter = require('./router/authRouter')


// const { getAllTasks, getTasks, createTask, updateTask, deleteTask } = require('./controller/taskController');


app.use(express.json())

app.get('/', (req, res)=>{
    res.send("hello world")
})

app.use('/api/v1/tasks', taskRouter)


app.use('/api/v1/users', userRouter)

app.use('/api/v1', authRouter)


// app.use('/tasks/:id', router.taskRouter)

// GET REQUEST

// app.get("/tasks", getAllTasks)

// app.get("/tasks/:id", getTasks)

//POST REQUEST

// app.post("/tasks", createTask)


// UPDATE TASK

// app.put("/tasks/:id", updateTask)


//DELETE REQUEST

// app.delete("/tasks/:id", deleteTask)



module.exports = app;