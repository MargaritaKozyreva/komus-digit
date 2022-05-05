import Button from '@ui/Button';
import React from 'react';
import { CategoryBlock } from '../CategoryBlock';
import './styles.scss';

import AnimatedMen from '@images/man_alone.svg';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { modalActions } from '@modules/Modal/redux/ModalSlices';
import { ModalKey } from '@modules/Modal/components/ModalController';

const CategorySelection = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const url = useLocation();

	const onClickHandler = () => {
		dispatch(modalActions.showModal({
			key: ModalKey.Agile,
			payload: null,
			withBackground: true
		}));
	};
	return (
		<div className="categorySelection__wrapper">
			<div className="categorySelection__left">
				<Button mode="red" onClick={ onClickHandler } withCircle className='red-btn arrow'>
					Ценности Agile
				</Button>
				<CategoryBlock
					title="Цифрокоманда"
					button={
						<Button mode="blue" onClick={ () => navigate(url.pathname+'/digital_knowledge') }>
							Получить знания
						</Button>
					}
					align="right"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
					et, lectus sit
				</CategoryBlock>
			</div>

			<div className="categorySelection__center">
				<div className="centerAnimation__wrapper">
					<div className="centerAnimation__man">
						<AnimatedMen />
					</div>
					<div className="centerAnimation__galo" />
					<div className="centerAnimation__shadow" />
				</div>
			</div>

			<div className="categorySelection__right">
				<CategoryBlock
					title="Турбокоманда"
					button={
						<Button mode="red" onClick={ () => navigate(url.pathname+'/turbo_knowledge') }>
							Получить знания
						</Button>
					}
					align="left"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
					et, lectus sit
				</CategoryBlock>
			</div>
		</div>
	);
};

export { CategorySelection };
