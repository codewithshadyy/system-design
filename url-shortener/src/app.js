

const express = require("express")
const app = express()
const urlROutes = require("./routes/url.routes.js")




app.use(express.json())

app.use("/urls", urlROutes)



module.exports   = app




