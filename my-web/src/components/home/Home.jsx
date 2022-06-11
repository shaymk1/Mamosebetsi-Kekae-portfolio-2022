import { Fragment } from "react";
import './home.css';
import HeaderSocial from './HeaderSocial';
import CTA from './CTA';


const Home = () => {
  return (
		<Fragment>
			<section id="home">
				<div className="container header__container">
					<h5>Hello, I am</h5>
					<h1>Mamosebetsi kekae</h1>
					<h3 className="text-light">
						<span className="span">Blockchain Solidity</span>Developer
					</h3>
					<CTA />
					<HeaderSocial />
					<a href="#contact" className="scroll__down">
						Scroll Down
					</a>
				</div>
			</section>
		</Fragment>
	);
}

export default Home