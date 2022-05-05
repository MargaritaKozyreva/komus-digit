import React, { SVGAttributes } from 'react';

export interface ArrowProps extends SVGAttributes<SVGElement> {
	[key: string]: any;
	size?: 'xs' | 's' | 'm' | 'l' | 'xl';
	color?: string;
	className?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Arrow: React.FC<ArrowProps> = (props): JSX.Element => {
	const { color = 'currentColor', size = 'm', ...attrs } = props;
	const d = sizes[size] || size;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={ d }
			height={ d }
			fill={ color }
			{ ...attrs }
		>
			<defs />
			<path
				d="M1.6034 19.4458L1.95594 19.7983L1.6034 19.4458C1.11918 19.93 1.11918 20.7163 1.6034 21.2005L1.60527 21.2024C1.84693 21.4415 2.16413 21.5634 2.48151 21.5634C2.79652 21.5634 3.11558 21.4446 3.35963 21.2005L12.2505 12.3096C12.7348 11.8254 12.7348 11.0391 12.2505 10.5549L3.35963 1.66394C2.87541 1.17973 2.08907 1.17973 1.60486 1.66394C1.12066 2.14814 1.12064 2.93444 1.60479 3.41866C1.60481 3.41868 1.60483 3.4187 1.60486 3.41872L9.61625 11.4329L1.6034 19.4458Z"
				fill={ color }
				stroke={ color }
			/>
		</svg>
	);
};

Arrow.defaultProps = {
	size: 'm',
	color: 'currentColor'
};

Arrow.displayName = 'Arrow';
export default Arrow;
