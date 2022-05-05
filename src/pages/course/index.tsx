import { CourseContainer } from '@modules/Course/containers/CourseContainer';
import { Page } from '@ui/Page';
import React from 'react';

const CoursePage: React.FC = () => {
	return (
		<Page title="Курс">
			<CourseContainer />
		</Page>
	);
};

export { CoursePage };
