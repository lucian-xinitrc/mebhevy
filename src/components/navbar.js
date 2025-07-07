'use client'
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import "../app/globals.css";

const Navbar = () => {
	const links = [
  		{ id: "1", href: '/', label: 'Home' },
  		{ id: "2", href: '/', label: 'Services' },
  		{ id: "3", href: '/', label: 'Prices' },
  		{ id: "4", href: '/', label: 'Contact' },
	]
	return (
		<nav className="navbar">
			<section className="left">
				<h1>MebHevy</h1>
			</section>
			<section className="right">
				{links.map(({ id, href, label }) => (
			        <Link className="nav-link" key={id} href={href}>
			          {label}
			        </Link>
			      ))}
			      <div className="search">
			      	<input placeholder="Search..."/>
			      	<button className="searchButton"><FaSearch /></button>
			      </div>
			      <button className="signupButton">Sign Up</button>
			</section>
		</nav>
	)
}

export default Navbar;