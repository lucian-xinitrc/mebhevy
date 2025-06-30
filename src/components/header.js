import Flag from 'react-world-flags';
import { FaSearch } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import "../app/globals.css";

const Header = () => {
	return (
		<>
			<section className="header">
				<h3>Welcome to Medhevy</h3>
				<h1>Revolutionise <gray>your business</gray></h1>
				<section className="textBoxy">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed diam posuere, pharetra enim et, dapibus nunc. Nullam non velit viverra, mollis nulla sed, ullamcorper ante.</p>
				</section>
				
			</section>
			<section className="language">
					<button>EN</button>
					<button>RO</button>
			</section>
			<section className="headerFooter">
				<section className="conFooterHeader">
					<h3>Join with us: </h3>
					<a href="/"><MdEmail /> <text>cusmirlucian@gmail.com</text></a>
					<a href="https://www.linkedin.com/in/lucian-florin-cusmir-fullstackdev"><FaLinkedinIn /> <text>/in/lucian-florin-cusmir-fullstackdev</text></a>
					<a href="https://github.com/lucian-xinitrc"><FaGithub /> <text>github.com/lucian-xinitrc</text></a>
					<a href="https://instagram.com"><FaInstagram /> <text>@mebhevy</text></a>
				</section>
			</section>
		</>
	)
}

export default Header;