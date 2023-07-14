const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: string,
        required: true
    },
    lastName: {
        type: string,
        required:true
    },
    email: {
        type:string,
        required: true
    },
    password: {
        type:string,
        required: true
    }
})

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;