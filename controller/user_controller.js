let User=require("../model/user_model")
let {v4 : uuidv4}=require("uuid")

// getting all items 
let getAllUsers =async(req,res)=>{ 
    try {
        let allUser =await User.find()
        if (allUser) {
            res.status(202).json(allUser)
        } else {
            res.status(404).json({message:"users not found"})
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
   
}


// getting Single item
let getSingleUser =async(req,res)=>{
    
    try {
        let userID=req.params.id
    let user= await User.findOne({id:userID})
    if(user)
    {
        res.status(202).json(user)
    }
    else
    {
        res.status(404).json({message:"user not found"})
    }
    }
     catch (error) {
        res.status(500).json(error.message)
    }
}


// creating  users
let createUser=async(req,res)=>{
    try {  
    let newUser =new User({
        id: uuidv4(),
        name:req.body.name,
        age:req.body.age
    })
    await newUser.save()
    res.status(202).json({newUser})
    } 
    catch (error) {
        res.status(404).json(error)
    }

}


// delete user
let deleteUser = async(req,res)=>{
    try {
        
    let userID= req.params.id
    let  deleteUser= await User.findByIdAndDelete({_id:userID})
    if(deleteUser)
    {

        res.status(202).json({
            info:"deleted",
            acknowledgement: true,
            data:deleteUser
        })
    }
    else
    {
        res.status(404).json({message:"user not found"})
    }
    } 
    catch (error) {
        res.status(500).json({message:error})
    }

}




// update user
let updateUser =async(req,res)=>{
    try {
        let userID=req.params.id
    let name=req.body.name
    let age=req.body.age
    let updateItem = await User.findByIdAndUpdate(
        {
            _id:userID
        },
        {
            $set:{
                name:name,
                age:age
            }          
        },
        {
            new:true
        }
    )

    if(updateItem)
    {
        res.status(202).json(updateItem)
    }
    else{
        res.status(404).json({
            message:"item not deleted"
        })
    }
    } catch (error) {
        res.status(500).json({message:"something is broke"})
    }
}



module.exports={getAllUsers,createUser,getSingleUser,deleteUser,updateUser}