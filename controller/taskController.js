const fs = require('fs')
// const mongoose = require("mongoose")
const Task = require("../models/taskModel")


// GET REQUEST

exports.getAllTasks = async (req, res)=>{

    try{
        const tasks = await Task.find()
        res.status(200).json(tasks)

    } catch(err){
        console.log('error: ', err);
    }
    // fs.readFile(`${__dirname}/../data.json`, (err, data)=>{
    //     if(err) return err
    //     console.log(data);
    //     res.end(data)
    // })
}


exports.getTasks = async (req, res)=>{
    // console.log(req.params.id);
    const id = req.params.id

    try{
        const task = await Task.findById(id)

        if (!task) {
            return res.status(404).json({ error: 'task not found' })
          }
          res.status(200).json(task)
    } catch(err){
        console.log('error: ',err);
    }

    
    // fs.readFile(`${__dirname}/../data.json`, (err, data)=>{
    //     if(err) return err

    //     const tasks = JSON.parse(data);
    //     const task = tasks.find(task => task.id === id)

    //     // if(task){
    //     //     res.json(task)
    //     // }

    //     res.status(200).json({
    //         task
    //     })
       
    // })
}


//POST REQUEST

exports.createTask = async (req, res)=>{

    
    try {
      const {task, completed } = req.body
      console.log(task)
      console.log(completed)
      const newTask = await Task.create({ task, completed });
      res.status(201).json({
        newTask
    })

  } catch (err) {
    console.log('error: ', err);
   
  }

    // console.log(req.body);
    // res.end('done')
//     fs.readFile(`${__dirname}/../data.json`, (err, data)=>{
//         if(err) return err
  

//     const tasks = JSON.parse(data)
//     const newTask = req.body.task
//     // let newId = uuidv4()
//     let newId = Math.floor(Math.random()*1000)

//     tasks.push({id: newId, task: newTask})


//    fs.writeFile(`${__dirname}/../data.json`, JSON.stringify(tasks), err => {
//     if(err) return err
//    })
    
//     res.status(201).json({
//         id: newId,
//         task: newTask
//     })
// })
}


// UPDATE TASK

    exports.updateTask = async (req, res) => {

        const id = req.params.id
        const {task} = req.body

    try {
      const updatedTask = await Task.findByIdAndUpdate(id, {$set: { task }})

      if (!updatedTask) {
      return res.status(404).json({ error: 'task not found' });
      }

      res.status(200).json(updatedTask)
     } catch (err) { console.log('error: ', err); }


        // const id = req.params.id
        // const updatedTask = req.body.task

        // fs.readFile(`${__dirname}/../data.json`, (err, data) => {
        //     if (err) return err

        //     const tasks = JSON.parse(data);
        //     const taskToUpdate = tasks.find(task => task.id === id)

        //     if (!taskToUpdate) {
        //         return res.status(404).json({ 
        //             error: "Task not found" 
        //         })
        //     }

        //     taskToUpdate.task = updatedTask;

        //     fs.writeFile(`${__dirname}/../data.json`, JSON.stringify(tasks), err => {   
        //         if (err) return err




        //         res.status(200).json({
        //             id: id,
        //             task: updatedTask
        //         })
        //     })
        // })
    }


//DELETE REQUEST

exports.deleteTask = async (req, res)=>{

    const id = req.params.id
    console.log(id)
     const deletedTask = await Task.deleteOne({_id:id})
    res.json(
        {message : "task deleted succeffuly!!!", 
                deletedTask})
    // c    onst id = +req.params.id
    

    // fs.readFile(`${__dirname}/data.json`, (err, data)=>{
    //     if(err) return err

    //     const tasks = JSON.parse(data)
    //     const deleteTask = tasks.filter(task => task.id !== id)


        
    // fs.writeFile(`${__dirname}/data.json`, JSON.stringify(deleteTask), err=>{
    //     if(err) return err

    //     res.status(200).json({
    //         result: deleteTask
    //     })

    // })
    // })

}

