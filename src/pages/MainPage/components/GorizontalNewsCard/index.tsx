import cn from 'classnames';
import React from 'react';
import { IAcademyListData } from '../AcademyList/types';

import './styles.scss';

interface INewsCard {
	num: number;
	data: IAcademyListData['regularArticles'][0];
	onClickHandler: (articleId: any) => any;
}

const GorizontalNewsCard: React.FC<INewsCard> = (props) => {
	const {
		num = 1,
		data: { weekDay, date, title, desc, img, articleId },
		onClickHandler
	} = props;

	const style = {
		gridArea: `Item-${ num }`
	};

	return (
		<div
			className={ cn(`academy__element mobile-left academy-item-${ num } academy__item`) }
			style={ style }
			data-academy-item="1"
			id="academy-1"
		>
			<div className="academy__element-image">
			<img src={ `${ img !== undefined ?  `${process.env['API']}/${img}` : `${process.env['API']}/komus_digit/images/default.png`}` } />
				<svg
					width="303"
					height="318"
					viewBox="0 0 303 318"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
				>
					<mask
						id="mask0_1_1199"
						style={ { maskType: 'alpha' } }
						maskUnits="userSpaceOnUse"
						x="0"
						y="-51"
						width="499"
						height="479"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M262.177 -48.6671C336.462 -42.1221 399.862 -4.02655 444.673 49.4482C487.651 100.735 508.864 164.478 493.235 227.061C477.524 289.974 426.545 337.508 364.556 370.258C293.511 407.792 209.704 447.71 135.05 416.294C59.9612 384.695 45.6374 300.319 26.5127 228.003C7.0875 154.551 -22.7834 72.7768 28.3332 12.766C80.1757 -48.0971 177.125 -56.1607 262.177 -48.6671Z"
							fill="#C4C4C4"
						/>
					</mask>
					<g mask="url(#mask0_1_1199)">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M262.004 -40.3013C336.288 -33.7564 399.688 4.33916 444.5 57.8139C487.478 109.101 508.691 172.844 493.062 235.427C477.35 298.34 426.372 345.874 364.383 378.624C293.337 416.158 209.53 456.075 134.877 424.66C59.7879 393.061 45.464 308.684 26.3394 236.369C6.91416 162.916 -22.9568 81.1425 28.1598 21.1317C80.0024 -39.7314 176.952 -47.795 262.004 -40.3013Z"
							fill="url(#pattern1)"
						/>
					</g>
					<defs>
						<pattern
							id="pattern1"
							patternContentUnits="objectBoundingBox"
							width="1"
							height="1"
						>
							<use
								xlinkHref="#image0_1_1199"
								transform="translate(-0.686233 0.0737312) scale(0.00131583)"
							/>
						</pattern>
						<image
							id="image0_1_1199"
							width="1430"
							height="640"
							xlinkHref={`${ img !== undefined ?  `${process.env['API']}/${img}`  : `cat.jpg`}`}
						/>
					</defs>
				</svg>
			</div>

			<div className="academy__element-box">
				<div className="academy__element-date">{weekDay}, {date}</div>
				<h4 className="academy__element-title">{title}</h4>
				<p className="academy__element-info">
					{desc}
				</p>
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

export default GorizontalNewsCard;
