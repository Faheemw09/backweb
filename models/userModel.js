
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    gender:{type:String,required:true},
    city:{type:String,required:true}
},{
    versionKey:false
})

const UserModel = mongoose.model("Registered_user",userSchema)

module.exports=UserModel