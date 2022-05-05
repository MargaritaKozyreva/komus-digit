import { Rating } from "@src/components/Raiting";
import { TurboPersonCard } from "@src/components/TurboPersonCard/TurboPersonCard";
import { ModalKey } from "@src/modules/Modal/components/ModalController";
import { modalActions } from "@src/modules/Modal/redux/ModalSlices";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CourseDTO } from "../../dataContext/CourseDTO.dto";
import PlusIcon from "@ui/Icons/PlusIcon.svg";
import MinusIcon from "@ui/Icons/MinusIcon.svg";

import styles from "./CourseReview.module.scss";
import Button from "@src/ui/Button";
import classNames from "classnames";

interface CourseReviewProps {
  reviews: CourseDTO.ICourse["info"]["reviews"];
}

const CourseReview: React.FC<CourseReviewProps> = props => {
  const { reviews } = props;
  const [limitReviews, setLimitReview] =
    useState<CourseDTO.ICourse["info"]["reviews"]>(reviews);
  const [hide, setHide] = useState<boolean>(false);

  useEffect(() => {
    setLimitReview(prevState => [...prevState].slice(0, 5));
  }, [hide]);

  const dispatch = useDispatch();

  const onClickHandler = review => {
    dispatch(
      modalActions.showModal({
        key: ModalKey.PersonReview,
        withBackground: true,
        payload: {
          review: review,
        },
      })
    );
  };

  return (
    <>
      <div className={styles.title}>Отзывы</div>
      <div className={styles.root}>
        {limitReviews.map(review => (
          <TurboPersonCard withFlag={false} key={review.person_id}>
            <div className={styles.rootWrapper}>
              {/* <img alt="" src={`${process.env["API"]}${review.img}` || `/cat.jpg`} /> */}
              <img
                className={styles.reviewAvatar}
                alt=""
                src={`${process.env["API"]}${review.img}`}
                onError={(event: any) => {
                  event.target.src = `${process.env["API"]}/komus_num/app/images/default-avatar-icon.png`;
                  event.onerror = null;
                }}
              />
              <div className={styles.content}>
                <h3>{review.person_fullname}</h3>
                <Rating
                  items={5}
                  currentValue={review.rate}
                  isEditable={false}
                />
                <p className={styles.minText}>{review.min_text}</p>
                <p>
                  <a
                    className="reviews__item-link"
                    onClick={() => onClickHandler(review)}
                  >
                    Подробнее
                  </a>
                </p>
                <div
                  className={classNames(
                    styles.likes,
                    "courses__item-count likes"
                  )}
                >
                  <img
                    src={`${process.env["API"]}/komus_num/app/images/icons/likes.svg`}
                    alt=""
                  />
                  <span>{review.likes || 0}</span>
                </div>
              </div>
            </div>
          </TurboPersonCard>
        ))}

        {reviews.length > 4 && limitReviews.length < reviews.length && (
          <TurboPersonCard
            className={styles.loadCourseCard}
            withFlag={false}
            onClick={() =>
              setLimitReview(prevState => {
                const newArr = [...reviews];
                return [...prevState, ...newArr.splice(prevState.length, 5)];
              })
            }
          >
            <div className={styles.rootWrapper}>
              {/* <img alt="" src={`${process.env["API"]}${review.img}` || `/cat.jpg`} /> */}
              <div className={styles.loadCircle}>{<PlusIcon />}</div>
              <div className={styles.loadText}>Загрузить ещё</div>
            </div>
          </TurboPersonCard>
        )}

        {limitReviews.length === reviews.length && (
          <TurboPersonCard
            className={styles.loadCourseCard}
            withFlag={false}
            onClick={() => setHide(prev => !prev)}
          >
            <div className={styles.rootWrapper}>
              {/* <img alt="" src={`${process.env["API"]}${review.img}` || `/cat.jpg`} /> */}
              <div className={styles.hideCircle}>{<MinusIcon />}</div>
              <div className={styles.loadText}>Скрыть</div>
            </div>
          </TurboPersonCard>
        )}
      </div>
    </>
  );
};

export default CourseReview;
