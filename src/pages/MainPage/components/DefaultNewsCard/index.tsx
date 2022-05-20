import React from 'react';
import { IAcademyListData } from '../AcademyList/types';

import './styles.scss';

interface INewsCard {
	num: number;
	data: IAcademyListData['regularArticles'][0];
	onClickHandler: (articleId: any) => any;
}

const DefaultNewsCard: React.FC<INewsCard> = (props) => {
	const {
		num,
		data: { weekDay, date, title, desc, img, articleId },
		onClickHandler
	} = props;

	return (
		<div
			className={ `academy__element none-image academy-item-${ num } academy__item` }
			data-academy-item="1"
			id="academy-1"
		>
			<div className="academy__element-box">
				<div className="academy__element-date">
					{ weekDay }, { date }
				</div>
				<h4 className="academy__element-title">{ title }</h4>
				<p className="academy__element-info">{ desc }</p>
				<a
					className="academy__element-link"
					onClick={ () => onClickHandler(articleId) }
				>
					Читать дальше...
				</a>
			</div>
		</div>
	);
};

export default DefaultNewsCard;
