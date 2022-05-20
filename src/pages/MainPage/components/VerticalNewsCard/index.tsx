import React from "react";
import "./styles.scss";
import { IAcademyListData } from "../AcademyList/types";

interface IVerticalNewsCard {
  num: number;
  data: IAcademyListData["regularArticles"][0];
  onClickHandler: (articleId: any) => any;
}

const VerticalNewsCard: React.FC<IVerticalNewsCard> = props => {
  const {
    num,
    data: { weekDay, date, title, desc, img, articleId },
    onClickHandler,
  } = props;
  return (
    <div
      className={`academy__element mobile-left academy-item-${num} academy__item`}
      data-academy-item="0"
      id="academy-0"
    >
      <div className="academy__element-image">
        <img
          src={`${process.env["API"]}${img}`}
          onError={(event: any) => {
            event.target.src = "course-card-default.svg";
            event.onerror = null;
          }}
        />

        <svg
          width="320"
          height="335"
          viewBox="0 0 320 335"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <mask
            id="mask0_99_98"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="-53"
            y="-26"
            width="449"
            height="361"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M152.562 -10.2307C215.828 -13.0237 285.175 -46.9986 333.078 -5.62109C387.253 41.1733 411.114 124.409 386.003 191.411C362.911 253.025 284.438 260.283 223.799 285.955C169.234 309.055 115.889 350.182 60.4623 329.23C1.10083 306.792 -33.3886 245.612 -46.8486 183.651C-60.1178 122.569 -53.8368 53.0755 -8.99864 9.48038C31.9053 -30.2896 95.5373 -7.7133 152.562 -10.2307Z"
              fill="#C4C4C4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M152.562 -10.2307C215.828 -13.0237 285.175 -46.9986 333.078 -5.62109C387.253 41.1733 411.114 124.409 386.003 191.411C362.911 253.025 284.438 260.283 223.799 285.955C169.234 309.055 115.889 350.182 60.4623 329.23C1.10083 306.792 -33.3886 245.612 -46.8486 183.651C-60.1178 122.569 -53.8368 53.0755 -8.99864 9.48038C31.9053 -30.2896 95.5373 -7.7133 152.562 -10.2307Z"
              fill="#B1CDDD"
            />
          </mask>
          <g mask="url(#mask0_99_98)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M152.562 -10.2307C215.828 -13.0237 285.175 -46.9986 333.078 -5.62109C387.253 41.1733 411.114 124.41 386.003 191.411C362.91 253.025 284.438 260.283 223.799 285.955C169.234 309.055 115.889 350.182 60.4623 329.23C1.10083 306.792 -33.3886 245.612 -46.8486 183.651C-60.1178 122.569 -53.8368 53.0755 -8.99864 9.48038C31.9053 -30.2896 95.5374 -7.7133 152.562 -10.2307Z"
              fill="#C4C4C4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M152.562 -10.2307C215.828 -13.0237 285.175 -46.9986 333.078 -5.62109C387.253 41.1733 411.114 124.41 386.003 191.411C362.91 253.025 284.438 260.283 223.799 285.955C169.234 309.055 115.889 350.182 60.4623 329.23C1.10083 306.792 -33.3886 245.612 -46.8486 183.651C-60.1178 122.569 -53.8368 53.0755 -8.99864 9.48038C31.9053 -30.2896 95.5374 -7.7133 152.562 -10.2307Z"
              fill={`url(#pattern${num})`}
            />
          </g>
          <defs>
            <pattern
              id={`pattern${num}`}
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref={`#course-card-${articleId}`}
                transform="translate(-0.103157) scale(0.000603157 0.000750188)"
              />
            </pattern>

            <image
              id={`course-card-${articleId}`}
              width="2000"
              height="1333"
              xlinkHref={`${process.env["API"]}${img}`}
              onError={(event: any) => {
                event.target.src = "course-card-default.svg";
                event.onerror = null;
              }}
            />
          </defs>
        </svg>
      </div>

      <div className="academy__element-box">
        <div className="academy__element-date">
          {weekDay}, {date}
        </div>
        <h4 className="academy__element-title">{title}</h4>
        <p className="academy__element-info">{desc}</p>
        <a
          className="academy__element-link"
          onClick={() => onClickHandler(articleId)}
        >
          Читать дальше...
        </a>
      </div>
    </div>
  );
};

export default VerticalNewsCard;
