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
      <h1>Create a new account on Twitter</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          margin: "2rem 0",
        }}
        action=""
      >
        <input required type="text" placeholder="Name" />
        <input required type="text" placeholder="Profile Picture URL" />
        <input required type="text" placeholder="Username" />
        <input required type="password" placeholder="Password" />
        <button className="btn btn-primary">Sign Up</button>
      </form>
    </main>
  )
}
