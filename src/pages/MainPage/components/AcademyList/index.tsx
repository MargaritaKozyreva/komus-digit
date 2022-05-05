import React from 'react';
import useData from '../../../../hooks/getData/getDataHook';
import { digitAcademyMockData } from './mockApi/AcademyListContext';
import { IAcademyListData } from './types';
import './styles.scss';
import { WithSkeleton } from '@ui/WithSkeleton';
import VerticalNewsCard from '../VerticalNewsCard';
import GorizontalNewsCard from '../GorizontalNewsCard';
import DefaultNewsCard from '../DefaultNewsCard';
import VipNewsCard from '../VipNewsCard';
import { modalActions } from '@modules/Modal/redux/ModalSlices';
import { useDispatch } from 'react-redux';
import { ModalKey } from '@modules/Modal/components/ModalController';

const AcademyList = () => {
	const { isLoading, isError, data } = useData<IAcademyListData>(
		'GET',
		'get_digit_academy',
		'blog_code=komus_digit_main'
	);


	const dispatch = useDispatch();

	const onClickHandler = (articleId) => {
		if (articleId !== null) {
			dispatch(modalActions.showModal({
				key: ModalKey.News,
				withBackground: true,
				payload: {
					newsId: articleId
				}
			}));
		}
	};

	// const data = digitAcademyMockData;
	// const isLoading = false;
	// const isError = false;

	const cardList = {
		0: VerticalNewsCard,
		1: GorizontalNewsCard,
		2: DefaultNewsCard,
		3: VerticalNewsCard,
		4: GorizontalNewsCard,
		5: VerticalNewsCard,
		6: GorizontalNewsCard,
		7: DefaultNewsCard,
		8: VerticalNewsCard,
		9: GorizontalNewsCard,
		10: VerticalNewsCard
	};

	return (
		<div className="academy">
			<div className="container">
				<div className="academy-title">Академия цифры</div>
				<div className="parent">
					<WithSkeleton
						isLoading={ isLoading }
						isEmpty={ data === null }
						error={ isError }
					>
						<div className="parent__wrapper">
							<div className="parent__inner">
								{ data?.regularArticles.map((elem, index) => {
									const CardComponent = cardList[index];
									return (
										<CardComponent
											key={ elem.articleId }
											data={ data?.regularArticles[index] }
											num={ index + 1 }
											onClickHandler={ onClickHandler }
										/>
									);
								}) }
							</div>
						</div>
						<div className="parent__aside">
							{ data && <VipNewsCard data={ data?.vipArticle } onClickHandler={ onClickHandler }/> }
						</div>
					</WithSkeleton>
				</div>
			</div>
		</div>
	);
};

export { AcademyList };
