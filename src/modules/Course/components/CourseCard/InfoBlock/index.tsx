
import React from 'react';
import './styles.scss';

const InfoBlock = (props: any) => {
	return (
		<div className="InfoBlock">
			<span> { props.text }</span>
			<div className="InfoBlockValue">
				{ props.icon == 'fire' ? '🔥' : '' } { props.value }
			</div>
		</div>
	);
};

export default InfoBlock;
