import useData from '@src/hooks/getData/getDataHook';
import { WithSkeleton } from '@src/ui/WithSkeleton';
import React from 'react';
import { Link } from 'react-router-dom';
import { footerMockData } from './mockApi/FooterContext';
import './styles.scss';
import { IFooterData } from './types';

const Footer = () => {
	const { isLoading, isError, data } = useData<IFooterData[]>(
		'POST',
		'get_footer_links',
		undefined
	);

	// const data: IFooterData[] = footerMockData;
	// const isLoading = false;
	// const isError = false;

	return (
		<WithSkeleton isLoading={ isLoading } isEmpty={ data === null } error={ isError }>
			<footer className="footer">
				<div className="container">
					<div className="footer-first">
						<div className="footer-wrapper">
							<div className="footer-title">Все сайты Комус</div>
							<div className="footer-line">
								{ data?.map((link, i) => (
									<div className="footer-item" key={ i }>
										<div className="footer-item-title">{ link.title }</div>
										<div className="footer-item-site">
											<a href={ link.url } target='_blank'>{ link.link }</a>
										</div>
									</div>
								)) }
							</div>
						</div>
					</div>
					<div className="footer-second">
						<div className="s-footer-wrapper">
							<div className="s-footer-left">
								<img src="projects_oodp/turbo_so/img/ic/logo_f.svg" alt="logo" />
								<p>© «Комус», 2022</p>
							</div>
							<div className="s-footer-right">
								<p>Мы в соцсетях</p>
								<img src="newportal/footer/img/telegram.png" alt="TELEGRAM" />
							</div>
						</div>
					</div>
				</div>
			</footer>
		</WithSkeleton>
	);
};

export default Footer;
