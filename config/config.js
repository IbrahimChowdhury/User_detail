require("dotenv").config()



let dev={
    app:{
        port:process.env.port || 4000
    },
    db:{
        url: process.env.DB_URL 
    }
}




module.exports=dev