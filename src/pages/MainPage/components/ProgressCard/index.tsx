import React from 'react';
import Button from '@ui/Button';
import { WithSkeleton } from '@ui/WithSkeleton';
import { useNavigate } from 'react-router';
import { progressWidgetMockData } from './mockData/ProgressCardContext';
import { IProgressData } from './types';
import useData from '../../../../hooks/getData/getDataHook';

import './styles.scss';

const ProgressCard = () => {
	const navigate = useNavigate();

	const { isLoading, isError, data } = useData<{
		progressWidget: IProgressData;
	}>('POST', 'get_event_widget', undefined);

	// const data = progressWidgetMockData;
	// const isLoading = false;
	// const isError = false;

	return (
		<WithSkeleton isLoading={ isLoading } isEmpty={ data === null } error={ isError }>
			<div className="card-item card-item2">
				<div className="left-block">
					<div className="left-blocktext">
						<p>{ data?.progressWidget.progressTitle }</p>
						<span>{ data?.progressWidget.progressValue }</span>
					</div>
				</div>
				<div className="right-block grid-item">
					<div className="right-block-text">
						{ data?.progressWidget.descTitle }
					</div>
					<div className="right-block-btn">
						{ data?.progressWidget.goToLink && (
							<a href={ data?.progressWidget.goToLink } target='_blank'>
								<Button
									mode="lightBlue"
									withCircle
								>
									Вперед
								</Button>
							</a>
						) }
					</div>
				</div>
			</div>
		</WithSkeleton>
	);
};

export default ProgressCard;
