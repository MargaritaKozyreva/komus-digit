import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Card = () => {
	return (
		<div style={ { overflow: 'hidden' } } className="animation-block__wrapper">
			<div className="animation-block__top">
				<div className="animation-block__topBackground" />



				<div className="categorySelection__wrapper">
					<div className="categorySelection__left">
						<a
							href="#index-agile-popup"
							data-effect="mfp-zoom-in"
							className="red-btn arrow popup-opener"
						>
							ценности agile
							<div className="circle" />
						</a>
						<div className="categorySelection__block categorySelection__block_right">
							<div className="categorySelection__title">Цифрокоманда</div>
							<div className="categorySelection__description">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
								odio in et, lectus sit
							</div>
							<div>
								<Link to={'/digital_knowledge'}>
								<a className="categorySelection__button">
									Получить знания
								</a>
								</Link>
								
							</div>
						</div>
					</div>

					<div className="categorySelection__center">
						<div className="centerAnimation__wrapper">
							<img
								className="centerAnimation__man"
								src="images/man_alone.svg"
								alt="superhero"
								title="superhero"
							/>
							<div className="centerAnimation__galo" />
							<div className="centerAnimation__shadow" />
						</div>
					</div>

					<div className="categorySelection__right">
						<div className="categorySelection__block">
							<div className="categorySelection__title">Турбокоманда</div>
							<div className="categorySelection__description">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
								odio in et, lectus sit
							</div>
							<div>
								<a
									className="categorySelection__button categorySelection__button_red"
									href="index3.html"
								>
									Получить знания
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="animation-block__slogan">
				<img
					className="animation-block__sloganImage"
					alt=""
					title=""
				/>
			</div>

			<div className="animation-block__bottom">
				<svg
					id="svg-animation-bottom"
					width="1602"
					height="253"
					viewBox="20 0 1602 203"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M1591 202.75V68.7484C1531 60.7489 1418 54.7489 1418 54.7489L1303 68.7484C1303 68.7484 262.229 88.4165 5 88.4165V202.75H1591Z"
						fill="white"
					/>
					<path
						id="fill_box_0"
						className="fill_box"
						d="M168.001 66.7489H250.001V148.749H168.001V66.7489Z"
						fill="white"
					/>
					<path
						id="fill_box_1"
						className="fill_box"
						d="M101.001 48.7489H183.001V130.749H101.001V48.7489Z"
						fill="white"
					/>
					<path
						id="fill_box_2"
						className="fill_box"
						d="M271.001 53.7489H353.001V135.749H271.001V53.7489Z"
						fill="white"
					/>
					<path
						id="fill_box_3"
						className="fill_box"
						d="M217 77H299V159H217V77Z"
						fill="white"
					/>
					<path
						id="fill_box_4"
						className="fill_box"
						d="M434 27.749H516V109.749H434V27.749Z"
						fill="white"
					/>
					<path
						id="fill_box_5"
						className="fill_box"
						d="M379.089 48.749H461.089V130.749H379.089V48.749Z"
						fill="white"
					/>
					<path
						id="fill_box_6"
						className="fill_box"
						d="M489.001 48.7489H571.001V130.749H489.001V48.7489Z"
						fill="white"
					/>
					<path
						id="fill_box_7"
						className="fill_box"
						d="M547 19.5199H629V101.52H547V19.5199Z"
						fill="white"
					/>
					<path
						id="fill_box_8"
						className="fill_box"
						d="M609.001 12.749H691.001V94.7489H609.001V12.749Z"
						fill="white"
					/>
					<path
						id="fill_box_9"
						className="fill_box"
						d="M652.001 35.749H734.001V117.749H652.001V35.749Z"
						fill="white"
					/>
					<path
						id="fill_box_10"
						className="fill_box"
						d="M716.001 48.7489H798.001V130.749H716.001V48.7489Z"
						fill="white"
					/>
					<path
						id="fill_box_11"
						className="fill_box"
						d="M762.001 35.749H844.001V117.749H762.001V35.749Z"
						fill="white"
					/>
					<path
						id="fill_box_12"
						className="fill_box"
						d="M830.001 54.7489H912.001V136.749H830.001V54.7489Z"
						fill="white"
					/>
					<path
						id="fill_box_13"
						className="fill_box"
						d="M885.001 35.749H967.001V117.749H885.001V35.749Z"
						fill="white"
					/>
					<path
						id="fill_box_14"
						className="fill_box"
						d="M953.001 54.7489H1035V136.749H953.001V54.7489Z"
						fill="white"
					/>
					<path
						id="fill_box_15"
						className="fill_box"
						d="M329.001 60.7489H411.001V142.749H329.001V60.7489Z"
						fill="white"
					/>
					<path
						id="fill_box_16"
						className="fill_box"
						d="M1008 35.749H1090V117.749H1008V35.749Z"
						fill="white"
					/>
					<path
						id="fill_box_17"
						className="fill_box"
						d="M1056 48.7489H1138V130.749H1056V48.7489Z"
						fill="white"
					/>
					<path
						id="fill_box_18"
						className="fill_box"
						d="M1107 60.7489H1189V142.749H1107V60.7489Z"
						fill="white"
					/>
					<path
						id="fill_box_19"
						className="fill_box"
						d="M1157 41.7489H1239V123.749H1157V41.7489Z"
						fill="white"
					/>
					<path
						id="fill_box_20"
						className="fill_box"
						d="M1209 54.7489H1291V136.749H1209V54.7489Z"
						fill="white"
					/>
					<path
						id="fill_box_21"
						className="fill_box"
						d="M1272 27.749H1354V109.749H1272V27.749Z"
						fill="white"
					/>
					<path
						id="fill_box_22"
						className="fill_box"
						d="M1316 41.7489H1398V123.749H1316V41.7489Z"
						fill="white"
					/>
					<path
						id="fill_box_23"
						className="fill_box"
						d="M1367 19.5199H1449V101.52H1367V19.5199Z"
						fill="white"
					/>
					<path
						id="fill_box_24"
						className="fill_box"
						d="M1424 0H1506V81.9999H1424V0Z"
						fill="white"
					/>
					<path
						id="fill_box_25"
						className="fill_box"
						d="M1474 27.749H1556C1556 27.749 1556 52.7375 1556 68.7489C1556 84.7604 1556 109.749 1556 109.749H1474V27.749Z"
						fill="white"
					/>
					<path
						id="fill_box_26"
						className="fill_box"
						d="M51.0009 81.9999H133.001V174.251H51.0009V81.9999Z"
						fill="white"
					/>
					<path
						id="fill_box_27"
						className="fill_box"
						d="M1520 35.749H1602V76.7489V117.749H1520V35.749Z"
						fill="white"
					/>
					<path
						id="fill_box_28"
						className="fill_box"
						d="M0 71.7491H82V164H0V71.7491Z"
						fill="white"
					/>
				</svg>
			</div>
		</div>
	);
};

export { Card };
