import React from 'react';
import { CardList } from '../../pages/MainPage/components/CardList';
import { AcademyList } from './components/AcademyList';
import { GlossSelection } from './components/GlossSelection';
import HeaderBottom from './components/HeaderBottom';
import HelpSelection from './components/HelpSelection';
import { MainMenuTopBlock } from './components/MainMenuTopBlock';

const MainPage = () => {
	return (
		<div>
			<HeaderBottom />
			<CardList />
			<AcademyList />
		</div>
	);
};

export { MainPage };
