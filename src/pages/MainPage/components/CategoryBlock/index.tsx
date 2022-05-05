import React, { ReactNode } from 'react';
import cn from 'classnames';

import './styles.scss'

interface CategoryBlockProps {
	title: string;
	button: ReactNode;
	children: any;
	align?: 'right' | 'center' | 'left';
}

const CategoryBlock: React.FC<CategoryBlockProps> = ({
	title,
	button,
	children,
	align = 'center'
}) => {
	const style = cn({
		'text-center': align === 'center',
		'text-right': align === 'right',
		'text-left': align === 'left'
	});
	return (
		<div className={ cn('categorySelection__block', style) }>
			<div className="categorySelection__title">{ title }</div>
			<div className="categorySelection__description">{ children }</div>
			<div>{ button }</div>
		</div>
	);
};

export { CategoryBlock };
