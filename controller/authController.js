const User = require('../models/userModel')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


exports.register = async (req, res) =>{

    try{
        const {username, email, password} = req.body
        const saltRounds = 10
        const hashPassword = await bcrypt.hash(password, saltRounds)
        const registration = await User.create({username, email, password: hashPassword})
        res.status(201).json({
            registration
        })

    } catch(err) { console.log('error: ', err); }
}

exports.login = async (req, res) =>{
    try{
        const {email, password} = req.body
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        const validatePassword = await bcrypt.compare(password, user.password)
        console.log(validatePassword)
        if (!validatePassword) {
            return res.status(404).json({ message: "Invalid password" })
        }
    

        const token = jwt.sign({data: email}, 'secret', {expiresIn: '1h'})
        console.log(token);
        res.status(200).json({
            message: 'logged in successfully',
            token
        })

    } catch(err){
        console.log('error', err);
    }

}
