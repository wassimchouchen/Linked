import React from 'react'; 
import {  ContainedLink } from './Button'
import { Link } from "./Button"


export function Navbar() {
  return (
    <nav className="bg-white sticky top-0 shadow  px-4 md:px-10 py-4 flex items-center">
      <Link to="/" className="font-black text-xl font-tt hover:text-black">
        Linked
      </Link>

      <div className="ml-auto"></div>
      <Link to="/">Acceuil</Link>
      <Link to="/">Condidate</Link>
      <Link to="/auth/login">Login</Link>
      <ContainedLink to="/auth/register">Signup</ContainedLink>
    </nav>
  )
}
