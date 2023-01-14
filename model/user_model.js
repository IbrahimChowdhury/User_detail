const { default: mongoose, mongo } = require("mongoose");


let userSchema=mongoose.Schema({
    id:{
        type:String,
        
    },
    name:{
        type:String,
       
    },
    age:{
        type:Number,
       
    },
    created_at:{
        type:Date,
        default:Date.now
    }
})


module.exports= mongoose.model("users",userSchema)




