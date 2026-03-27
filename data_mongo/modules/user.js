const mongoose = require('mongoose');



const userSchema= mongoose.Schema({
    username:String,
    email:String,
    age:Number,
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"posts"
    }]
})

module.exports = mongoose.model("user",userSchema);