const express = require("express")
const router = express.Router()

const userDb = require("../database/users")
const tweetsDb = require("../database/tweets")

router.get("/", (req, res) => {
  res.send(tweetsDb)
})

// GET /abhi, GET /aneeq
router.get("/:username", (req, res) => {
  const username = req.params.username
  if (!userDb.includes(username)) {
    return res.status(404).send({ error: "USER_NOT_FOUND" })
  }
  const tweets = tweetsDb.filter((tweet) => tweet.username === username)
  res.send(tweets)
})

// GET /abhi/status/1
// GET /trump/status/4
router.get("/:username/status/:id", (req, res) => {
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

router.post("/create", (req, res) => {
  let { username, message } = req.body
  message = message ? message.trim() : ""

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

module.exports = router
