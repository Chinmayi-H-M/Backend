const mongoose = require('mongoose');


const postsSchema= mongoose.Schema({
    postDate:String,
    user:String,
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("post",postsSchema);