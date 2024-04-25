const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('The database is connected');
    } catch (err) {
        console.log(err,'error connection not established!!');
    }
}





module.exports = { connectDB};
