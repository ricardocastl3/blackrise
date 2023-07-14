const mongoose = require('mongoose')

const connectToDb = async() => {
    try{

        await mongoose.connect(
            `mongoose+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_LOCATION}`);
            console.log("Connection Successfully")
    }catch(error)
    {
        console.log("Connection failed!")
    }
}