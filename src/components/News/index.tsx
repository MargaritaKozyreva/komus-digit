import { ModalState } from '@modules/Modal/redux/ModalSlices';
import { WithSkeleton } from '@ui/WithSkeleton';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useData from './../../hooks/getData/getDataHook';
import { newsMockData } from './dataContext/mockApi/NewsModuleContext';
import { NewsDataDTO } from './dataContext/NewsModuleDTO.dto';

import './styles.scss';

export interface NewsProps {
	newsId?: string | number;
}

const NewsView: React.FC<NewsProps> = (props) => {
	const { newsId } = props;
	const { isLoading, isError, data } = useData<NewsDataDTO.INewsData>(
		'GET',
		'get_article_body',
		`article_id=${ newsId }`,
		[newsId]
	);

	// const data = newsMockData;
	// const isLoading = false;
	// const isError = false;

	return (
		<WithSkeleton
			isLoading={ isLoading }
			isEmpty={ data === null }
			error={ isError }
		>
			{ data && <div dangerouslySetInnerHTML={ { __html: data.html_text } } /> }
		</WithSkeleton>
	);
};

export default NewsView;
