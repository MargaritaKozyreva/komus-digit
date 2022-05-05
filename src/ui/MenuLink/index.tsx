import React from 'react';
import './styles.scss';


interface IProps {
	text: string;
	href: string;
	iconSrc: string;
}

const MenuLink: React.FC<IProps> = (props) => {

	const { text, href, iconSrc } = props;
	return (
		<li className="mainMenu__item">
			<a className="mainMenu__link" href={ `${process.env['API']}${href}` } target='_blank'>
				<img className="mainMenu__image" src={ `${process.env['API']}${ iconSrc }` } />
				<span className="mainMenu__subj">{ text }</span>
			</a>
		</li>
	);
};

export { MenuLink };
