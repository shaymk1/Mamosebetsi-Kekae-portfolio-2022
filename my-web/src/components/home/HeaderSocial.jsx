import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const HeaderSocial = () => {
	return (
		<div className="header__social">
			<a href="https://linkedin.com" target="_blank" rel="noreferrer">
				<BsLinkedin />
			</a>
			<a href="https://github.com/shaymk1" target="_blank" rel="noreferrer">
				<BsGithub />
			</a>
		</div>
	);
};

export default HeaderSocial;
