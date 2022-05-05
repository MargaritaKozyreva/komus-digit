import useData from "@src/hooks/getData/getDataHook";
import React from "react";
import { TurboPersonCard } from "../TurboPersonCard/TurboPersonCard";
import { TurboDTO } from "../../interfaces/liders.interface";
import { WithSkeleton } from "@src/ui/WithSkeleton";
import { personTeamData } from "@src/mock-data/turbo";
import "./TurboPersonModalContent.scss";
import { useDispatch } from "react-redux";
import { modalActions } from "@src/modules/Modal/redux/ModalSlices";
import { ModalKey } from "@src/modules/Modal/components/ModalController";

interface TurboPersonCardProps {
  personId?: number | string | null;
}

const TurboPersonModalContent: React.FC<TurboPersonCardProps> = props => {
  const { isLoading, isError, data } = useData<TurboDTO.IPersonTeams>(
  	'GET',
  	'get_person_turbo_teams'
  );

  // const isLoading = false;
  // const isError = false;
  // const data = personTeamData;

  const dispatch = useDispatch();

  const onClickHandler = (id, desc) => {
    dispatch(
      modalActions.showModal({
        key: ModalKey.TurboTeamInfo,
        withBackground: true,
        payload: {
          id,
          desc,
        },
      })
    );
  };

  const { personId } = props;
  return (
    <WithSkeleton isLoading={isLoading} isEmpty={data === null} error={isError}>
      <div className="turbo-content__wrapper">
        <TurboPersonCard className="turbo-person-card">
          <div className="person-turbo-image">
            <svg
              width={151}
              height={179}
              viewBox="0 0 151 179"
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
                  width={151}
                  height={179}
                >
                  <rect
                    x="0.5"
                    y="204.5"
                    width={151}
                    height={179}
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
                <rect width={151} height={179} rx={20} fill="url(#pattern0)" />
              </g>
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width={1}
                  height={1}
                >
                  <use
                    xlinkHref="#image0_5_1422"
                    transform="translate(-0.0927152) scale(0.00504438 0.00425532)"
                  />
                </pattern>
                <image
                  id="image0_5_1422"
                  width={235}
                  height={235}
                  xlinkHref="https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg"
                />
              </defs>
            </svg>
          </div>

          <div className="reviews__item-info">
            <div className="reviews__item-head">
              <div className="reviews__item-headbox">
                <h6 className="reviews__item-name">{data?.person.fullname}</h6>
              </div>
            </div>
            <p className="reviews__item-text">{data?.person.positionName}</p>
          </div>
        </TurboPersonCard>
        {data?.teams.map(turboCardItem => (
          <TurboPersonCard>
            <div className="reviews__item-info">
              <h3>{turboCardItem.title}</h3>
              <div className='turbo-content__desc'>{turboCardItem.minDescription}</div>
              <p>
                <a
                  className="reviews__item-link"
                  onClick={() =>
                    onClickHandler(
                      turboCardItem.id,
                      turboCardItem.maxDescription
                    )
                  }
                >
                  Подробнее
                </a>
              </p>
            </div>
          </TurboPersonCard>
        ))}
      </div>
    </WithSkeleton>
  );
};

export { TurboPersonModalContent };
