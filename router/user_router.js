const { getAllUsers, createUser, getSingleUser, deleteUser, updateUser } = require("../controller/user_controller")

let router=require("express").Router()


router.get("/api/user/",getAllUsers)
router.post("/api/user/",createUser)
router.get("/api/user/:id",getSingleUser)
router.delete("/api/user/:id",deleteUser)
router.put("/api/user/:id",updateUser)







module.exports=router




