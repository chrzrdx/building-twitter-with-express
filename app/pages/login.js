import Link from "next/link"
import TwitterLogo from "../components/TwitterLogo"

export default function Login(props) {
  return (
    <main className="container">
      <Link href="/">
        <div>
          <TwitterLogo />
        </div>
      </Link>

      <h1>Log in to Twitter</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          margin: "2rem 0",
        }}
        action=""
      >
        <input required type="text" placeholder="Phone, email, username" />
        <input required type="password" placeholder="Password" />
        <button className="btn btn-primary">Log in</button>
      </form>
    </main>
  )
}
