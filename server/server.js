const express = require('express')
const app = express()
const cors = require("cors")
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
const dotenv = require("dotenv")
const authrroter = require("./routers/auth")
const userrouter = require("./routers/user")

dotenv.config()
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.json())

app.use("/v1/auth/", authrroter)

app.use("/v1/user/", userrouter)
app.listen(8000,()=>{
  console.log("server is running")
})