import React from 'react';
import useData from '../../hooks/getData/getDataHook';
import { IGlossSelectionData } from 'src/pages/MainPage/components/GlossSelection/types';
import { WithSkeleton } from '@ui/WithSkeleton';

import './styles.scss';
import { useDispatch } from 'react-redux';
import { modalActions } from '@modules/Modal/redux/ModalSlices';
import { ModalKey } from '@modules/Modal/components/ModalController';

const Glossary = () => {
	const { isLoading, isError, data } = useData<IGlossSelectionData[]>(
		'GET',
		'get_glossary'
	);

	const dispatch = useDispatch();

	const onClickHandler = (wordItem) => {
		dispatch(modalActions.showModal({
			key: ModalKey.GlossaryWord,
			withBackground: true,
			payload: {
				word: wordItem
			}
		}));
	};

	return (
		<WithSkeleton isLoading={ isLoading } isEmpty={ data === null } error={ isError }>
			<div className="gloss-popup-wrap default-popup-container">
				<h2 className="gloss-popup__title">Глоссарий</h2>
				<div className="gloss-popup__inner">
					{ data?.map((wordParam) => {
						return (
							<div className="gloss-popup__item" key={ wordParam.liter }>
								<h6 className="gloss-popup__item-title">{ wordParam.liter }</h6>
								{ wordParam.words.map((wordItem) => {
									return (
										<span
											className="gloss-popup__item-linkk"
											onClick={ () => onClickHandler(wordItem) }
											key={ wordItem.title }
										>
											{ wordItem.title }
										</span>
									);
								}) }
							</div>
						);
					}) }
				</div>
			</div>
		</WithSkeleton>
	);
};

export default Glossary;
