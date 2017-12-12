const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const session = require('express-session')
const pg = require("pg")
require('dotenv').load();
const Client = pg.Client;
const client = new Client({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port
})
client.connect()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));


app.set("view engine", "pug")

require("./routes/index.js")(app,client)
require("./routes/navbar.js")(app,client)
require("./routes/signup.js")(app,client)
require("./routes/profile.js")(app,client)
require("./routes/login.js")(app,client)
require("./routes/logout.js")(app)
require("./routes/messages.js")(app,client)
require("./routes/posts.js")(app,client)
require("./routes/userMessages.js")(app,client)
require("./routes/msg.js")(app,client)

app.listen(process.env.webport, function(){
	console.log("Listening on 3002")
})