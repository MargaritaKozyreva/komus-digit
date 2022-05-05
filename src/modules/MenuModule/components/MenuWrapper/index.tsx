import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const MenuWrapper = ({ children }) => {
	return (
		<div className="mainMenu__wrapper">
			<a className="mobileMenuHamburger" href="#">
				<svg
					width="40"
					height="40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5 30h30v-3.33H5V30Zm0-8.33h30v-3.34H5v3.34ZM5 10v3.33h30V10H5Z"
						fill="#fff"
					/>
				</svg>
			</a>

			{ children }
		</div>
	);
};

export { MenuWrapper };
