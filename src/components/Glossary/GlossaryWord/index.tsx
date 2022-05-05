import { ModalKey } from '@src/modules/Modal/components/ModalController';
import { modalActions } from '@src/modules/Modal/redux/ModalSlices';
import React from 'react';
import { useDispatch } from 'react-redux';
import { IGlossWord } from 'src/pages/MainPage/components/GlossSelection/types';

interface IProps {
	word?: IGlossWord;
}

const GlossaryWord: React.FC<IProps> = (props) => {
	const { word } = props;
	const dispatch = useDispatch();

	const onClickHandler = () => {
		dispatch(modalActions.showModal({
			key: ModalKey.Glossary,
			payload: null
		}));
	};

	return (
		<div className="gloss-popup-link__wrapper default-popup-container">
			<a
				className="academy__element-link"
				onClick={ onClickHandler }
				style={ {
					display: 'inline-block',
					marginBottom: '20px',
					cursor: 'pointer'
				} }
			>
				Назад
			</a>
			<h2 className="gloss-popup__title">{ word?.title }</h2>
			<p className="gloss-popup__text">{ word?.desc }</p>
		</div>
	);
};

export default GlossaryWord;
