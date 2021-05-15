import Link from "next/link"

export default function Timeline({tweets}) {
  return (
    <ul className="timeline">
      {tweets.reverse().map((tweet) => (
        <article key={tweet.id} className="tweet">
          <Link href={tweet.username}>{`@${tweet.username}`}</Link>
          <p>{tweet.message}</p>
        </article>
      ))}
    </ul>
  )
}
