import { Button, Link, ContainedLink } from './Button'

export function Navbar() {
  return (
    <nav className="bg-white sticky top-0 shadow  px-4 md:px-10 py-4 flex items-center">
      <Link href="/" className="font-black text-xl font-tt hover:text-black">
        Logo
      </Link>

      <div className="ml-auto"></div>
      <Link href="/">Random</Link>
      <Link href="/auth/login">Login</Link>
      <ContainedLink href="/auth/register">Signup</ContainedLink>
    </nav>
  )
}
