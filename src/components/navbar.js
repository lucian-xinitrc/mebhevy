'use client'
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import "../app/globals.css";

const Navbar = () => {
	const links = [
  		{ href: '/', label: 'Home' },
  		{ href: '/', label: 'Services' },
  		{ href: '/', label: 'Prices' },
  		{ href: '/', label: 'Contact' },

	]
	return (
		<nav className="navbar">
			<section className="left">
				<h1>MebHevy</h1>
			</section>
			<section className="right">
				{links.map(({ href, label }) => (
			        <Link className="nav-link" href={href}>
			          {label}
			        </Link>
			      ))}
			      <button className="searchButton"><text>Insert text</text><FaSearch /></button>
			      <button className="signupButton">Sign Up</button>
			</section>
		</nav>
	)
}

export default Navbar;