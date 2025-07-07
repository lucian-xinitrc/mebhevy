import { FcSupport } from "react-icons/fc";
import { FaSuitcase } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { CiSquarePlus } from "react-icons/ci";

const Main = () => {
	
	return (
		<section className="main">
			<div className="searchSection">
				<div className="searchHeadings">
					<h1>Search your domain</h1>
					<p>BUY DOMAIN 38% ONLY TODAY</p>
				</div>
				<div className="searchBarBox">
					<input
						className="searchBarInput"
					/>
					<button className="searchBarButton">Search your Domain</button>
				</div>
			</div>
			<div className="how">
				<div className="titles">
					{/* <h1>Works</h1> */}
					<h2>How it works</h2>
				</div>
				<div className="centerHow">
					<Card index="1" />
					<Card index="2" />
					<Card index="3" />
					<Card index="4" />
				</div>
			</div>
		</section>
	)
}

const Card = ({ index }) => {
	const cardD = cardsDetails[index];
	const TextArea = cardsDetails[index].textArea;
	return (
		<>
			<div className="card">
				<div className="cardImage">
					{cardD.logo}
				</div>
				<div className="cardHeader">
					<h1>{cardD.title}</h1>
				</div>
				<div className="cardBody">
					{ TextArea.map((text, i) => (
		            	<p key={i}>{ text }</p>
		            ))}
				</div>
				<div className="cardFooter">
					<a href={cardD.link}>Details</a>
				</div>
			</div>
		</>
	)
}

const cardsDetails = {
	1: {
		logo:<FcSupport className="logo"/>,
		title:"Human Support",
		textArea: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo mi non mi volutpat mollis. ",
		],
		link:"https://github.com/lucian-xinitrc"
	},
	2: {
		logo:<FaSuitcase className="logo" />,
		title:"Hosting Packages",
		textArea: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo mi non mi volutpat mollis. ",
		],
		link:"https://github.com/lucian-xinitrc"
	},
	3: {
		logo:<GiPadlock className="logo" />,
		title:"Seo Security",
		textArea: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo mi non mi volutpat mollis. ",
		],
		link:"https://github.com/lucian-xinitrc"
	},
	4: {
		logo:<CiSquarePlus className="logo" />,
		title:"Text More",
		textArea: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo mi non mi volutpat mollis. ",
		],
		link:"https://github.com/lucian-xinitrc"
	},
}



export default Main;