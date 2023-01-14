const app = require("./app")
let config= require("./config/config")

let port=config.app.port


app.listen(port,()=>{
    console.log(`your server is running at http://localhost:${port}`)
})