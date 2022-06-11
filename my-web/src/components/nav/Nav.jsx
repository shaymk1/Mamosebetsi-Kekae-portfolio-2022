import './nav.css'


import React from 'react';


import { Link } from 'react-scroll';
const Nav = () => {
	return (
		<div className="n-wrapper" id="Navbar">
			{/* left */}
			<div className="n-left">
				<div className="n-name">Shay</div>
			</div>
			{/* right */}
			<div className="n-right">
				<div className="n-list">
					<ul style={{ listStyleType: 'none' }}>
						<li>
							<Link activeClass="active" to="Navbar" spy={true} smooth={true}>
								Home
							</Link>
						</li>
						<li>
							<Link to="about" spy={true} smooth={true}>
								About
							</Link>
						</li>
						<li>
							<Link to="services" spy={true} smooth={true}>
								Serivces
							</Link>
						</li>
						<li>
							<Link to="works" spy={true} smooth={true}>
								Experience
							</Link>
						</li>
						<li>
							<Link to="portfolio" spy={true} smooth={true}>
								Protfolio
							</Link>
						</li>

						<li>
							<Link to="contact" spy={true} smooth={true}>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Nav;


// <button className="button n-button">Contact</button>;
