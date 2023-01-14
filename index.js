const app = require("./app")
let config= require("./config/config")

let PORT=config.app.PORT


app.listen(PORT,()=>{
    console.log(`your server is running at http://localhost:${PORT}`)
})