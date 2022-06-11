import { AiFillProject } from 'react-icons/ai';
import { BsFillFileEarmarkCodeFill } from 'react-icons/bs';
import { MdOutlineWork } from 'react-icons/md';
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

				<div className="about__content">
					<div className="about__cards">
						{/* card-1 experience */}
						<article className="about__card">
							<MdOutlineWork className="about__icon" />
							<h5>Experience</h5>
							<small>2+ years</small>
						</article>
						{/* card-2 skills */}
						<article className="about__card">
							<BsFillFileEarmarkCodeFill className="about__icon" />
							<h5>Skills</h5>
							<small>My skill-set</small>
						</article>
						{/* card-3 projects */}
						<article className="about__card">
							<AiFillProject className="about__icon" />
							<h5>Projects</h5>
							<small>My work!</small>
						</article>
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
			</div>
		</section>
	);
};
// import ME from '../../assets/profile-2.jpeg';
export default About;
