import React from "react";
import { IAcademyListData } from "../AcademyList/types";

import "./styles.scss";
interface INewsCard {
  data: IAcademyListData["vipArticle"];
  onClickHandler: (articleId: any) => any;
}

const VipNewsCard: React.FC<INewsCard> = props => {
  const {
    data: { weekDay, date, title, desc, img, articleId },
    onClickHandler,
  } = props;
  return (
    <div className="div div6">
      <div className="user-image">
        <img
          src={`${process.env["API"]}/${img}`}
          onError={(event: any) => {
            event.target.src = "course-card-default.svg";
            event.onerror = null;
          }}
        />
      </div>

      <div className="div-wrap">
        <div className="dtitle">
          {weekDay}, {date}
        </div>
        <div className="dbold">{title}</div>
        <div className="dtext">{desc}</div>
        <div className="dread">
          <a
            className="academy__element-link"
            onClick={() => onClickHandler(articleId)}
          >
            Читать дальше...
          </a>
        </div>
      </div>
      <img
        className="vip-anime"
        src={`${process.env["API"]}/komus_num/app/images/a5.png`}
      />
    </div>
  );
};

export default VipNewsCard;
