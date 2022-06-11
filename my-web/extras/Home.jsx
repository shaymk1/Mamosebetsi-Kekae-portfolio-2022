import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import ProfileImage from '../../assets/profile-2.jpeg';
import './home.css';

const Home = () => {
	return (
		<div
			
		>
			<div >
				<div c>
					<h2 >
						Blockchain Developer
					</h2>
					

					<div>
						<Link
							to="portfolio"
							
						>
							Portfolio
							<span >
								<MdOutlineKeyboardArrowRight  />
							</span>
						</Link>
					</div>
				</div>

				<div>
					<img
						src={ProfileImage}
						alt="my profile"
						
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
