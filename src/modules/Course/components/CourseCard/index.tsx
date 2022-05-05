import React, { useState, useEffect } from "react";
import Button from "@ui/Button";
import { CourseDTO } from "@src/modules/Course/dataContext/CourseDTO.dto";
import cn from "classnames";
import styles from "./CourseCard.module.scss";
import { Link } from "react-router-dom";
import { WithSkeleton } from "@src/ui/WithSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "@src/modules/Modal/redux/ModalSlices";
import { ModalKey } from "@src/modules/Modal/components/ModalController";
import { UserState } from "@src/modules/User/redux/UserSlices";
import { getUser } from "@src/modules/User/dataContext/UserContext";
import { UserDTO } from '@src/modules/User/dataContext/UserDTO.dto';

const CourseCard: React.FC<{course: CourseDTO.ICourse, user: UserDTO.UserState}> = props => {

  const {course, user} = props;

  const dispatch = useDispatch();

  const onClickHandlerAssessment = () => {
    dispatch(
      modalActions.showModal({
        key: ModalKey.AssessmentTableView,
        withBackground: true,
        payload: {
          courseId: course.id,
        },
      })
    );
  };
  const onClickHandlerRate = courseId => {
    dispatch(
      modalActions.showModal({
        key: ModalKey.PersonRate,
        withBackground: true,
        payload: {
          courseId: courseId,
        },
      })
    );
  };

  return (
    <div className={cn(styles.courseCard)}>
      {/* <img alt="" src={`${process.env["API"]}${props.img}` || `/cat.jpg`} /> */}
      <img
        className={styles.courseImg}
        alt=""
        src={`${process.env["API"]}${course.img}`}
        onError={(event: any) => {
          event.target.src = `${process.env["API"]}/komus_num/app/images/driver.jpg`;
          event.onerror = null;
        }}
      />
      <div className={cn(styles.content)}>
        <div className={styles.header}>
          <span className={styles.courseTitle}>{course.title}</span>
        </div>

        <div
          className={cn(styles.courseDesc)}
          dangerouslySetInnerHTML={{ __html: course.desc }}
        />
        <div className={styles.footer}>
          <div className={styles.footerBtns}>
            <a href={`/_wt/${course.id}`} target="_blank">
              <Button withCircle mode="orange">
                Пройти курс
              </Button>
            </a>

            <Button
              withCircle
              mode="orange"
              onClick={() => onClickHandlerRate(course.id)}
            >
              Оставить отзыв
            </Button>
            {user.isBoss && (
              <Button
                withCircle
                mode="orange"
                onClick={onClickHandlerAssessment}
              >
                Назначить сотруднику
              </Button>
            )}
          </div>

          <div className="courses__item-counter">
            <div className="courses__item-count likes">
              <img
                src={`${process.env["API"]}/komus_num/app/images/icons/likes.svg`}
                alt=""
              />
              <span>{course.likes}</span>
            </div>
            <div className="courses__item-count comments">
              <img
                src={`${process.env["API"]}/komus_num/app/images/icons/comments.svg`}
                alt=""
              />
              <span>{course.comments}</span>
            </div>
            <div className="courses__item-count time">
              <img
                src={`${process.env["API"]}/komus_num/app/images/icons/time.svg`}
                alt=""
              />
              <span>{course.time_to_pass}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
