const fs = require('fs')


// GET REQUEST

exports.getAllTasks = (req, res)=>{
    fs.readFile(`${__dirname}/../data.json`, (err, data)=>{
        if(err) return err
        console.log(data);
        res.end(data)
    })
}


exports.getTasks = (req, res)=>{
    console.log(req.params.id);
    const id = +req.params.id
    fs.readFile(`${__dirname}/../data.json`, (err, data)=>{
        if(err) return err

        const tasks = JSON.parse(data);
        const task = tasks.find(task => task.id === id)

        // if(task){
        //     res.json(task)
        // }

        res.status(200).json({
            task
        })
       
    })
}


//POST REQUEST

exports.createTask = (req, res)=>{
    // console.log(req.body);
    // res.end('done')
    fs.readFile(`${__dirname}/../data.json`, (err, data)=>{
        if(err) return err
  

    const tasks = JSON.parse(data)
    const newTask = req.body.task
    // let newId = uuidv4()
    let newId = Math.floor(Math.random()*1000)

    tasks.push({id: newId, task: newTask})


   fs.writeFile(`${__dirname}/../data.json`, JSON.stringify(tasks), err => {
    if(err) return err
   })
    
    res.status(201).json({
        id: newId,
        task: newTask
    })
})
}


// UPDATE TASK

exports.updateTask = (req, res) => {
    const id = +req.params.id
    const updatedTask = req.body.task

    fs.readFile(`${__dirname}/../data.json`, (err, data) => {
        if (err) return err

        const tasks = JSON.parse(data);
        const taskToUpdate = tasks.find(task => task.id === id)

        if (!taskToUpdate) {
            return res.status(404).json({ 
                error: "Task not found" 
            })
        }

        taskToUpdate.task = updatedTask;

        fs.writeFile(`${__dirname}/../data.json`, JSON.stringify(tasks), err => {
            if (err) return err




            res.status(200).json({
                id: id,
                task: updatedTask
            })
        })
    })
}


//DELETE REQUEST

exports.deleteTask = (req, res)=>{
    const id = +req.params.id
    

    fs.readFile(`${__dirname}/data.json`, (err, data)=>{
        if(err) return err

        const tasks = JSON.parse(data)
        const deleteTask = tasks.filter(task => task.id !== id)


        
    fs.writeFile(`${__dirname}/data.json`, JSON.stringify(deleteTask), err=>{
        if(err) return err

        res.status(200).json({
            result: deleteTask
        })

    })
    })

}

