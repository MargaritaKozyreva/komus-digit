import React from 'react';
import useData from '../../hooks/getData/getDataHook';
import { IGlossSelectionData } from 'src/pages/MainPage/components/GlossSelection/types';
import { WithSkeleton } from '@ui/WithSkeleton';

import './styles.scss';
import { useDispatch } from 'react-redux';
import { modalActions } from '@modules/Modal/redux/ModalSlices';
import { ModalKey } from '@modules/Modal/components/ModalController';
import { IAgileData } from './types';

const Agile = () => {
	const { isLoading, isError, data } = useData<IAgileData>(
		'GET',
		'get_agile_popup'
	);

	return (
		<WithSkeleton isLoading={ isLoading } isEmpty={ data === null } error={ isError }>
			{ data && <div dangerouslySetInnerHTML={ { __html: data.agile_text } } /> }
		</WithSkeleton>
	);
};

export { Agile };
