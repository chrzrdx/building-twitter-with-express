const express = require("express")
const path = require("path")
const logger = require("morgan")

const indexRouter = require("./routes/index")
const tweetsRouter = require("./routes/tweets")

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)
app.use("/api/tweets", tweetsRouter)

module.exports = app
