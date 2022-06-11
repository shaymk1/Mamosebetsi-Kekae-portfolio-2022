// import { AiFillProject } from 'react-icons/ai';
// import { BsFillFileEarmarkCodeFill } from 'react-icons/bs';
// import { MdOutlineWork } from 'react-icons/md';
import ME from '../../assets/profile-2.jpeg';
import './about.css';

const About = () => {
	return (
		<section id="about">
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img className="" src={ME} alt="my first profile pic" />
					</div>
				</div>

				
					<p>
						I am a Python Developer transitioning into being a Blockchain
						developer. I am intrigued about this new revolutionary technology
						and i want to be part of it.
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			
		</section>
	);
};
// import ME from '../../assets/profile-2.jpeg';
export default About;
