const app = require('./index')
const { connectDB } = require('./dbConfig/db')
require('dotenv').config()

const host = process.env.HOST
const port = process.env.PORT

connectDB()

// const newTask = new Task({
//     task: 'learn express',
//     completed: true
// })

// newTask.save()
//     .then(() => {
//         console.log('The task is saved');
//     }).catch((err) => {
//         console.log(err);
//     })

app.listen(port, host, () => {
    console.log(`Server is running on: http://${host}:${port}`);
});





// const app = require('./index')
// const mongoose = require('mongoose')
// require('dotenv').config()

// const host = process.env.HOST
// const port = process.env.PORT

// const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
// mongoose.connect(DB,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(()=>{
//     console.log('the database is connected')
// }).catch((err)=>{
//     console.log(err,'the database is not connected')
// })

// const taskSchema = new mongoose.Schema({
//     task:{
//         type:String,
//         required:[true,'please provide the task'],
//         unique:true
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     }

// })

// const Task = mongoose.model('Task',taskSchema)

//     const newTask = new Task({
//         task: 'go to the gym',
//         completed: true
//     })


//     newTask.save().then(()=>{
//         console.log('the task is saved')
//     }).catch((err)=>{
//         console.log(err)
//     })



// app.listen(port, host, ()=>{
//     console.log(`server is running on: http://${host}:${port}`);
// })

