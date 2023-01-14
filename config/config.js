require("dotenv").config()



let dev={
    app:{
        port:process.env.port || 4000
    },
    db:{
        url: process.env.DB_URL || "mongodb://127.0.0.1:27017/UserDemoDb"
    }
}




module.exports=dev