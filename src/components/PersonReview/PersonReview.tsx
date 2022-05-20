import React from "react";
import { Rating } from "../Raiting";
import { CourseDTO } from "@modules/Course/dataContext/CourseDTO.dto";

import cn from "classnames";
import styles from "./PersonReview.module.scss";

interface Props {
  review?: CourseDTO.IReview;
}

const PersonReview: React.FC<Props> = props => {
  const { review } = props;
  return (
    <div className={styles.root}>
      <div className={styles.personInfoWrapper}>
        <img
          className={styles.reviewAvatar}
          alt="reviewAvatar"
          src={`${process.env["API"]}${review?.img}`}
          onError={(event: any) => {
            event.target.src = `${process.env["API"]}/komus_num/app/images/default-avatar-icon.svg`;
            event.onerror = null;
          }}
        />
        <div className={styles.personInfo}>
          <h3>{review?.person_fullname}</h3>
          <span className={styles.personPosition}>
            {review?.person_position_name}
          </span>
          <Rating
            items={5}
            currentValue={review?.rate || 0}
            isEditable={false}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p>{review?.max_text}</p>
      </div>
      <div className={cn(styles.likes, "courses__item-count likes")}>
        <img
          src={`${process.env["API"]}/komus_num/app/images/icons/likes.svg`}
          alt=""
        />
        <span>{review?.likes || 0}</span>
      </div>
    </div>
  );
};

export { PersonReview };
