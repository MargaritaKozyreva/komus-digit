import React from 'react';
import './styles.scss';

interface UserBarProps {
	userImage: string;
	userName: string;
	link: string;
}

const UserBar: React.FC<UserBarProps> = ({ userImage, userName, link }) => {
	return (
		<div className="mainMenu__userContainer">
			<a href={ link } className="mainMenu__userLink" target='_blank'>
				<div className="mainMenu__userQuest">Задать вопрос</div>
				<img className="mainMenu__userPhoto" src={ userImage } alt="" title="" />
				<div className="mainMenu__userName">{ userName }</div>
			</a>
		</div>
	);
};

export { UserBar };
