let express = require("express")
let cors=require("cors")
let body_parser=require("body-parser")
let app =express()
let user_router=require("./router/user_router")
require("./config/db")
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(user_router)



/
// server 
app.get("/",(req,res)=>{
   res.sendFile(__dirname + "/view/home_page.html")
})

// server error
app.use((err,req,res,next)=>{
    res.status(500).json({message: "something is broke"})
})


// router error
app.use((req,res,next)=>{
    res.status(404).json({message:"Router error"})
})




module.exports=app