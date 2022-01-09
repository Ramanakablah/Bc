const express= require("express")
const ConnectionSetup = require("./database")
const cors = require("cors")
const fileUpload = require('express-fileupload')
const app=express()
const Port= process.env.PORT || 8000

app.use(express.json())
app.use(cors())
app.use(express.static("public"))
ConnectionSetup()
app.use(fileUpload())    

app.use("/trip",require("./Routes/Trip"))
app.use("/join",require("./Routes/Member"))
app.get("/",(req ,res)=>{
    res.send("hey")
})

app.listen(process.env.PORT || 8000 ,()=>{
    console.log(`Listening to appp at port ${Port}`)
})