require("dotenv").config()



let dev={
    app:{
        PORT:process.env.PORT || 4000
    },
    db:{
        url: process.env.DB_URL 
    }
}




module.exports=dev