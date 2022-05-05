import React from "react";
import { CourseDTO } from "@src/interfaces/course.interface";
import './CourseList.scss';
import { Link } from 'react-router-dom';

interface CourseListProps {
  courses: CourseDTO.ICourse[];
}

const CourseList: React.FC<CourseListProps> = props => {
  const { courses } = props;
  return (
    <div className='courses__list'>
      {courses.map(course => (
        <div className="courses__item" key={course.id}>
          <div className="courses__item-progress">
            <div className="courses__item-progressText">
              Пройден на {course.progress}%
            </div>
            <div className="courses__item-progressBar">
              <div
                className="progress-bar-length"
                style={{ width: `${course.progress}%` }}
                data-progress={course.progress}
              ></div>
            </div>
          </div>
          <div className="courses__item-inner">
            <div className="courses__item-image">
              <img
                src={`${process.env["API"]}${course.img}`}
                onError={(event: any) => {
                  event.target.src = `${process.env["API"]}/komus_num/app/images/courses.png`;
                  event.onerror = null;
                }}
                alt=""
              />
            </div>
            <img
              className="courses__item-image--mobile"
              src={`${process.env["API"]}/komus_num/app/images/mobile-courses.png`}
              alt=""
            />
            <div className="courses__item-box">
              <p className="courses__item-personal">{course.tags}</p>
              <h6 className="courses__item-title">
                {course.title}
              </h6>
            </div>
          </div>
          <div className="courses__item-info">
            <p className="courses__item-descr">
            {course.description}
            </p>
            <div className="courses__item-footer">
              <Link to={`/komus_digital/course/${course.id}`} className="courses__item-link">
                Смотреть курс...
              </Link>
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
                  <span>{course.likes}</span>
                </div>
                <div className="courses__item-count time">
                  <img
                    src={`${process.env["API"]}/komus_num/app/images/icons/time.svg`}
                    alt=""
                  />
                  <span>{course.estimate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export {CourseList};
