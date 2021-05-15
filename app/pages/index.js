import Link from "next/link"
import TwitterLogo from "../components/TwitterLogo"

export default function Index() {
  return (
    <main className="container">
      <Link href="/">
        <div>
          <TwitterLogo />
        </div>
      </Link>

      <h1>Happening now</h1>
      <h2>Join Twitter today.</h2>
      <Link href="/signup" className="btn btn-primary">
        Sign up
      </Link>
      <Link href="/login" className="btn btn-secondary">
        Log in
      </Link>
    </main>
  )
}
