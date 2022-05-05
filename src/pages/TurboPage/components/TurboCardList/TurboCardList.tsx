import React from "react";
import Slider from "react-slick";
import { TurboDTO } from "@src/interfaces/liders.interface";
import { useDispatch } from "react-redux";
import { modalActions } from "@src/modules/Modal/redux/ModalSlices";
import { ModalKey } from "@src/modules/Modal/components/ModalController";
// import { turboPersonData } from '@src/mock-data/turbo';
import "./TurboCardList.scss";
import useData from "@src/hooks/getData/getDataHook";
import { WithSkeleton } from "@src/ui/WithSkeleton";

interface TurboCardListProps {}

const TurboCardList: React.FC<TurboCardListProps> = props => {
  const { isLoading, isError, data } = useData<TurboDTO.IPerson[] | []>(
    "POST",
    "get_turbo_leaders",
    undefined
  );

  const dispatch = useDispatch();

  const onClickHandler = personId => {
    dispatch(
      modalActions.showModal({
        key: ModalKey.TurboPerson,
        withBackground: false,
        payload: {
          personId: personId,
        },
      })
    );
  };

  const settings = {
    className: "reviews__slider",
    centerMode: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    rows: 3,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <div className="">
        <div className="reviews idx-3">
          <div className="container_card">
            <div className="reviews__inner">
              <h2 className="reviews__title">Лидеры турбокоманд</h2>
              <WithSkeleton
                isLoading={isLoading === true}
                isEmpty={data === null}
                error={isError}
              >
                <Slider {...settings}>
                  {data?.map(card => (
                    <div className="reviews__item leader" key={card.person_id}>
                      <div className="reviews__item-image">
                        <svg
                          width={436}
                          height={205}
                          viewBox="0 0 436 205"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <mask
                            id="mask0_5_1422"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={143}
                            height={176}
                          >
                            <mask
                              id="mask1_5_1422"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x={0}
                              y={0}
                              width={436}
                              height={205}
                            >
                              <rect
                                x="0.5"
                                y="204.5"
                                width={204}
                                height={435}
                                rx="19.5"
                                transform="rotate(-90 0.5 204.5)"
                                fill="#7EABC5"
                                stroke="#B1CDDD"
                              />
                            </mask>
                            <g mask="url(#mask1_5_1422)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M136.19 118.687C143.321 101.279 143.204 82.7551 142.243 63.971C141.332 46.1716 139.008 28.8988 130.787 13.0902C121.348 -5.05935 111.389 -25.8901 92.0479 -32.55C72.6305 -39.2361 52.8025 -26.496 33.1448 -20.5317C12.9399 -14.4015 -10.9179 -13.7879 -24.1197 2.69583C-37.4919 19.3926 -36.516 43.0453 -34.8497 64.3668C-33.2899 84.3262 -28.3209 104.55 -14.993 119.481C-2.34747 133.648 18.3185 134.621 35.3528 143.013C56.5642 153.463 73.9238 180.161 96.9174 174.614C119.612 169.139 127.338 140.294 136.19 118.687Z"
                                fill="#C4C4C4"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M136.19 118.687C143.321 101.279 143.204 82.7551 142.243 63.971C141.332 46.1716 139.008 28.8988 130.787 13.0902C121.348 -5.05935 111.389 -25.8901 92.0479 -32.55C72.6305 -39.2361 52.8025 -26.496 33.1448 -20.5317C12.9399 -14.4015 -10.9179 -13.7879 -24.1197 2.69583C-37.4919 19.3926 -36.516 43.0453 -34.8497 64.3668C-33.2899 84.3262 -28.3209 104.55 -14.993 119.481C-2.34747 133.648 18.3185 134.621 35.3528 143.013C56.5642 153.463 73.9238 180.161 96.9174 174.614C119.612 169.139 127.338 140.294 136.19 118.687Z"
                                fill="black"
                                fillOpacity="0.2"
                              />
                            </g>
                          </mask>
                          <g mask="url(#mask0_5_1422)">
                            <rect
                              width={151}
                              height={179}
                              rx={20}
                              fill="url(#pattern0)"
                            />
                          </g>
                          <defs>
                            <pattern
                              id="pattern0"
                              patternContentUnits="objectBoundingBox"
                              width={1}
                              height={1}
                            >
                              <use
                                xlinkHref="#image0_5_142222"
                                transform="translate(-0.0927152) scale(0.00504438 0.00425532)"
                              />
                            </pattern>
                            <image
                              id="image0_5_142222"
                              width={235}
                              height={235}
                              xlinkHref={`${process.env["API"]}/${card.img}`}
                              onError={(event: any) => {
                                event.target.src = "/komus_num/app/public/noname.png";
                                event.onerror = null;
                              }}
                            />
                          </defs>
                        </svg>
                      </div>
                      <div className="reviews__item-info">
                        <div className="reviews__item-head">
                          <div className="reviews__item-image">
                            <img
                              alt=""
                              src={`${
                                card.img !== undefined
                                  ? `${process.env["API"]}${card.img}`
                                  : `cat.jpg`
                              }`}
                            />
                          </div>
                          <div className="reviews__item-headbox">
                            <h6 className="reviews__item-name">
                              {card.fullname}
                            </h6>
                            <div
                              id="rateYo"
                              data-rateyo-rating={3}
                              className="reviews__item-rate"
                            />
                          </div>
                        </div>
                        <p className="reviews__item-text">
                          {card.positionName}
                        </p>
                        <a
                          className="reviews__item-link"
                          onClick={() => onClickHandler(card.person_id)}
                        >
                          Подробнее
                        </a>
                      </div>
                      <div className="reviews__item-count">
                        <img
                          src={`${process.env["API"]}/komus_num/app/images/icons/likes.svg`}
                          alt="likes"
                        />
                        <span>{card.likes || 0}</span>
                      </div>
                    </div>
                  ))}
                </Slider>
              </WithSkeleton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TurboCardList };
