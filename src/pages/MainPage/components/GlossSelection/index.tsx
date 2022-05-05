import React from 'react';
import Button from '@ui/Button';
import { useDispatch } from 'react-redux';
import { modalActions } from '@modules/Modal/redux/ModalSlices';
import { ModalKey } from '@modules/Modal/components/ModalController';

import './styles.scss';

const GlossSelection = () => {
	const dispatch = useDispatch();

	const onClickHandler = () => {
		dispatch(modalActions.showModal({
			withBackground: true,
			key: ModalKey.Glossary,
			payload: null
		}));
	};

	return (
		<div className="gloss">
			<div className="container">
				<div className="gloss__inner">
					<div className="gloss__image">
						<h2 className="gloss__info-title gloss__info-title--image">
							Глоссарий
						</h2>
						<img src={`${process.env["API"]}/komus_num/app/public/gloss.png`} alt="" />
					</div>
					<div className="gloss__info">
						<h2 className="gloss__info-title">Глоссарий</h2>
						<p className="gloss__info-text">
							В любом новом деле важно «на берегу» договориться о терминах и
							определениях, чтобы все говорили на одном языке. На днях Scaled
							Agile опубликовали русский перевод глоссария терминов SAFe 4.0
						</p>
						<Button mode="lightBlue" onClick={ onClickHandler }>
							Читать всё
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export { GlossSelection };
