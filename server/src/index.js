const express = require('express')
const UserRoutes  = require("./router/router-user")
require('./db/mongoose')
const session  = require('express-session')

const path = require('path')

const app = express()
const port = process.env.PORT
app.use(express.urlencoded({ extended: false}))

app.use(session({
    secret: 'Abbas0987',
    resave: false,
    saveUninitialized: true,
  }))
app.use(express.json())

app.use("/user", UserRoutes)


app.listen(port, ()=>{
    console.log("Server is running on port " + port)
}) 