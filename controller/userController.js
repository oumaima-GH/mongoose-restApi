const fs = require('fs')



// bodyChecker


exports.bodyChecker = (req,res,next)=>{
    console.log(req.body)
    if(!req.body.username || !req.body.email){
        console.log("some info is missing try to complete the form plz!!!")
        return
    }
    next()
}

//get user

exports.getAllUsers = (req, res)=>{
    fs.readFile(`${__dirname}/../user.json`, (err, data)=>{
        if(err) return err
        console.log(data);
        res.end(data)
    })
}

exports.getUser = (req, res)=>{
    console.log(req.params.id)
    const id = +req.params.id
    fs.readFile(`${__dirname}/../user.json`, (err, data)=>{
        if(err) return err

        const users = JSON.parse(data);
        const user = users.find(user => user.id === id)

        // if(user){
        //     res.json(user)
        // }

        res.status(200).json({
            user
        })
       
    })
}

//POST REQUEST

exports.createUser = (req, res)=>{
    // console.log(req.body);
    // res.end('done')
    fs.readFile(`${__dirname}/../user.json`, (err, data)=>{
        if(err) return err
  

    const users = JSON.parse(data)
    const newUsername = req.body.username
    const newُEmail = req.body.email
    // let newId = uuidv4()
    let newId = Math.floor(Math.random()*1000)

    users.push({id: newId, username: newUsername, email: newُEmail})


   fs.writeFile(`${__dirname}/../user.json`, JSON.stringify(users), err => {
    if(err) return err
   })
    
    res.status(201).json({
        id: newId,
        username: newUsername,
        email: newُEmail 
    })
})
}


// UPDATE USER

exports.updateUser = (req, res) => {
    const id = +req.params.id
    const updatedUsername = req.body.username
    const updatedEmail = req.body.email

    fs.readFile(`${__dirname}/../user.json`, (err, data) => {
        if (err) return err

        const users = JSON.parse(data);
        const userToUpdate = users.find(user => user.id === id)

        if (!userToUpdate) {
            return res.status(404).json({ 
                error: "user not found" 
            })
        }

        userToUpdate.username = updatedUsername
        userToUpdate.email = updatedEmail

        fs.writeFile(`${__dirname}/../user.json`, JSON.stringify(users), err => {
            if (err) return err




            res.status(200).json({
                id: id,
                usersname: updatedUsername,
                email: updatedEmail
            })
        })
    })
}

//DELETE USER

exports.deleteUser = (req, res)=>{
    const id = +req.params.id
    

    fs.readFile(`${__dirname}/../user.json`, (err, data)=>{
        if(err) return err

        const users = JSON.parse(data)
        const deleteUser = users.filter(user => user.id !== id)


        
    fs.writeFile(`${__dirname}/../user.json`, JSON.stringify(deleteUser), err=>{
        if(err) return err

        res.status(200).json({
            result: deleteUser
        })

    })
    })

}