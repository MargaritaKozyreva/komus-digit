import React from 'react';
import './styles.scss';

interface IProps {
	children: any;
}

const MenuLinks: React.FC<IProps> = (props) => {
	const { children } = props;
	return (
		<div className="mainMenu__content">
            <a className="mobileMenuCloseBtn">
              <svg
                width="28"
                height="28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 2.82 25.18 0 14 11.18 2.82 0 0 2.82 11.18 14 0 25.18 2.82 28 14 16.82 25.18 28 28 25.18 16.82 14 28 2.82Z"
                  fill="#fff"
                />
              </svg>
            </a>
			<ul className="mainMenu__items">{ children }</ul>
		</div>
	);
};

export { MenuLinks };
