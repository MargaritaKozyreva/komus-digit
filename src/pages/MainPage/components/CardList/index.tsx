import Button from '@ui/Button';
import React from 'react';
import { useNavigate } from 'react-router';
import EventCard from '../EventCard';
import ProgressCard from '../ProgressCard';

import './styles.scss';

const CardList = () => {
	return (
		<div className="card">
			<div className="container">
				<div className="card-wrapper">
					<EventCard />
					<ProgressCard />
				</div>
			</div>
		</div>
	);
};

export { CardList };
