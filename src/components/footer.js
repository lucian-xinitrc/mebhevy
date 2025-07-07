'use client'
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import "../app/globals.css";

const Footer = () => {
	const ContactLinks = [
  		{ 
  			href: 'https://www.linkedin.com/in/lucian-florin-cusmir-fullstackdev', 
  			label: (
		      <>
		        <FaLinkedinIn /> 
		        <text>lucian-florin-cusmir-fullstackdev</text>
		      </>
		    ),
  		},
  		{ 
  			href: 'https://github.com/lucian-xinitrc', 
  			label: (
		      <>
		        <FaGithub /> 
		        <text>github.com/lucian-xinitrc</text>
		      </>
		    ), 
  		},
  		{ 
  			href: 'https://instagram.com', 
  			label: (
		      <>
		        <FaInstagram /> 
		        <text>@mebhevy</text>
		      </>
		    ), 
  		},
	];
	const links = [
  		{ id: "1", href: '/', label: 'Home' },
  		{ id: "2", href: '/', label: 'Services' },
  		{ id: "3", href: '/', label: 'Prices' },
  		{ id: "4", href: '/', label: 'Contact' },
	]
	const linkss = links['4'];
	return (
		<>
			<section className="footer">
				<div className="center">
					<div className="footerCard">
						<h1>Mebhevy</h1>
						<p>We provide the best web development and hosting services</p>
						<section className="footerCardContact">
							{ContactLinks.map(({ href, label }) => (
						        <a key={href} href={href}>
						          {label}
						        </a>
					      		))}
					     </section>
					</div>
					<div className="footerCard">
						<h1>Quick Links</h1>
						<div className="center">
							<div className="footer-links">
								{links.map(({ id, href, label }) => (
							        <Link className="footer-link" key={id} href={href}>
							          {label}
							        </Link>
					      		))}
					      	</div>
					    </div>
					</div>
					<div className="footerCard">
						<h1>Meet the team</h1>
						<div className="center">
							<div className="footer-links">
								<Link className="footer-link" href="/">
									Contact
								</Link>
								<Link className="footer-link" href="/">+4400000000</Link>
								<Link className="footer-link" href="/">cusmirlucian@gmail.com</Link>
							</div>
						</div>
					</div>
				</div>
				<p className="lasttext">All rights reserved Mebhevy - 2025</p>

			</section>
		</>
	)
}

export default Footer;