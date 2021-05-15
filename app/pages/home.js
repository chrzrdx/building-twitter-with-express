import Link from "next/link"
import { useState, useEffect } from "react"

import TwitterLogo from "../components/TwitterLogo"
import Timeline from "../components/Timeline"

export default function UserTimeline(props) {
  const [tweets, setTweets] = useState([])

  const loadTweets = async () => {
    const res = await fetch(`http://localhost:3001/api/tweets/`)
    const tweets = await res.json()
    setTweets(tweets)
  }

  const postTweet = async (message) => {
    const res = await fetch(`http://localhost:3001/api/tweets/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "abhi", message: message }),
    })
    const newTweet = await res.json()
    loadTweets()
  }

  const handleClick = async (e) => {
    e.preventDefault()
    const message = e.target.form.elements.whatshappening.value.trim()
    if (message) {
      await postTweet(message)
      e.target.form.elements.whatshappening.value = ""
    }
  }

  useEffect(loadTweets, [])

  return (
    <main className="container">
      <Link href="/">
        <div>
          <TwitterLogo />
        </div>
      </Link>

      <form className="tweetinput">
        <textarea
          required
          name="whatshappening"
          rows="2"
          placeholder="What's on your mind?"
          className="whatshappening"
        ></textarea>
        <button className="btn btn-primary" onClick={handleClick}>
          Tweet
        </button>
      </form>

      <h1>Timeline</h1>

      {tweets.length > 0 ? (
        <Timeline tweets={tweets} />
      ) : (
        <p className="alert">You have not tweeted yet!</p>
      )}
    </main>
  )
}
