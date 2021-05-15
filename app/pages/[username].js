import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

import TwitterLogo from "../components/TwitterLogo"
import Timeline from "../components/Timeline"

export default function UserTimeline(props) {
  const router = useRouter()
  const { username } = router.query

  const [tweets, setTweets] = useState([])

  useEffect(
    async function () {
      if (!username) return
      const res = await fetch(`http://localhost:3001/api/tweets/${username}`)
      const tweets = await res.json()
      setTweets(tweets)
    },
    [username]
  )

  return (
    <main className="container">
      <Link href="/">
        <div>
          <TwitterLogo />
        </div>
      </Link>

      <h1>Timeline</h1>

      {tweets.length > 0 ? (
        <Timeline tweets={tweets} />
      ) : (
        <p className="alert">This user has not tweeted yet!</p>
      )}
    </main>
  )
}
