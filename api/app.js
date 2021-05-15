const express = require("express")

// mock database
const userDb = ["abhi", "aneeq", "trump", "edyst"]
const tweetsDb = [
  { id: 1, username: "abhi", message: "Hello World!" },
  { id: 2, username: "aneeq", message: "Bitcoin is <3!" },
  { id: 3, username: "abhi", message: "Some random joke" },
  { id: 4, username: "trump", message: "covfefe" },
  { id: 5, username: "abhi", message: "Be part of a community!" },
  { id: 6, username: "trump", message: "BIGLY" },
]

// created a new express app
const app = express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

// handle routes

// GET /
app.get("/", function (req, res) {
  res.send(tweetsDb)
})

// GET /abhi, GET /aneeq
app.get("/:username", (req, res) => {
  const username = req.params.username
  if (!userDb.includes(username)) {
    return res.status(404).send({ error: "USER_NOT_FOUND" })
  }
  const tweets = tweetsDb.filter((tweet) => tweet.username === username)
  res.send(tweets)
})

// GET /abhi/status/1
// GET /trump/status/4
app.get("/:username/status/:id", (req, res) => {
  const tweets = tweetsDb.filter(
    (tweet) => tweet.username === req.params.username
  )
  const id = parseInt(req.params.id, 10)

  const tweet = tweets.find((tweet) => tweet.id === id)
  if (!tweet) {
    res.status(404).send({ error: "TWEET_NOT_FOUND" })
    return
  }

  res.send(tweet)
})

app.post("/:username/tweet", (req, res) => {
  let { username, message } = req.body
  message = message.trim()

  if (!username || !message) {
    return res.status(400).send({ error: "MISSING_DATA" })
  }

  if (!userDb.includes(username)) {
    return res.status(400).send({ error: "USER_DOES_NOT_EXIST" })
  }

  const latestId = tweetsDb.length
  const tweet = { id: latestId + 1, username, message }
  tweetsDb.push(tweet)

  res.status(201).send(tweet)
})

// start the web server
app.listen(3000, function () {
  console.log("Express application has started, listening on port 3000")
})
